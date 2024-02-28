import {
    CylinderGeometry,
    Line,
    Mesh,
    MeshBasicMaterial,
    PerspectiveCamera,
    Raycaster,
    Vector2,
} from 'three'

import { TResourceTracker } from '../../../ResourceTracker/ResourceTracker.types'
import { TAnimationManager } from '../../AnimationsManager/AnimationsManager.types'
import { ICollisionItem, TCollisionsManager } from '../../CollisionsManager/CollisionsManager.types'
import { TPathfindingManager } from '../../PathfindingManager/PathfindingManager.types'
import { TAttacksManager } from '../AttacksManager/AttacksManager.types'

export interface IPlayerManagerState {
    player: null | Mesh<CylinderGeometry, MeshBasicMaterial>
    pointer: Vector2
    raycaster: Raycaster
    pathMesh: null | Line
    isRightClickPressed: boolean
    isRightClickPressedDelay: number
    range: number
    enemiesInRange: Array<ICollisionItem>
}

export type TUpdatePointer = (event: PointerEvent) => void

export type TCreatePlayerManager = (props: {
    ref: HTMLCanvasElement
    Camera: PerspectiveCamera
    ResourceTracker: TResourceTracker
    PathfindingManager: TPathfindingManager
    AnimationManager: TAnimationManager
    CollisionsManager: TCollisionsManager
    AttacksManager: TAttacksManager
}) => {
    init: () => void
    tick: () => Promise<void>
    dispose: () => void
}

export type TPlayerManager = ReturnType<TCreatePlayerManager>
