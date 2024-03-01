import { PerspectiveCamera, Scene as ThreeScene, WebGLRenderer } from 'three'

import {
    IGeneralState,
    TAnimate,
    TCreateGame,
    TDispose,
    TOnWindowResize,
    TSetOnGeneralStateChangeCallback,
    TTogglePause,
} from './game.types'
import { createAnimationManager } from './Managers/AnimationsManager/AnimationsManager'
import { createArenaManager } from './Managers/ArenaManager/ArenaManager'
import { createCollisionsManager } from './Managers/CollisionsManager/CollisionsManager'
import { createLightingManager } from './Managers/LightingManager/LightingManager'
import { createPathfindingManager } from './Managers/PathfindingManager/PathfindingManager'
import { createResourceTracker } from './ResourceTracker/ResourceTracker'

export const createGame: TCreateGame = (ref) => {
    const Scene = new ThreeScene()
    const Camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 10)
    const Renderer = new WebGLRenderer({ antialias: true })

    Renderer.setSize(window.innerWidth, window.innerHeight)
    Renderer.setPixelRatio(window.devicePixelRatio)
    Renderer.shadowMap.enabled = true

    if (ref.current) ref.current.appendChild(Renderer.domElement)

    const ResourceTracker = createResourceTracker(Scene)

    const PathfindingManager = createPathfindingManager({ ResourceTracker })

    const AnimationManager = createAnimationManager()

    const CollisionsManager = createCollisionsManager()

    const LightingManager = createLightingManager({ ResourceTracker })

    const ArenaManager = createArenaManager({
        ref: Renderer.domElement,
        Camera,
        ResourceTracker,
        PathfindingManager,
        AnimationManager,
        CollisionsManager,
    })

    const generalState: IGeneralState = {
        isPaused: false,
        onGeneralStateChangeCallback: null,
    }

    const onGeneralStateChange = () => {
        if (typeof generalState.onGeneralStateChangeCallback !== 'function') return
        const { isPaused } = generalState

        generalState.onGeneralStateChangeCallback({ isPaused })
    }

    const setOnGeneralStateChangeCallback: TSetOnGeneralStateChangeCallback = (callback) => {
        if (typeof callback !== 'function') return

        generalState.onGeneralStateChangeCallback = callback
        onGeneralStateChange()
    }

    const populate = () => {
        const { boundries } = ArenaManager.generateBoard()

        PathfindingManager.init()
        ArenaManager.populate()
        LightingManager.init()

        LightingManager.updateBoardBoundries(boundries)
    }

    const animateLimiterState = {
        then: Date.now(),
        maxFps: 1000 / 60, // 60 fps
    }

    const animate: TAnimate = async () => {
        if (generalState.isPaused) return

        const now = Date.now()
        const elapsed = now - animateLimiterState.then

        if (elapsed > animateLimiterState.maxFps) {
            animateLimiterState.then = now - (elapsed % animateLimiterState.maxFps)

            CollisionsManager.tick()
            await ArenaManager.tick()
            AnimationManager.animate()
            LightingManager.tick()

            Renderer.render(Scene, Camera)
        }

        await new Promise(requestAnimationFrame).then(animate)
    }

    const togglePause: TTogglePause = async () => {
        if (generalState.isPaused) {
            generalState.isPaused = false

            animate()

            onGeneralStateChange()
            return
        }

        generalState.isPaused = true

        onGeneralStateChange()
    }

    const onWindowResize: TOnWindowResize = ({ width, height }) => {
        if (!generalState.isPaused) togglePause()

        Camera.aspect = width / height
        Camera.updateProjectionMatrix()
        Renderer.setSize(width, height)
        Renderer.render(Scene, Camera)
    }

    const dispose: TDispose = () => {
        togglePause()
        ResourceTracker.disposeAllResources()
        PathfindingManager.dispose()

        Renderer.domElement.remove()
        Renderer.dispose()
    }

    populate()
    animate()

    return { animate, setOnGeneralStateChangeCallback, togglePause, onWindowResize, dispose }
}
