import { Vector3 } from 'three'

export interface IMoveAlongPathAnimationState {
    startClone: Vector3
    destinationClone: Vector3
}

export type TFindLerpBetweenPathPoints = () => number

export type TFindNextPosition = (lerpAlpha: number) => Vector3

export type TCreateSimpleMoveAlongPathAnimation = ({
    start,
    destination,
    range,
    positionUpdate,
}: {
    start: Vector3
    destination: Vector3
    range: number
    positionUpdate: (position: Vector3) => void
}) => ({ tick, ticksDuration }: { tick: number; ticksDuration: number }) => void
