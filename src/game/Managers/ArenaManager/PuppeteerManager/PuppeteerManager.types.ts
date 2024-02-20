import { Vector3 } from 'three'

import { TResourceTracker } from '../../../ResourceTracker/ResourceTracker.types'
import { TAnimationManager } from '../../AnimationsManager/AnimationsManager.types'
import { TPathfindingManager } from '../../PathfindingManager/PathfindingManager.types'
import { IEnemy } from '../EnemyManager/EnemyManager.types'

export interface IPuppeteerManagerState {
    enemies: Array<IEnemy>
    closeEnemies: Array<IEnemy>
    lastPlayerPosition: Vector3 | null
    lastPlayerNode: string | null
}

export type TCreatePuppeteerManager = ({
    ResourceTracker,
    PathfindingManager,
    AnimationManager,
}: {
    ResourceTracker: TResourceTracker
    PathfindingManager: TPathfindingManager
    AnimationManager: TAnimationManager
}) => {
    init: () => void
    tick: () => Promise<void>
}
