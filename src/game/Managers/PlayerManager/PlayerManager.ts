const isDev = import.meta.env.DEV

import {
    BufferGeometry,
    CylinderGeometry,
    Line,
    LineBasicMaterial,
    MathUtils,
    Mesh,
    MeshBasicMaterial,
    Raycaster,
    Vector2,
    Vector3,
} from 'three'

import { EAnimationTypes } from '../AnimationsManager/AnimationsManager.types'
import { createMoveAlongPathAnimation } from '../AnimationsManager/helpers/createMoveAlongPathAnimation/createMoveAlongPathAnimation'
import { createCameraManager } from './CameraManager/CameraManager'
import { createInputsManager } from './InputsManager/InputsManager'
import { IPlayerManagerState, TCreatePlayerManager, TUpdatePointer } from './PlayerManager.types'

export const createPlayerManager: TCreatePlayerManager = ({
    ref,
    Camera,
    ResourceTracker,
    PathfindingManager,
    AnimationManager,
}) => {
    const state: IPlayerManagerState = {
        player: null,
        pointer: new Vector2(),
        raycaster: new Raycaster(),
        pathMesh: null,
    }

    const CameraManager = createCameraManager({ Camera, playerManagerState: state })

    const updatePointer: TUpdatePointer = (event) => {
        state.pointer.x = (event.clientX / window.innerWidth) * 2 - 1
        state.pointer.y = -(event.clientY / window.innerHeight) * 2 + 1
    }

    const updatePlayerPosition = (destination: Vector3) => {
        state.player?.position.copy(destination).setZ(0.25)
        state.player?.updateMatrix()
        CameraManager.lookCameraAtPlayer()
    }

    const initPlayer = () => {
        const geometry = new CylinderGeometry(0.25, 0.25, 0.5, 16)
        const material = new MeshBasicMaterial({
            color: 'green',
            depthTest: false,
            depthWrite: false,
        })

        const playerMesh = new Mesh(geometry, material)
        playerMesh.matrixAutoUpdate = false
        playerMesh.renderOrder = 3

        playerMesh.rotateX(MathUtils.degToRad(90))

        state.player = playerMesh

        ResourceTracker.trackResource({ id: 'player', resource: playerMesh })

        const node = PathfindingManager.getRandomNode()

        if (!node) return

        const initialPosition = new Vector3(node.center.x, node.center.y)

        updatePlayerPosition(initialPosition)
    }

    const initPathVisialization = () => {
        if (!isDev || !state.player) return

        const path3D = [state.player.position.clone()]

        const geometry = new BufferGeometry().setFromPoints(path3D)
        const material = new LineBasicMaterial({
            color: 'purple',
            depthTest: false,
            depthWrite: false,
        })

        const pathMesh = new Line(geometry, material)
        pathMesh.matrixAutoUpdate = false
        pathMesh.renderOrder = 2

        state.pathMesh = pathMesh

        ResourceTracker.trackResource({ id: 'path', resource: pathMesh })
    }

    const visualizePath = ({ path }: { path: Array<Vector3> }) => {
        if (!state.pathMesh) return

        state.pathMesh.geometry.setFromPoints(path)
        state.pathMesh.updateMatrix()
    }

    const goToPosition = () => {
        state.raycaster.setFromCamera(state.pointer, Camera)

        const board = ResourceTracker.getTrackedResource('board')

        if (!board) return

        const intersects = state.raycaster.intersectObjects([board], false)

        const destination = intersects.length > 0 && intersects[0].point

        if (!destination || !state.player) return

        const startPosition = state.player.position.clone()

        const destinationPosition = destination.clone()

        const { path } = PathfindingManager.findPath({
            startPosition,
            destinationPosition,
        })

        if (isDev && path) visualizePath({ path })

        AnimationManager.clearAnimation('player_move')

        if (path.length === 0) return

        const isPossibleGetter = () => true // TODO - update with introducing movement emparing logic
        const isEndedGetter = () =>
            state.player
                ? state.player.position
                      .clone()
                      .setZ(0)
                      .equals(path[path.length - 1])
                : true

        AnimationManager.addAnimation({
            id: 'player_move',
            type: EAnimationTypes.dynamic,
            callback: createMoveAlongPathAnimation({
                path,
                speedGetter: () => 0.025,
                positionUpdate: updatePlayerPosition,
            }),
            isPossibleGetter,
            isEndedGetter,
        })
    }

    const InputsManager = createInputsManager({
        ref,
        keybindings: {
            click: goToPosition,
            contextmenu: goToPosition,
            touchdown: goToPosition,
            pointermove: (event) => updatePointer(event as PointerEvent),
        },
    })

    const init = () => {
        CameraManager.init()
        initPlayer()
        initPathVisialization()
        InputsManager.init()
    }

    const dispose = () => {
        InputsManager.disposeControls()
    }

    return { init, dispose }
}
