import { PerspectiveCamera, Scene as ThreeScene, WebGLRenderer } from 'three'

import { TAnimate, TDispose, TInitializeGame, TPause } from './game.types'
import { createAnimationManager } from './Managers/AnimationsManager/AnimationsManager'
import { createArenaManager } from './Managers/ArenaManager/ArenaManager'
import { createPathfindingManager } from './Managers/PathfindingManager/PathfindingManager'
import { createPlayerManager } from './Managers/PlayerManager/PlayerManager'
import { createResourceTracker } from './ResourceTracker/ResourceTracker'

export const initializeGame: TInitializeGame = (ref) => {
    const Scene = new ThreeScene()
    const Camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    const Renderer = new WebGLRenderer({ antialias: true })

    Renderer.setSize(window.innerWidth - 18, window.innerHeight)
    Renderer.setPixelRatio(window.devicePixelRatio)

    if (ref.current) ref.current.appendChild(Renderer.domElement)

    const ResourceTracker = createResourceTracker(Scene)

    const PathfindingManager = createPathfindingManager({ Scene, ResourceTracker })

    const AnimationManager = createAnimationManager()

    const PlayerManager = createPlayerManager({
        ref: Renderer.domElement,
        Camera,
        ResourceTracker,
        PathfindingManager,
        AnimationManager,
    })

    const ArenaManager = createArenaManager({
        ResourceTracker,
        PathfindingManager,
        AnimationManager,
    })

    const generalState = {
        isPaused: false,
        enemiesPuppeteer: ArenaManager.createEnemiesPuppeteer(),
    }

    const populate = () => {
        ArenaManager.generateBoard()
        PathfindingManager.init()
        ArenaManager.populateWithEnemies()
        PlayerManager.init()
        generalState.enemiesPuppeteer.init()
    }

    const animate: TAnimate = () => {
        if (generalState.isPaused) return

        generalState.enemiesPuppeteer.tick()
        AnimationManager.animate()
        Renderer.render(Scene, Camera)

        requestAnimationFrame(animate)
    }

    const pause: TPause = () => {
        generalState.isPaused = true
    }

    const dispose: TDispose = () => {
        pause()
        PlayerManager.dispose()
        ResourceTracker.disposeAllResources()

        Renderer.domElement.remove()
        Renderer.dispose()
    }

    populate()
    animate()

    return { animate, pause, dispose }
}
