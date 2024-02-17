import { Mesh } from 'three'

import { CentroidsHelper } from './helpers/CentroidsHelper/CentroidsHelper'
import { GraphHelper } from './helpers/GraphHelper/GraphHelper'
import { GraphTraverse } from './helpers/GraphTraverse/GraphTraverse'
import { createNodeChecker } from './helpers/NodeChecker/NodeChecker'
import { TFindNodeIdByPosition } from './helpers/NodeChecker/NodeChecker.types'
import { createNodeGetter } from './helpers/NodeGetter/NodeGetter'
import { PolygonsHelper } from './helpers/PolygonsHelper/PolygonsHelper'
import {
    IPathfindingManagerState,
    TCreatePathfindingManager,
    TFindPath,
} from './PathfindingManager.types'

export const createPathfindingManager: TCreatePathfindingManager = ({ ResourceTracker }) => {
    const state: IPathfindingManagerState = {
        graph: null,
        NodeChecker: null,
        NodeGetter: null,
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
    }

    const findPath: TFindPath = ({ startPosition, destinationPosition }) => {
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

        const { path } = GraphTraverse({
            startPosition,
            startNodeId,
            destinationPosition,
            destinationNodeId,
            graph: state.graph,
        })

        return path
    }

    const getRandomNode = () =>
        state.NodeGetter?.getRandomNode ? state.NodeGetter.getRandomNode() : null

    const getNodeIdByPosition: TFindNodeIdByPosition = (position) =>
        state.NodeChecker?.findNodeIdByPosition
            ? state.NodeChecker.findNodeIdByPosition(position)
            : null

    return { init, findPath, getRandomNode, getNodeIdByPosition }
}
