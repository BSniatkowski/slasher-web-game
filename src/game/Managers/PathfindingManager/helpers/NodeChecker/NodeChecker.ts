import { Vector3 } from 'three'

import { TCreateNodeChecker, TFindNodeByPosition } from './NodeChecker.types'

const checkIfPointIsInsideTriangle = ({
    position,
    polygons,
}: {
    position: Vector3
    polygons: Array<Vector3>
}) => {
    const p1 = polygons[0]
    const p2 = polygons[1]
    const p3 = polygons[2]

    const denominator = (p2.y - p3.y) * (p1.x - p3.x) + (p3.x - p2.x) * (p1.y - p3.y)
    const a =
        ((p2.y - p3.y) * (position.x - p3.x) + (p3.x - p2.x) * (position.y - p3.y)) / denominator
    const b =
        ((p3.y - p1.y) * (position.x - p3.x) + (p1.x - p3.x) * (position.y - p3.y)) / denominator
    const c = 1 - a - b

    return 0 <= a && a <= 1 && 0 <= b && b <= 1 && 0 <= c && c <= 1
}

export const createNodeChecker: TCreateNodeChecker = ({ graph }) => {
    const findNodeByPosition: TFindNodeByPosition = ({ position }) => {
        for (const graphNode of graph) {
            const { id, polygons } = graphNode

            const isInsideTriangle = checkIfPointIsInsideTriangle({
                position,
                polygons,
            })

            if (isInsideTriangle) return { nodeId: id }
        }

        return { nodeId: null }
    }

    return { findNodeByPosition }
}
