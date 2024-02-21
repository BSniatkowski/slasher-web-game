import {
    IMoveAlongPathAnimationState,
    TCreateMoveAlongPathAnimation,
    TFindLerpBetweenPathPoints,
    TFindNextPosition,
} from './createMoveAlongPathAnimation.types'

export const createMoveAlongPathAnimation: TCreateMoveAlongPathAnimation = ({
    path,
    speedGetter,
    positionUpdate,
    internalPathSetter,
}) => {
    const state: IMoveAlongPathAnimationState = {
        pathCopy: [],
        distanceTraveled: 0,
        pathDistances: [],
    }

    for (let pointIndex = 0; pointIndex < path.length; pointIndex++) {
        state.pathCopy.push(path[pointIndex].clone())

        if (pointIndex === path.length - 1) break

        state.pathDistances.push(path[pointIndex].manhattanDistanceTo(path[pointIndex + 1]))
    }

    const findNextPathPartIndexAndMinDistance = () => {
        const currentSpeed = speedGetter()

        const nextDistanceTraveled = state.distanceTraveled + currentSpeed

        for (let distanceIndex = 0; distanceIndex < state.pathDistances.length; distanceIndex++) {
            const minDistanceForPathPart = state.pathDistances
                .slice(0, distanceIndex)
                .reduce((acc, el) => (acc += el), 0)

            const maxDistanceForPathPart =
                minDistanceForPathPart + state.pathDistances[distanceIndex]

            if (
                nextDistanceTraveled >= minDistanceForPathPart &&
                nextDistanceTraveled < maxDistanceForPathPart
            )
                return { distanceIndex, minDistanceForPathPart, currentSpeed }
        }
    }

    const findLerpBetweenPathPoints: TFindLerpBetweenPathPoints = ({
        distanceIndex,
        minDistanceForPathPart,
        currentSpeed,
    }) => {
        const fullDistanceBetweenPoints = state.pathDistances[distanceIndex]
        const nextTraveledDistanceWithCurrentSpeed =
            state.distanceTraveled - minDistanceForPathPart + currentSpeed

        return nextTraveledDistanceWithCurrentSpeed / fullDistanceBetweenPoints
    }

    const findNextPosition: TFindNextPosition = ({ distanceIndex, lerpAlpha }) => {
        return state.pathCopy[distanceIndex]
            .clone()
            .lerp(state.pathCopy[distanceIndex + 1], lerpAlpha)
    }

    const callback = () => {
        const nextMoveProps = findNextPathPartIndexAndMinDistance()

        if (!nextMoveProps) {
            positionUpdate(state.pathCopy[state.pathCopy.length - 1])
            return
        }

        const lerpAlpha = findLerpBetweenPathPoints(nextMoveProps)

        const nextPosition = findNextPosition({
            ...nextMoveProps,
            lerpAlpha,
        })

        state.distanceTraveled += nextMoveProps.currentSpeed

        positionUpdate(nextPosition)

        if (typeof internalPathSetter === 'function')
            internalPathSetter(state.pathCopy.slice(nextMoveProps.distanceIndex))
    }

    return callback
}
