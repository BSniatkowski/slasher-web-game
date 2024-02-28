import { PerspectiveCamera, Scene as ThreeScene, WebGLRenderer } from 'three'

import { TAnimate, TDispose, TInitializeGame, TPause } from './game.types'
import { createAnimationManager } from './Managers/AnimationsManager/AnimationsManager'
import { createArenaManager } from './Managers/ArenaManager/ArenaManager'
import { createCollisionsManager } from './Managers/CollisionsManager/CollisionsManager'
import { createLightingManager } from './Managers/LightingManager/LightingManager'
import { createPathfindingManager } from './Managers/PathfindingManager/PathfindingManager'
import { createResourceTracker } from './ResourceTracker/ResourceTracker'

export const initializeGame: TInitializeGame = (ref) => {
    const Scene = new ThreeScene()
    const Camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    const Renderer = new WebGLRenderer({ antialias: true })

    Renderer.setSize(window.innerWidth - 18, window.innerHeight)
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

    const generalState = {
        isPaused: false,
    }

    const populate = () => {
        const { boundries } = ArenaManager.generateBoard()

        PathfindingManager.init()
        ArenaManager.populate()
        LightingManager.init()

        LightingManager.updateBoardBoundries(boundries)
    }

    const animate: TAnimate = async () => {
        if (generalState.isPaused) return

        CollisionsManager.tick()
        await ArenaManager.tick()
        AnimationManager.animate()
        LightingManager.tick()

        Renderer.render(Scene, Camera)

        await new Promise(requestAnimationFrame).then(animate)
    }

    const pause: TPause = () => {
        generalState.isPaused = true
    }

    const dispose: TDispose = () => {
        pause()
        ResourceTracker.disposeAllResources()
        PathfindingManager.dispose()

        Renderer.domElement.remove()
        Renderer.dispose()
    }

    populate()
    animate()

    return { animate, pause, dispose }
}
