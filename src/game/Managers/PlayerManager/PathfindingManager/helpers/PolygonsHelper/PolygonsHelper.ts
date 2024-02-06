const isDev = import.meta.env.DEV

import { Mesh, MeshBasicMaterial, SphereGeometry, Vector2 } from 'three'

import { TPolygonsHelper } from './PolygonsHelper.types'

export const PolygonsHelper: TPolygonsHelper = ({ Scene, ResourceTracker, board }) => {
    const pointsArray = board.geometry.getAttribute('position').array

    const polygons: Array<Vector2> = []

    for (let polygonIndex = 0; polygonIndex < pointsArray.length; polygonIndex += 3) {
        polygons.push(new Vector2(pointsArray[polygonIndex], pointsArray[polygonIndex + 1]))
    }

    if (!isDev) return { polygons }

    const polygonGeometry = new SphereGeometry(0.1, 8, 0.1)
    const polygonMaterial = new MeshBasicMaterial({ color: 'blue' })

    const polygonMesh = new Mesh(polygonGeometry, polygonMaterial)
    polygonMesh.matrixAutoUpdate = false

    const uniquePolygonsForPresentation = polygons.length > 0 ? [polygons[0]] : []

    for (const polygon of polygons) {
        if (!uniquePolygonsForPresentation.find(({ x, y }) => polygon.x === x && polygon.y === y))
            uniquePolygonsForPresentation.push(polygon)
    }

    for (
        let polygonIndex = 0;
        polygonIndex < uniquePolygonsForPresentation.length;
        polygonIndex++
    ) {
        const newPolygonMesh = polygonMesh.clone()
        newPolygonMesh.position.set(
            uniquePolygonsForPresentation[polygonIndex].x,
            uniquePolygonsForPresentation[polygonIndex].y,
            0.05,
        )
        newPolygonMesh.updateMatrix()

        ResourceTracker.trackResource({
            id: `polygon${polygonIndex}`,
            resource: newPolygonMesh,
        })
        Scene.add(newPolygonMesh)
    }

    return { polygons }
}
