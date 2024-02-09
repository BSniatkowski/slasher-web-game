import { Vector2, Vector3 } from 'three'

export type TCreateMoveAlongPathAnimation = ({
    path,
    speed,
    positionGetter,
    positionUpdate,
}: {
    path: Array<Vector2>
    speed: number
    positionGetter: () => Vector3 | undefined
    positionUpdate: (position: Vector3) => void
}) => () => void
