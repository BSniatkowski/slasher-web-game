import { MathUtils, Vector3 } from 'three'

import { ICameraManagerState, TCreateCameraManager } from './CameraManager.types'

export const createCameraManager: TCreateCameraManager = ({ Camera, playerManagerState }) => {
    const state: ICameraManagerState = {
        Camera,
    }

    const lookCameraAtPlayer = (state: ICameraManagerState) => {
        const playerPosition = playerManagerState?.player?.position

        if (!playerPosition) return

        const cameraDistanceToPlayer = 10
        const cameraAngleX = 15

        const cameraPosition = new Vector3(
            playerPosition.x +
                cameraDistanceToPlayer *
                    Math.cos(MathUtils.degToRad(cameraAngleX)) *
                    Math.sin(MathUtils.degToRad(0)),
            playerPosition.y - cameraDistanceToPlayer * Math.sin(MathUtils.degToRad(cameraAngleX)),
            playerPosition.z +
                cameraDistanceToPlayer *
                    Math.cos(MathUtils.degToRad(cameraAngleX)) *
                    Math.cos(MathUtils.degToRad(0)),
        )

        state.Camera.position.copy(cameraPosition)
        state.Camera.rotation.x = MathUtils.degToRad(cameraAngleX)
    }

    const init = () => {
        lookCameraAtPlayer(state)
    }

    return {
        init,
        lookCameraAtPlayer: () => lookCameraAtPlayer(state),
    }
}
