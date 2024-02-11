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
            return speed / position.distanceToSquared(state.pathCopy[state.actualPointIndex])
    }

    const checkIfPointIsAchieved = (point: Vector3) => {
        const position = positionGetter()

        if (position) return position.distanceToSquared(point) <= 0.1
    }

    const callback = () => {
        const isPointAchieved = checkIfPointIsAchieved(state.pathCopy[state.actualPointIndex])

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
            state.pathCopy[state.actualPointIndex],
            lerpAlpha,
        )

        positionUpdate(newPosition)
    }

    return callback
}
