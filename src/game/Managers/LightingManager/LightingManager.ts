const isDev = import.meta.env.DEV
const showDebugHelpers = import.meta.env.SHOW_DEBUG_HELPERS as boolean

import { CameraHelper, DirectionalLight, HemisphereLight, Vector3 } from 'three'

import { EGameObjects } from '../../enums/objects.enums'
import {
    ILightingManagerState,
    TCreateLightingManager,
    TUpdateBoardBoundries,
} from './LightingManager.types'

const lightColor = '#ffffff'
const lightIntensity = 3

export const createLightingManager: TCreateLightingManager = ({ ResourceTracker }) => {
    const state: ILightingManagerState = {
        boardBoundries: null,
        directionalLight: null,
        hemisphereLight: null,
    }

    const init = () => {
        const directionalLight = new DirectionalLight(lightColor, lightIntensity)
        directionalLight.castShadow = true
        directionalLight.shadow.mapSize.set(1024, 1024)
        directionalLight.shadow.camera.near = 0.1
        directionalLight.shadow.camera.far = 50
        directionalLight.shadow.radius = 5

        state.directionalLight = directionalLight

        ResourceTracker.trackResource({
            id: EGameObjects.DIRECTIONAL_LIGHT,
            resource: directionalLight,
        })

        const hemisphereLight = new HemisphereLight(lightColor, lightColor, lightIntensity / 4)

        ResourceTracker.trackResource({
            id: EGameObjects.HEMISPHERE_LIGHT,
            resource: hemisphereLight,
        })

        state.hemisphereLight = hemisphereLight

        if (!isDev || !showDebugHelpers) return
        const cameraHelper = new CameraHelper(directionalLight.shadow.camera)

        ResourceTracker.trackResource({
            id: EGameObjects.DIRECTIONAL_LIGHT_HELPER,
            resource: cameraHelper,
        })
    }

    const updateBoardBoundries: TUpdateBoardBoundries = (boardBoundries) => {
        state.boardBoundries = boardBoundries
    }

    const tick = () => {
        const playerMesh = ResourceTracker.getTrackedResource(EGameObjects.PLAYER)

        if (!(playerMesh && state.boardBoundries && state.directionalLight)) return

        const { w, h } = state.boardBoundries

        state.directionalLight.position.copy(playerMesh.position).add(new Vector3(w / 4, h / 4, 20))
        state.directionalLight.target = playerMesh

        state.directionalLight.shadow.camera.position
            .copy(playerMesh.position)
            .add(new Vector3(w / 4, h / 4, 20))
    }

    const dispose = () => {
        ResourceTracker.disposeTrackedResource(EGameObjects.DIRECTIONAL_LIGHT)
        ResourceTracker.disposeTrackedResource(EGameObjects.HEMISPHERE_LIGHT)

        if (!isDev) return
        ResourceTracker.disposeTrackedResource(EGameObjects.DIRECTIONAL_LIGHT_HELPER)
    }

    return { init, updateBoardBoundries, tick, dispose }
}
