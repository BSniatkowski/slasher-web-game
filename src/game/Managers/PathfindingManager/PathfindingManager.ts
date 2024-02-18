import { Mesh, Vector3 } from 'three'

import { CentroidsHelper } from './helpers/CentroidsHelper/CentroidsHelper'
import { GraphHelper } from './helpers/GraphHelper/GraphHelper'
import { createNodeChecker } from './helpers/NodeChecker/NodeChecker'
import { TFindNodeIdByPosition } from './helpers/NodeChecker/NodeChecker.types'
import { createNodeGetter } from './helpers/NodeGetter/NodeGetter'
import { PolygonsHelper } from './helpers/PolygonsHelper/PolygonsHelper'
import {
    IPathfindingManagerState,
    TCreatePathfindingManager,
    TFindPath,
} from './PathfindingManager.types'

const WEB_WORKER = 'web_worker'

export const createPathfindingManager: TCreatePathfindingManager = ({ ResourceTracker }) => {
    const state: IPathfindingManagerState = {
        graph: null,
        NodeChecker: null,
        NodeGetter: null,
        WebWorkers: [],
    }

    const initWebWorkers = () => {
        const WebWorkers = []

        const webWorkersCount = navigator?.hardwareConcurrency
            ? navigator.hardwareConcurrency - 1
            : 1

        for (let webWorkerIndex = 0; webWorkerIndex < webWorkersCount; webWorkerIndex++) {
            const WebWorker = new Worker(
                new URL('./helpers/GraphTraverse/GraphTraverse.webworker.ts', import.meta.url),
                {
                    type: 'module',
                },
            )

            WebWorkers.push({
                id: `${WEB_WORKER}${webWorkerIndex}`,
                instance: WebWorker,
                isInUse: false,
                que: 0,
            })
        }

        return WebWorkers
    }

    const init = () => {
        const board = ResourceTracker.getTrackedResource('board') as Mesh

        if (!board) return

        const { polygons } = PolygonsHelper({ ResourceTracker, board })

        const { centroids } = CentroidsHelper({ ResourceTracker, polygons })

        const { graph } = GraphHelper({ centroids })

        state.graph = graph

        state.NodeChecker = createNodeChecker({ graph })
        state.NodeGetter = createNodeGetter({ graph })
        state.WebWorkers = initWebWorkers()
    }

    const addToWebWorkerQue = (pathData, promiseResolve) => {
        state.WebWorkers.sort((workerA, workerB) => workerA.que - workerB.que)

        const theLeastQuedWebWorker = state.WebWorkers[0]

        theLeastQuedWebWorker.instance.onmessage = (event) => {
            promiseResolve(event.data)

            theLeastQuedWebWorker.que--
            if (theLeastQuedWebWorker.que === 0) theLeastQuedWebWorker.isInUse = false
        }

        theLeastQuedWebWorker.que++
        theLeastQuedWebWorker.instance.postMessage(pathData)
    }

    const delegateToWebWorker = (pathData, promiseResolve) => {
        console.log(JSON.parse(JSON.stringify(state.WebWorkers)))

        const AvailableWebWorker = state.WebWorkers.find(({ isInUse }) => !isInUse)

        if (!AvailableWebWorker) {
            addToWebWorkerQue(pathData, promiseResolve)
            return
        }

        AvailableWebWorker.isInUse = true

        AvailableWebWorker.instance.onmessage = (event) => {
            promiseResolve(event.data)

            AvailableWebWorker.isInUse = false
        }

        AvailableWebWorker.instance.postMessage(pathData)
    }

    const findPath: TFindPath = ({ id, startPosition, destinationPosition }) => {
        if (!state.NodeChecker) return []

        const startNodeId = state.NodeChecker.findNodeIdByPosition(startPosition)

        const destinationNodeId = state.NodeChecker.findNodeIdByPosition(destinationPosition)

        if (!startNodeId || !destinationNodeId || !state.graph) {
            console.warn(
                'Something went wrong and pathfinding is not possible!',
                startNodeId,
                destinationNodeId,
                state.graph,
            )

            return [startPosition, destinationPosition]
        }

        return new Promise((resolve) => {
            delegateToWebWorker(
                {
                    id,
                    startPosition,
                    startNodeId,
                    destinationPosition,
                    destinationNodeId,
                    graph: state.graph,
                },
                (event) => {
                    if (event.id !== id) return

                    const path = []

                    if (event?.path) {
                        for (const point of event.path) {
                            path.push(new Vector3(point.x, point.y, point.z ?? 0))
                        }

                        resolve(path)
                    }

                    resolve([startPosition, destinationPosition])
                },
            )
        })
    }

    const getRandomNode = () =>
        state.NodeGetter?.getRandomNode ? state.NodeGetter.getRandomNode() : null

    const getNodeIdByPosition: TFindNodeIdByPosition = (position) =>
        state.NodeChecker?.findNodeIdByPosition
            ? state.NodeChecker.findNodeIdByPosition(position)
            : null

    const dispose = () => {
        for (const WebWorker of state.WebWorkers) {
            if (WebWorker?.instance) WebWorker.instance.terminate()
        }
    }

    return { init, findPath, getRandomNode, getNodeIdByPosition, dispose }
}
