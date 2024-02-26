import { PerspectiveCamera } from 'three'

import { TResourceTracker } from '../../ResourceTracker/ResourceTracker.types'
import { TAnimationManager } from '../AnimationsManager/AnimationsManager.types'
import { TCollisionsManager } from '../CollisionsManager/CollisionsManager.types'
import { TPathfindingManager } from '../PathfindingManager/PathfindingManager.types'

export type TCreateArenaManager = ({
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
    generateBoard: () => void
    populate: () => void
    tick: () => Promise<void>
}

export type TArenaManager = ReturnType<TCreateArenaManager>
