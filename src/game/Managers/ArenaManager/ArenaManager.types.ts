import { TResourceTracker } from '../../ResourceTracker/ResourceTracker.types'
import { TAnimationManager } from '../AnimationsManager/AnimationsManager.types'
import { TPathfindingManager } from '../PathfindingManager/PathfindingManager.types'

export type TCreateArenaManager = ({
    ResourceTracker,
    PathfindingManager,
    AnimationManager,
}: {
    ResourceTracker: TResourceTracker
    PathfindingManager: TPathfindingManager
    AnimationManager: TAnimationManager
}) => {
    generateBoard: () => void
    populate: () => void
    tick: () => void
}

export type TArenaManager = ReturnType<TCreateArenaManager>
