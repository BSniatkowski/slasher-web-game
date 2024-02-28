import { Vector3 } from 'three'

export interface IMoveAlongPathAnimationState {
    startClone: Vector3
    destinationClone: Vector3
}

export type TFindLerpBetweenPathPoints = () => number

export type TFindNextPosition = (lerpAlpha: number) => Vector3

export type TCreateSimpleMoveAlongPathAnimation = (props: {
    start: Vector3
    destination: Vector3
    range: number
    positionUpdate: (position: Vector3) => void
}) => (props: { tick: number; ticksDuration: number }) => void
