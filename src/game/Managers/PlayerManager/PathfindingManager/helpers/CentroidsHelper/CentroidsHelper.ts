import { Mesh, MeshBasicMaterial, SphereGeometry, Vector2 } from 'three'

import { TCentroidsHelper } from './CentroidsHelper.types'

const isDev = import.meta.env.DEV

export const CentroidsHelper: TCentroidsHelper = ({ Scene, ResourceTracker, polygons }) => {
    const centroids = []

    for (let graphPolygonIndex = 0; graphPolygonIndex < polygons.length; graphPolygonIndex += 3) {
        const centroid = new Vector2()

        centroid
            .addVectors(polygons[graphPolygonIndex], polygons[graphPolygonIndex + 1])
            .add(polygons[graphPolygonIndex + 2])
            .multiplyScalar(1 / 3)

        centroids.push(centroid)
    }

    if (!isDev) return { centroids }

    const centroidGeometry = new SphereGeometry(0.1, 8, 0.1)
    const centroidMaterial = new MeshBasicMaterial({ color: 'red' })

    const centroidMesh = new Mesh(centroidGeometry, centroidMaterial)
    centroidMesh.matrixAutoUpdate = false

    for (let centroidIndex = 0; centroidIndex < centroids.length; centroidIndex++) {
        const newCentroidMesh = centroidMesh.clone()
        newCentroidMesh.position.set(centroids[centroidIndex].x, centroids[centroidIndex].y, 0.05)
        newCentroidMesh.updateMatrix()

        ResourceTracker.trackResource({
            id: `centroid${centroidIndex}`,
            resource: newCentroidMesh,
        })
        Scene.add(newCentroidMesh)
    }

    return { centroids }
}
