import { Vector2 } from 'three'

import { TCreateNodeChecker, TFindNodeByPosition } from './NodeChecker.types'

const checkPointsDirections = ({
    position,
    polygons,
}: {
    position: Vector2
    polygons: Array<Vector2>
}) => ({
    first: polygons[0].clone().sub(position),
    second: polygons[1].clone().sub(position),
    third: polygons[2].clone().sub(position),
})

const comparePositionToCenterDirectionsOfTriangle = ({
    position,
    center,
    polygons,
}: {
    position: Vector2
    center: Vector2
    polygons: Array<Vector2>
}) => {
    const directionsToCenter = checkPointsDirections({ position: center, polygons })

    const directionsToPosition = checkPointsDirections({ position, polygons })

    if (!directionsToCenter.first.roundToZero().equals(directionsToPosition.first.roundToZero()))
        return false
    if (!directionsToCenter.second.roundToZero().equals(directionsToPosition.second.roundToZero()))
        return false
    if (!directionsToCenter.third.roundToZero().equals(directionsToPosition.third.roundToZero()))
        return false

    return true
}

export const createNodeChecker: TCreateNodeChecker = ({ graph }) => {
    const findNodeByPosition: TFindNodeByPosition = ({ position }) => {
        for (const graphNode of graph) {
            const { id, center, polygons } = graphNode

            const isInsideTriangle = comparePositionToCenterDirectionsOfTriangle({
                position,
                center,
                polygons,
            })

            if (isInsideTriangle) return { nodeId: id }
        }

        return { nodeId: null }
    }

    return { findNodeByPosition }
}
