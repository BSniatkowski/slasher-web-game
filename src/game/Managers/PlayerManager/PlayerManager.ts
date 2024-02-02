import {
    CylinderGeometry,
    MathUtils,
    Mesh,
    MeshBasicMaterial,
    Raycaster,
    Vector2,
    Vector3,
} from 'three'

import { createInputsManager } from './InputsManager/InputsManager'
import { IPlayerManagerState, TCreatePlayerManager, TUpdatePointer } from './PlayerManager.types'

export const createPlayerManager: TCreatePlayerManager = ({
    ref,
    Scene,
    Camera,
    ResourceTracker,
}) => {
    const state: IPlayerManagerState = {
        player: null,
        pointer: new Vector2(),
        raycaster: new Raycaster(),
    }

    const lookCameraAtPlayer = (state: IPlayerManagerState) => {
        const playerPosition = state.player?.position

        if (!playerPosition) return

        Camera.position.copy(playerPosition).setZ(playerPosition.z + 20)

        console.log(playerPosition, Camera.position)
    }

    const updatePlayerPosition = (state: IPlayerManagerState, destination) => {
        state.player?.position.set(destination.x, destination.y, 10)
        lookCameraAtPlayer(state)
    }

    const initPlayer = (state: IPlayerManagerState) => {
        const geometry = new CylinderGeometry()
        const material = new MeshBasicMaterial({ color: 'green' })

        const playerMesh = new Mesh(geometry, material)

        ResourceTracker.trackResource({ id: 'player', resource: playerMesh })

        state.player = playerMesh

        Scene.add(playerMesh)

        const board = ResourceTracker.getTrackedResource('board')

        if (!board) return

        const centerVector = new Vector3()

        board.geometry.computeBoundingBox()
        board.geometry.boundingBox?.getCenter(centerVector)

        updatePlayerPosition(state, { ...centerVector, z: 10 })
    }

    const updatePointer: TUpdatePointer = (state, event) => {
        state.pointer.x = (event.clientX / window.innerWidth) * 2 - 1
        state.pointer.y = -(event.clientY / window.innerHeight) * 2 + 1
    }

    const goToPosition = (state: IPlayerManagerState) => {
        state.raycaster.setFromCamera(state.pointer, Camera)

        const board = ResourceTracker.getTrackedResource('board')

        console.log(board)

        if (!board) return

        const intersects = state.raycaster.intersectObjects([board])

        const destination = intersects.length > 0 && intersects[0].point

        if (!destination) return

        updatePlayerPosition(state, destination)
    }

    const InputsManager = createInputsManager({
        ref,
        keybindings: {
            contextmenu: () => goToPosition(state),
            pointermove: (event) => updatePointer(state, event),
        },
    })

    const init = () => {
        initPlayer(state)
        InputsManager.init()
    }

    const dispose = () => {
        InputsManager.disposeControls()
    }

    return { init, dispose }
}
