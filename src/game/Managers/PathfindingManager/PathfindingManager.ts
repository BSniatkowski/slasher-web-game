import { Mesh, Vector3 } from 'three'

import { CentroidsHelper } from './helpers/CentroidsHelper/CentroidsHelper'
import { GraphHelper } from './helpers/GraphHelper/GraphHelper'
import { createNodeChecker } from './helpers/NodeChecker/NodeChecker'
import { TFindNodeIdByPosition } from './helpers/NodeChecker/NodeChecker.types'
import { createNodeGetter } from './helpers/NodeGetter/NodeGetter'
import { PolygonsHelper } from './helpers/PolygonsHelper/PolygonsHelper'
import {
    IPathfindingManagerState,
    IWebWorker,
    IWebWorkerOnRespondMessageEvent,
    TCreatePathfindingManager,
    TDelegateToWebWorker,
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

    const disposeWebWorker = () => {
        for (const WebWorker of state.WebWorkers) {
            if (WebWorker?.instance) WebWorker.instance.terminate()
        }
    }

    const initWebWorkers = () => {
        disposeWebWorker()

        const WebWorkers = []

        const webWorkersCount = navigator?.hardwareConcurrency ? navigator.hardwareConcurrency : 1

        for (let webWorkerIndex = 0; webWorkerIndex < webWorkersCount; webWorkerIndex++) {
            const instance = new Worker(
                new URL('./helpers/GraphTraverse/GraphTraverse.webworker.ts', import.meta.url),
                {
                    type: 'module',
                },
            )

            const WebWorker: IWebWorker = {
                id: `${WEB_WORKER}${webWorkerIndex}`,
                instance,
                que: [],
            }

            WebWorker.instance.postMessage({ type: 'init', graph: state.graph })

            WebWorker.instance.onmessage = (event: IWebWorkerOnRespondMessageEvent) => {
                const quedItem = WebWorker.que.find(({ id }) => id === event.data.id)

                if (!quedItem) return

                quedItem.resolve(event.data.path)
                WebWorker.que = WebWorker.que.filter(({ id }) => id !== quedItem.id)
            }

            WebWorkers.push(WebWorker)
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

    const delegateToWebWorker: TDelegateToWebWorker = (pathData, resolve) => {
        state.WebWorkers.sort((workerA, workerB) => workerA.que.length - workerB.que.length)

        const theLeastOccupiedWebWorker = state.WebWorkers[0]

        theLeastOccupiedWebWorker.que.push({ id: pathData.id, resolve })
        theLeastOccupiedWebWorker.instance.postMessage(pathData)
    }

    // @ts-expect-error Something is still missing in types because it infers it as Promise<value> | value instead of just first one
    // TODO - It needs further research and types fix
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
                    type: 'calculate',
                    id,
                    startPosition,
                    startNodeId,
                    destinationPosition,
                    destinationNodeId,
                },
                (rawPath) => {
                    const path = []

                    if (rawPath) {
                        for (const point of rawPath) {
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
        disposeWebWorker()
    }

    return { init, findPath, getRandomNode, getNodeIdByPosition, dispose }
}
