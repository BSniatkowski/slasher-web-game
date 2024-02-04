import { Mesh, MeshBasicMaterial, SphereGeometry, Vector2 } from 'three'

import { CentroidsHelper } from './helpers/CentroidsHelper/CentroidsHelper'
import { PolygonsHelper } from './helpers/PolygonsHelper/PolygonsHelper'
import { TCreatePathfindingManager } from './PathfindingManager.types'

export const createPathfindingManager: TCreatePathfindingManager = ({ Scene, ResourceTracker }) => {
    const init = () => {
        const board = ResourceTracker.getTrackedResource('board')

        if (!board) return

        const { polygons } = PolygonsHelper({ Scene, ResourceTracker, board })

        const { centroids } = CentroidsHelper({ Scene, ResourceTracker, polygons })
    }

    return { init }
}
