import {
    BoxGeometry,
    Mesh,
    MeshBasicMaterial,
    PerspectiveCamera,
    Scene as ThreeScene,
    WebGLRenderer,
} from 'three'

import { TAnimate, TDispose, TInitializeGame, TPause } from './Game.types'
import { createResourceTracker } from './ResourceTracker/ResourceTracker'

export const initializeGame: TInitializeGame = (ref) => {
    const Scene = new ThreeScene()
    const Camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    const Renderer = new WebGLRenderer()

    Renderer.setSize(window.innerWidth - 18, window.innerHeight)

    if (ref.current) ref.current.appendChild(Renderer.domElement)

    const generalState = {
        isPaused: false,
        ResourceTracker: createResourceTracker(Scene),
    }

    const populate = () => {
        const geometry = new BoxGeometry(1, 1, 1)
        const material = new MeshBasicMaterial({ color: 0x00ff00 })
        const cube = new Mesh(geometry, material)

        generalState.ResourceTracker.trackResource({ id: 'cube', resource: cube })
        Scene.add(cube)

        Camera.position.z = 5
    }

    const animate: TAnimate = () => {
        if (generalState.isPaused) return

        requestAnimationFrame(animate)
        Renderer.render(Scene, Camera)
    }

    const pause: TPause = () => {
        generalState.isPaused = true
    }

    const dispose: TDispose = () => {
        pause()
        generalState.ResourceTracker.disposeAllResources()

        Renderer.domElement.remove()
        Renderer.dispose()
    }

    populate()
    animate()

    return { animate, pause, dispose }
}
