import { TGraph, TGraphHelper } from './GraphHelper.types'

export const GraphHelper: TGraphHelper = ({ centroids }) => {
    const graph: TGraph = []

    for (const centroid of centroids) {
        const { center, polygons } = centroid
        const neighborNodesIds = []

        for (const potentialNeighborCentroid of centroids) {
            const { center: pNcenter, polygons: pNPolygons } = potentialNeighborCentroid

            if (pNcenter.x === center.x && pNcenter.y === center.y) continue

            const sharedPolygons = []

            for (const polygon of polygons) {
                for (const pNPolygon of pNPolygons) {
                    if (pNPolygon.x === polygon.x && pNPolygon.y === polygon.y)
                        sharedPolygons.push(pNPolygons)
                }
            }

            if (sharedPolygons.length >= 2) neighborNodesIds.push(`${pNcenter.x}#${pNcenter.y}`)
        }

        const node = {
            id: `${centroid.center.x}#${centroid.center.y}`,
            ...centroid,
            neighborNodesIds,
        }

        graph.push(node)
    }

    return { graph }
}
