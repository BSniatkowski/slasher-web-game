const isDev = import.meta.env.DEV
const showDebugHelpers = import.meta.env.SHOW_DEBUG_HELPERS as boolean

import { CircleGeometry, Mesh, MeshBasicMaterial, Vector2 } from 'three'

import { TCentroidsHelper } from './CentroidsHelper.types'

export const CentroidsHelper: TCentroidsHelper = ({ ResourceTracker, polygons }) => {
    const centroids = []

    for (let graphPolygonIndex = 0; graphPolygonIndex < polygons.length; graphPolygonIndex += 3) {
        const centroidCenter = new Vector2()

        centroidCenter
            .addVectors(polygons[graphPolygonIndex], polygons[graphPolygonIndex + 1])
            .add(polygons[graphPolygonIndex + 2])
            .multiplyScalar(1 / 3)
            .multiplyScalar(100)
            .round()
            .divideScalar(100)

        const centroidPolygons = [
            polygons[graphPolygonIndex],
            polygons[graphPolygonIndex + 1],
            polygons[graphPolygonIndex + 2],
        ]

        centroids.push({
            polygons: centroidPolygons,
            center: centroidCenter,
        })
    }

    if (!isDev || !showDebugHelpers) return { centroids }

    const centroidGeometry = new CircleGeometry(0.05, 12)
    const centroidMaterial = new MeshBasicMaterial({
        color: 'red',
        depthTest: false,
        depthWrite: false,
    })

    const centroidMesh = new Mesh(centroidGeometry, centroidMaterial)
    centroidMesh.matrixAutoUpdate = false
    centroidMesh.renderOrder = 1

    for (let centroidIndex = 0; centroidIndex < centroids.length; centroidIndex++) {
        const newCentroidMesh = centroidMesh.clone()

        newCentroidMesh.position.set(
            centroids[centroidIndex].center.x,
            centroids[centroidIndex].center.y,
            0,
        )
        newCentroidMesh.updateMatrix()

        ResourceTracker.trackResource({
            id: `centroid${centroidIndex}`,
            resource: newCentroidMesh,
        })
    }

    return { centroids }
}
