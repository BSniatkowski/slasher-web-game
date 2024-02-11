import { Vector3 } from 'three'

export type TCreateMoveAlongPathAnimation = ({
    path,
    speed,
    positionGetter,
    positionUpdate,
}: {
    path: Array<Vector3>
    speed: number
    positionGetter: () => Vector3 | undefined
    positionUpdate: (position: Vector3) => void
}) => () => void
