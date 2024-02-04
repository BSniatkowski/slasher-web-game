import { CentroidsHelper } from './helpers/CentroidsHelper/CentroidsHelper'
import { GraphHelper } from './helpers/GraphHelper/GraphHelper'
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
        const board = ResourceTracker.getTrackedResource('board')

        if (!board) return

        const { polygons } = PolygonsHelper({ Scene, ResourceTracker, board })

        const { centroids } = CentroidsHelper({ Scene, ResourceTracker, polygons })

        const { graph } = GraphHelper({ centroids })

        state.graph = graph

        state.NodeChecker = createNodeChecker({ graph })
    }

    const findPath: TFindPath = ({ startPosition, destinationPosition }) => {
        if (!state.NodeChecker) return { path: [] }

        const startNode = state.NodeChecker.findNodeByPosition({ position: startPosition })

        const destinationNode = state.NodeChecker.findNodeByPosition({
            position: destinationPosition,
        })

        console.log(startNode, destinationNode)

        return { path: [startPosition, destinationPosition] }
    }

    return { init, findPath }
}
