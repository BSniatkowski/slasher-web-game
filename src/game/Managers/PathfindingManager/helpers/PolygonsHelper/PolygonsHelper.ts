const isDev = import.meta.env.DEV

import { CircleGeometry, Mesh, MeshBasicMaterial, Vector3 } from 'three'

import { TPolygonsHelper } from './PolygonsHelper.types'

export const PolygonsHelper: TPolygonsHelper = ({ Scene, ResourceTracker, board }) => {
    const pointsArray = board.geometry.getAttribute('position').array

    const polygons: Array<Vector3> = []

    for (let polygonIndex = 0; polygonIndex < pointsArray.length; polygonIndex += 3) {
        polygons.push(new Vector3(pointsArray[polygonIndex], pointsArray[polygonIndex + 1]))
    }

    if (!isDev) return { polygons }

    const polygonGeometry = new CircleGeometry(0.05, 12)
    const polygonMaterial = new MeshBasicMaterial({
        color: 'blue',
        depthTest: false,
        depthWrite: false,
        transparent: true,
    })

    const polygonMesh = new Mesh(polygonGeometry, polygonMaterial)
    polygonMesh.matrixAutoUpdate = false
    polygonMesh.renderOrder = 1

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
        newPolygonMesh.position.copy(uniquePolygonsForPresentation[polygonIndex])
        newPolygonMesh.updateMatrix()

        ResourceTracker.trackResource({
            id: `polygon${polygonIndex}`,
            resource: newPolygonMesh,
        })
        Scene.add(newPolygonMesh)
    }

    return { polygons }
}
