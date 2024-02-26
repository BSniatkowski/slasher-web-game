import {
    CylinderGeometry,
    Line,
    Mesh,
    MeshBasicMaterial,
    PerspectiveCamera,
    Raycaster,
    Vector2,
} from 'three'

import { TResourceTracker } from '../../ResourceTracker/ResourceTracker.types'
import { TAnimationManager } from '../AnimationsManager/AnimationsManager.types'
import { TCollisionsManager } from '../CollisionsManager/CollisionsManager.types'
import { TPathfindingManager } from '../PathfindingManager/PathfindingManager.types'

export interface IPlayerManagerState {
    player: null | Mesh<CylinderGeometry, MeshBasicMaterial>
    pointer: Vector2
    raycaster: Raycaster
    pathMesh: null | Line
    isRightClickPressed: boolean
    isRightClickPressedDelay: number
}

export type TUpdatePointer = (event: PointerEvent) => void

export type TCreatePlayerManager = ({
    ref,
    Camera,
    ResourceTracker,
    PathfindingManager,
    AnimationManager,
    CollisionsManager,
}: {
    ref: HTMLCanvasElement
    Camera: PerspectiveCamera
    ResourceTracker: TResourceTracker
    PathfindingManager: TPathfindingManager
    AnimationManager: TAnimationManager
    CollisionsManager: TCollisionsManager
}) => {
    init: () => void
    tick: () => void
    dispose: () => void
}

export type TPlayerManager = ReturnType<TCreatePlayerManager>
