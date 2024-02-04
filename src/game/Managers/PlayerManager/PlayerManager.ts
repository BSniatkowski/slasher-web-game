import {
    CylinderGeometry,
    MathUtils,
    Mesh,
    MeshBasicMaterial,
    Raycaster,
    SphereGeometry,
    Vector2,
    Vector3,
} from 'three'

import { createCameraManager } from './CameraManager/CameraManager'
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

    const initPathfinding = (state: IPlayerManagerState) => {
        const board = ResourceTracker.getTrackedResource('board')

        if (!board) return

        const pointsArray = board.geometry.getAttribute('position').array

        const graphPolygons: Array<Vector2> = []

        for (let polygonIndex = 0; polygonIndex < pointsArray.length; polygonIndex += 3) {
            graphPolygons.push(
                new Vector2(pointsArray[polygonIndex], pointsArray[polygonIndex + 1]),
            )
        }

        const polygonGeometry = new SphereGeometry(0.1, 8, 0.1)
        const polygonMaterial = new MeshBasicMaterial({ color: 'blue' })

        const polygonMesh = new Mesh(polygonGeometry, polygonMaterial)
        polygonMesh.matrixAutoUpdate = false

        const uniquePolygonsForPresentation = graphPolygons.length > 0 ? [graphPolygons[0]] : []

        for (const polygon of graphPolygons) {
            if (
                !uniquePolygonsForPresentation.find(
                    ({ x, y }) => polygon.x === x && polygon.y === y,
                )
            )
                uniquePolygonsForPresentation.push(polygon)
        }

        for (
            let polygonIndex = 0;
            polygonIndex < uniquePolygonsForPresentation.length;
            polygonIndex++
        ) {
            const newPolygonMesh = polygonMesh.clone()
            newPolygonMesh.position.set(
                uniquePolygonsForPresentation[polygonIndex].x,
                uniquePolygonsForPresentation[polygonIndex].y,
                0.05,
            )
            newPolygonMesh.updateMatrix()

            ResourceTracker.trackResource({
                id: `polygon${polygonIndex}`,
                resource: newPolygonMesh,
            })
            Scene.add(newPolygonMesh)
        }

        const centroidsPoints = []

        for (
            let graphPolygonIndex = 0;
            graphPolygonIndex < graphPolygons.length;
            graphPolygonIndex += 3
        ) {
            const centroid = new Vector2()

            centroid
                .addVectors(graphPolygons[graphPolygonIndex], graphPolygons[graphPolygonIndex + 1])
                .add(graphPolygons[graphPolygonIndex + 2])
                .multiplyScalar(1 / 3)

            centroidsPoints.push(centroid)
        }

        const centroidGeometry = new SphereGeometry(0.1, 8, 0.1)
        const centroidMaterial = new MeshBasicMaterial({ color: 'red' })

        const centroidMesh = new Mesh(centroidGeometry, centroidMaterial)
        centroidMesh.matrixAutoUpdate = false

        for (let centroidIndex = 0; centroidIndex < centroidsPoints.length; centroidIndex++) {
            const newCentroidMesh = centroidMesh.clone()
            newCentroidMesh.position.set(
                centroidsPoints[centroidIndex].x,
                centroidsPoints[centroidIndex].y,
                0.05,
            )
            newCentroidMesh.updateMatrix()

            ResourceTracker.trackResource({
                id: `centroid${centroidIndex}`,
                resource: newCentroidMesh,
            })
            Scene.add(newCentroidMesh)
        }
    }

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
        initPathfinding(state)
        InputsManager.init()
    }

    const dispose = () => {
        InputsManager.disposeControls()
    }

    return { init, dispose }
}
