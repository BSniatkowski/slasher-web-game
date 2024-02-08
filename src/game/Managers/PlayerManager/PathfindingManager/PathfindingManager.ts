import { Mesh } from 'three'

import { CentroidsHelper } from './helpers/CentroidsHelper/CentroidsHelper'
import { GraphHelper } from './helpers/GraphHelper/GraphHelper'
import { GraphTraverse } from './helpers/GraphTraverse/GraphTraverse'
import { createNodeChecker } from './helpers/NodeChecker/NodeChecker'
import { PolygonsHelper } from './helpers/PolygonsHelper/PolygonsHelper'
import {
    IPathfindingManagerState,
    TCreatePathfindingManager,
    TFindPath,
} from './PathfindingManager.types'

export const createPathfindingManager: TCreatePathfindingManager = ({ Scene, ResourceTracker }) => {
    const state: IPathfindingManagerState = {
        graph: null,
        NodeChecker: null,
    }

    const init = () => {
        const board = ResourceTracker.getTrackedResource('board') as Mesh

        if (!board) return

        const { polygons } = PolygonsHelper({ Scene, ResourceTracker, board })

        const { centroids } = CentroidsHelper({ Scene, ResourceTracker, polygons })

        const { graph } = GraphHelper({ centroids })

        state.graph = graph

        state.NodeChecker = createNodeChecker({ graph })
    }

    const findPath: TFindPath = ({ startPosition, destinationPosition }) => {
        if (!state.NodeChecker) return { path: [] }

        const { nodeId: startNodeId } = state.NodeChecker.findNodeByPosition({
            position: startPosition,
        })

        const { nodeId: destinationNodeId } = state.NodeChecker.findNodeByPosition({
            position: destinationPosition,
        })

        if (!startNodeId || !destinationNodeId || !state.graph) {
            console.warn(
                'Something wnet wrong and pathfinding is not possible!',
                startNodeId,
                destinationNodeId,
                state.graph,
            )

            return { path: [startPosition, destinationPosition] }
        }

        const { path, shorterPath } = GraphTraverse({ startNodeId, destinationNodeId, graph: state.graph })

        return { path, shorterPath }
    }

    return { init, findPath }
}
