import { Vector3 } from 'three'

import { TCreateMoveAlongPathAnimation } from './createMoveAlongPathAnimation.types'

export const createMoveAlongPathAnimation: TCreateMoveAlongPathAnimation = ({
    path,
    speed,
    positionGetter,
    positionUpdate,
}) => {
    const pathCopy = []

    for (const point of path) {
        pathCopy.push(point.clone())
    }

    const state = {
        pathCopy,
        actualPointIndex: 0,
        vectorLerpPerTick: 0,
    }

    const calculateVectorLerpPerTick = () => {
        const position = positionGetter()

        if (position)
            return (
                speed /
                position.distanceToSquared(
                    new Vector3(
                        state.pathCopy[state.actualPointIndex].x,
                        state.pathCopy[state.actualPointIndex].y,
                    ),
                )
            )
    }

    const checkIfPointIsAchieved = (point: Vector3) => {
        const position = positionGetter()

        if (position) return position.distanceToSquared(point) <= 0.1
    }

    const callback = () => {
        const isPointAchieved = checkIfPointIsAchieved(
            new Vector3(
                state.pathCopy[state.actualPointIndex].x,
                state.pathCopy[state.actualPointIndex].y,
            ),
        )

        if (isPointAchieved) {
            if (state.actualPointIndex + 1 < state.pathCopy.length) state.actualPointIndex++
            return
        }

        const lerpAlpha = calculateVectorLerpPerTick()

        if (!lerpAlpha) return

        const actualPosition = positionGetter()

        if (!actualPosition) return

        const newPosition = new Vector3().lerpVectors(
            actualPosition,
            new Vector3(
                state.pathCopy[state.actualPointIndex].x,
                state.pathCopy[state.actualPointIndex].y,
            ),
            lerpAlpha,
        )

        positionUpdate(newPosition)
    }

    return callback
}
