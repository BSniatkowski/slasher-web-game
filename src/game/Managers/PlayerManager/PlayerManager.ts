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
import { createPathfindingManager } from './PathfindingManager/PathfindingManager'
import { IPlayerManagerState, TCreatePlayerManager, TUpdatePointer } from './PlayerManager.types'

export const createPlayerManager: TCreatePlayerManager = ({
    ref,
    Scene,
    Camera,
    ResourceTracker,
    AnimationManager,
}) => {
    const state: IPlayerManagerState = {
        player: null,
        pointer: new Vector2(),
        raycaster: new Raycaster(),
        pathMesh: null,
    }

    const CameraManager = createCameraManager({ Camera, playerManagerState: state })
    const PathfindingManager = createPathfindingManager({ Scene, ResourceTracker })

    const updatePointer: TUpdatePointer = (event) => {
        state.pointer.x = (event.clientX / window.innerWidth) * 2 - 1
        state.pointer.y = -(event.clientY / window.innerHeight) * 2 + 1
    }

    const updatePlayerPosition = (destination: Vector3) => {
        state.player?.position.copy(destination).setZ(0.25)
        CameraManager.lookCameraAtPlayer()
    }

    const initPlayer = () => {
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

        updatePlayerPosition(centerVector)
    }

    const initPathVisialization = () => {
        if (!isDev || !state.player) return

        const path3D = [state.player?.position.clone()]

        const geometry = new BufferGeometry().setFromPoints(path3D)
        const material = new LineBasicMaterial({ color: 'purple', depthTest: false })

        const pathMesh = new Line(geometry, material)

        ResourceTracker.trackResource({ id: 'path', resource: pathMesh })

        state.pathMesh = pathMesh

        Scene.add(pathMesh)
    }

    const visualizePath = ({ path }: { path: Array<Vector2> }) => {
        const path3D = path.map((point) => new Vector3(point.x, point.y))

        if (state.pathMesh) state.pathMesh.geometry.setFromPoints(path3D)
    }

    const goToPosition = () => {
        state.raycaster.setFromCamera(state.pointer, Camera)

        const board = ResourceTracker.getTrackedResource('board')

        if (!board) return

        const intersects = state.raycaster.intersectObjects([board], false)

        const destination = intersects.length > 0 && intersects[0].point

        if (!destination || !state.player || !state.player.position) return

        const startPosition = new Vector2(state.player.position.x, state.player.position.y)
            .multiplyScalar(100)
            .round()
            .divideScalar(100)

        const destinationPosition = new Vector2(destination.x, destination.y)
            .multiplyScalar(100)
            .round()
            .divideScalar(100)

        const { path } = PathfindingManager.findPath({
            startPosition,
            destinationPosition,
        })

        if (isDev && path) visualizePath({ path })

        AnimationManager.clearAnimation('player_move')

        if (path.length === 0) return

        AnimationManager.addAnimation({
            id: 'player_move',
            type: EAnimationTypes.dynamic,
            callback: createMoveAlongPathAnimation({
                path,
                speed: 0.01,
                positionGetter: () => state?.player?.position,
                positionUpdate: updatePlayerPosition,
            }),
            isPossibleGetter: () => true, // TODO - update with introducing movement emparing logic
            isEndedGetter: () =>
                state.player.position.distanceToSquared(
                    new Vector3(path[path.length - 1].x, path[path.length - 1].y),
                ) < 0.1,
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
        initPlayer()
        CameraManager.init()
        PathfindingManager.init()
        initPathVisialization()
        InputsManager.init()
    }

    const dispose = () => {
        InputsManager.disposeControls()
    }

    return { init, dispose }
}
