import {
    CylinderGeometry,
    MathUtils,
    Mesh,
    MeshBasicMaterial,
    Raycaster,
    Vector2,
    Vector3,
} from 'three'

import { createCameraManager } from './CameraManager/CameraManager'
import { createInputsManager } from './InputsManager/InputsManager'
import { createPathfindingManager } from './PathfindingManager/PathfindingManager'
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

    const CameraManager = createCameraManager({ Camera, playerManagerState: state })

    const updatePlayerPosition = (state: IPlayerManagerState, destination: Vector3) => {
        state.player?.position.copy(destination).add(new Vector3(0, 0, 0.25))
        CameraManager.lookCameraAtPlayer()
    }

    const initPlayer = (state: IPlayerManagerState) => {
        const geometry = new CylinderGeometry(0.25, 0.25, 0.5)
        const material = new MeshBasicMaterial({ color: 'green' })

        const playerMesh = new Mesh(geometry, material)
        playerMesh.rotateX(MathUtils.degToRad(90))

        ResourceTracker.trackResource({ id: 'player', resource: playerMesh })

        state.player = playerMesh

        Scene.add(playerMesh)

        const board = ResourceTracker.getTrackedResource('board')

        if (!board) return

        const centerVector = new Vector3()

        board.geometry.computeBoundingBox()
        board.geometry.boundingBox?.getCenter(centerVector)

        updatePlayerPosition(state, centerVector)
    }

    const PathfindingManager = createPathfindingManager({ Scene, ResourceTracker })

    const updatePointer: TUpdatePointer = (state, event) => {
        state.pointer.x = (event.clientX / window.innerWidth) * 2 - 1
        state.pointer.y = -(event.clientY / window.innerHeight) * 2 + 1
    }

    const goToPosition = (state: IPlayerManagerState) => {
        state.raycaster.setFromCamera(state.pointer, Camera)

        const board = ResourceTracker.getTrackedResource('board')

        if (!board) return

        const intersects = state.raycaster.intersectObjects([board])

        console.log(intersects)

        const destination = intersects.length > 0 && intersects[0].point

        if (!destination || !state.player?.position) return

        const playerPositionAtNavMesh = state.player.position.clone().setZ(0)
    }

    const InputsManager = createInputsManager({
        ref,
        keybindings: {
            contextmenu: () => goToPosition(state),
            pointermove: (event) => updatePointer(state, event as PointerEvent),
        },
    })

    const init = () => {
        initPlayer(state)
        CameraManager.init()
        PathfindingManager.init()
        InputsManager.init()
    }

    const dispose = () => {
        InputsManager.disposeControls()
    }

    return { init, dispose }
}
