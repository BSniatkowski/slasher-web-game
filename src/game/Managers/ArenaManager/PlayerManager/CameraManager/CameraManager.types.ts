import { PerspectiveCamera } from 'three'

import { IPlayerManagerState } from '../PlayerManager.types'

export interface ICameraManagerState {
    Camera: PerspectiveCamera
}

export type TRegisterEvent = (state: ICameraManagerState) => void

export type TCreateCameraManager = ({
    Camera,
    playerManagerState,
}: {
    Camera: PerspectiveCamera
    playerManagerState: IPlayerManagerState
}) => {
    init: () => void
    lookCameraAtPlayer: () => void
}

export type TInputsManager = ReturnType<TCreateCameraManager>
