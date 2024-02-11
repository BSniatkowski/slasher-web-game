import { CircleGeometry, Mesh, MeshBasicMaterial, Vector3 } from 'three'

import { TCentroidsHelper } from './CentroidsHelper.types'

const isDev = import.meta.env.DEV

export const CentroidsHelper: TCentroidsHelper = ({ Scene, ResourceTracker, polygons }) => {
    const centroids = []

    for (let graphPolygonIndex = 0; graphPolygonIndex < polygons.length; graphPolygonIndex += 3) {
        const centroidCenter = new Vector3()

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

    if (!isDev) return { centroids }

    const centroidGeometry = new CircleGeometry(0.05, 12)
    const centroidMaterial = new MeshBasicMaterial({
        color: 'red',
        depthTest: false,
        depthWrite: false,
        transparent: true,
    })

    const centroidMesh = new Mesh(centroidGeometry, centroidMaterial)
    centroidMesh.matrixAutoUpdate = false
    centroidMesh.renderOrder = 1

    for (let centroidIndex = 0; centroidIndex < centroids.length; centroidIndex++) {
        const newCentroidMesh = centroidMesh.clone()
        newCentroidMesh.position.copy(centroids[centroidIndex].center)
        newCentroidMesh.updateMatrix()

        ResourceTracker.trackResource({
            id: `centroid${centroidIndex}`,
            resource: newCentroidMesh,
        })
        Scene.add(newCentroidMesh)
    }

    return { centroids }
}
