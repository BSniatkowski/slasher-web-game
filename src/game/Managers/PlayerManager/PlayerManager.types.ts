import {
    CylinderGeometry,
    Line,
    Mesh,
    MeshBasicMaterial,
    PerspectiveCamera,
    Raycaster,
    Scene,
    Vector2,
} from 'three'

import { TResourceTracker } from '../../ResourceTracker/ResourceTracker.types'
import { TAnimationManager } from '../AnimationsManager/AnimationsManager.types'

export interface IPlayerManagerState {
    player: null | Mesh<CylinderGeometry, MeshBasicMaterial>
    pointer: Vector2
    raycaster: Raycaster
    pathMesh: null | Line
}

export type TUpdatePointer = (event: PointerEvent) => void

export type TCreatePlayerManager = ({
    ref,
    Scene,
    Camera,
    ResourceTracker,
    AnimationManager,
}: {
    ref: HTMLCanvasElement
    Scene: Scene
    Camera: PerspectiveCamera
    ResourceTracker: TResourceTracker
    AnimationManager: TAnimationManager
}) => {
    init: () => void
    dispose: () => void
}

export type TPlayerManager = ReturnType<TCreatePlayerManager>
