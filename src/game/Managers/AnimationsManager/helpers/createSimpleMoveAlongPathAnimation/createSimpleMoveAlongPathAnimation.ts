import {
    IMoveAlongPathAnimationState,
    TCreateSimpleMoveAlongPathAnimation,
    TFindNextPosition,
} from './createSimpleMoveAlongPathAnimation.types'

export const createSimpleMoveAlongPathAnimation: TCreateSimpleMoveAlongPathAnimation = ({
    start,
    destination,
    range,
    positionUpdate,
}) => {
    const state: IMoveAlongPathAnimationState = {
        startClone: start.clone(),
        destinationClone: destination.clone().normalize().multiplyScalar(range),
    }

    const findNextPosition: TFindNextPosition = (lerpAlpha) => {
        return state.startClone.clone().lerp(state.destinationClone, lerpAlpha)
    }

    const callback = ({ tick, ticksDuration }: { tick: number; ticksDuration: number }) => {
        const nextPosition = findNextPosition(tick / ticksDuration)

        positionUpdate(nextPosition)
    }

    return callback
}
