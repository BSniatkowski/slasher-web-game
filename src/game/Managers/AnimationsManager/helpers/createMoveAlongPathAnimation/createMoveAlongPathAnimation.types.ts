import { Vector3 } from 'three'

export interface IMoveAlongPathAnimationState {
    pathCopy: Array<Vector3>
    distanceTraveled: number
    pathDistances: Array<number>
}

export type TFindLerpBetweenPathPoints = ({
    distanceIndex,
    minDistanceForPathPart,
    currentSpeed,
}: {
    distanceIndex: number
    minDistanceForPathPart: number
    currentSpeed: number
}) => number

export type TFindNextPosition = ({
    distanceIndex,
    lerpAlpha,
}: {
    distanceIndex: number
    lerpAlpha: number
}) => Vector3

export type TCreateMoveAlongPathAnimation = ({
    path,
    speedGetter,
    positionUpdate,
}: {
    path: Array<Vector3>
    speedGetter: () => number
    positionUpdate: (position: Vector3) => void
}) => () => void
