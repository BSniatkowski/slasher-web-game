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
        pathMesh: null,
        shorterPathMesh: null,
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

    const initPathVisialization = () => {
        if (!state.player) return

        const path3D = [state.player?.position.clone()]

        const geometry = new BufferGeometry().setFromPoints(path3D)
        const material = new LineBasicMaterial({ color: 'purple' })
        const materialShorter = new LineBasicMaterial({ color: 'green' })

        const pathMesh = new Line(geometry, material)
        const shorterPathMesh = new Line(geometry.clone(), materialShorter)

        ResourceTracker.trackResource({ id: 'path', resource: pathMesh })
        ResourceTracker.trackResource({ id: 'shorterPath', resource: shorterPathMesh })

        state.pathMesh = pathMesh
        state.shorterPathMesh = shorterPathMesh

        Scene.add(pathMesh)
        Scene.add(shorterPathMesh)
    }

    const visualizePath = ({ path }: { path: Array<Vector2> }) => {
        const path3D = path.map((point) => new Vector3(point.x, point.y, 0.1))

        if (state.pathMesh) state.pathMesh.geometry.setFromPoints(path3D)
    }

    const visualizeShorterPath = ({ shorterPath }: { shorterPath: Array<Vector2> }) => {
        const path3D = shorterPath.map((point) => new Vector3(point.x, point.y, 0.1))

        if (state.shorterPathMesh) state.shorterPathMesh.geometry.setFromPoints(path3D)
    }

    const goToPosition = (state: IPlayerManagerState) => {
        state.raycaster.setFromCamera(state.pointer, Camera)

        const board = ResourceTracker.getTrackedResource('board')

        if (!board) return

        const intersects = state.raycaster.intersectObjects([board], false)

        const destination = intersects.length > 0 && intersects[0].point

        if (!destination || !state.player?.position) return

        const startPosition = new Vector2(state.player.position.x, state.player.position.y)
            .multiplyScalar(100)
            .round()
            .divideScalar(100)

        const destinationPosition = new Vector2(destination.x, destination.y)
            .multiplyScalar(100)
            .round()
            .divideScalar(100)

        const { path, shorterPath } = PathfindingManager.findPath({
            startPosition,
            destinationPosition,
        })

        if (path) visualizePath({ path })
        if (shorterPath) visualizeShorterPath({ shorterPath })
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
        initPathVisialization()
        InputsManager.init()
    }

    const dispose = () => {
        InputsManager.disposeControls()
    }

    return { init, dispose }
}
