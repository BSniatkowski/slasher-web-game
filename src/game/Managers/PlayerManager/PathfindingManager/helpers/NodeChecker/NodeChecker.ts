import { Vector2, Vector3 } from 'three'

import { TCreateNodeChecker, TFindNodeByPosition } from './NodeChecker.types'

const checkIfPointIsInsideTriangle = ({
    position,
    polygons,
}: {
    position: Vector2
    polygons: Array<Vector2>
}) => {
    const positionIn3 = new Vector3(position.x, position.y, 0)

    const pointA = new Vector3(polygons[0].x, polygons[0].y, 0).sub(positionIn3)
    const pointB = new Vector3(polygons[1].x, polygons[1].y, 0).sub(positionIn3)
    const pointC = new Vector3(polygons[2].x, polygons[2].y, 0).sub(positionIn3)

    const u = pointB.cross(pointC)
    const v = pointC.cross(pointA)
    const w = pointA.cross(pointB)

    if (u.dot(v) < 0) return false
    if (u.dot(w) < 0) return false

    return true
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
