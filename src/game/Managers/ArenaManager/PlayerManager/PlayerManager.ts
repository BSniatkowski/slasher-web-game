const isDev = import.meta.env.DEV
const showDebugHelpers = import.meta.env.SHOW_DEBUG_HELPERS as boolean

import {
    BufferGeometry,
    CylinderGeometry,
    Line,
    LineBasicMaterial,
    MathUtils,
    Mesh,
    MeshLambertMaterial,
    Raycaster,
    Vector2,
    Vector3,
} from 'three'

import { EAnimationTargets } from '../../../enums/animations.enums'
import { EGameObjects } from '../../../enums/objects.enums'
import { EAnimationTypes } from '../../AnimationsManager/AnimationsManager.types'
import { createDynamicMoveAlongPathAnimation } from '../../AnimationsManager/helpers/createDynamicMoveAlongPathAnimation/createDynamicMoveAlongPathAnimation'
import { EAttackTypes } from '../AttacksManager/AttacksManager.types'
import { createCameraManager } from './CameraManager/CameraManager'
import { createInputsManager } from './InputsManager/InputsManager'
import { IPlayerManagerState, TCreatePlayerManager, TUpdatePointer } from './PlayerManager.types'

export const createPlayerManager: TCreatePlayerManager = ({
    ref,
    Camera,
    ResourceTracker,
    PathfindingManager,
    AnimationManager,
    CollisionsManager,
    AttacksManager,
}) => {
    const state: IPlayerManagerState = {
        player: null,
        pointer: new Vector2(),
        raycaster: new Raycaster(),
        pathMesh: null,
        isRightClickPressed: false,
        isRightClickPressedDelay: 0,
        range: 5,
        enemiesInRange: [],
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
        const material = new MeshLambertMaterial({
            color: 'green',
        })

        const playerMesh = new Mesh(geometry, material)
        playerMesh.castShadow = true
        playerMesh.matrixAutoUpdate = false

        playerMesh.rotateX(MathUtils.degToRad(90))

        state.player = playerMesh

        ResourceTracker.trackResource({ id: EGameObjects.PLAYER, resource: playerMesh })

        const node = PathfindingManager.getRandomNode()

        if (!node) return

        const initialPosition = new Vector3(node.center.x, node.center.y)

        updatePlayerPosition(initialPosition)

        CollisionsManager.addCollisionsItem({
            id: EGameObjects.PLAYER,
            positionGetter: () => state.player?.position,
        })

        AttacksManager.addAttack({
            owner: state.player,
            target: EGameObjects.ENEMY,
            type: EAttackTypes.projectile,
        })
    }

    const initPathVisialization = () => {
        if (!isDev || !showDebugHelpers || !state.player) return

        const path3D = [state.player.position.clone()]

        const geometry = new BufferGeometry().setFromPoints(path3D)
        const material = new LineBasicMaterial({
            color: 'purple',
            depthTest: false,
        })

        const pathMesh = new Line(geometry, material)
        pathMesh.matrixAutoUpdate = false
        pathMesh.renderOrder = 1

        state.pathMesh = pathMesh

        ResourceTracker.trackResource({
            id: EGameObjects.PLAYER_PATH_VISUALIZATION,
            resource: pathMesh,
        })
    }

    const visualizePath = ({ path }: { path: Array<Vector3> }) => {
        if (!state.pathMesh) return

        state.pathMesh.geometry.setFromPoints(path)
        state.pathMesh.updateMatrix()
    }

    const goToPosition = async () => {
        state.raycaster.setFromCamera(state.pointer, Camera)

        const board = ResourceTracker.getTrackedResource(EGameObjects.BOARD)

        if (!board) return

        const intersects = state.raycaster.intersectObjects([board], false)

        const destination = intersects.length > 0 && intersects[0].point

        if (!destination || !state.player) return

        const startPosition = state.player.position.clone()

        const destinationPosition = destination.clone()

        const path = await PathfindingManager.findPath({
            id: EAnimationTargets.PLAYER_MOVE,
            startPosition,
            destinationPosition,
        })

        if (isDev && showDebugHelpers && path) visualizePath({ path })

        AnimationManager.clearAnimation(EAnimationTargets.PLAYER_MOVE)

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
            id: EAnimationTargets.PLAYER_MOVE,
            type: EAnimationTypes.dynamic,
            callback: createDynamicMoveAlongPathAnimation({
                path,
                speedGetter: () => 0.025,
                positionUpdate: updatePlayerPosition,
            }),
            isPossibleGetter,
            isEndedGetter,
        })
    }

    const setIsRightClickPressed = (pressed: boolean) => {
        state.isRightClickPressed = pressed
    }

    const InputsManager = createInputsManager({
        ref,
        keybindings: {
            contextmenu: (event) => event.preventDefault(),
            mousedown: () => setIsRightClickPressed(true),
            mouseup: () => setIsRightClickPressed(false),
            touchdown: () => setIsRightClickPressed(true),
            touchup: () => setIsRightClickPressed(true),
            pointermove: (event) => updatePointer(event as PointerEvent),
        },
    })

    const init = () => {
        CameraManager.init()
        initPlayer()
        initPathVisialization()
        InputsManager.init()
    }

    const updateEnemiesInRange = () => {
        if (!state.player?.position) return

        const range = {
            x: state.player?.position.x,
            y: state.player?.position.y,
            r: state.range,
        }

        state.enemiesInRange = CollisionsManager.findItemsInRange(range)
    }

    const tick = async () => {
        updateEnemiesInRange()

        if (state.isRightClickPressed) {
            state.isRightClickPressedDelay++

            if (state.isRightClickPressedDelay > 5) await goToPosition()

            return
        }

        state.isRightClickPressedDelay = 0
    }

    const dispose = () => {
        InputsManager.disposeControls()
    }

    return { init, tick, dispose }
}
