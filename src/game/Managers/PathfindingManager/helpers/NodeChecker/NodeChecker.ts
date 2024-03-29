import { Vector2 } from 'three'

import { TCreateNodeChecker, TFindNodeIdByPosition } from './NodeChecker.types'

const checkIfPointIsInsideTriangle = ({
    position,
    polygons,
}: {
    position: Vector2
    polygons: Array<Vector2>
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
    const findNodeIdByPosition: TFindNodeIdByPosition = (position) => {
        const position2D = new Vector2(position.x, position.y)

        for (const graphNode of graph) {
            const { id, polygons } = graphNode

            const isInsideTriangle = checkIfPointIsInsideTriangle({
                position: position2D,
                polygons,
            })

            if (isInsideTriangle) return id
        }

        return null
    }

    return { findNodeIdByPosition }
}
