import { Vector3 } from 'three'

import { TResourceTracker } from '../../../ResourceTracker/ResourceTracker.types'
import { TAnimationManager } from '../../AnimationsManager/AnimationsManager.types'
import { TCollisionsManager } from '../../CollisionsManager/CollisionsManager.types'
import { TPathfindingManager } from '../../PathfindingManager/PathfindingManager.types'
import { ICollision } from '../AttacksManager/AttacksManager.types'
import { IEnemy } from '../EnemyManager/EnemyManager.types'

export interface IPuppeteerManagerState {
    enemies: null | Map<string, IEnemy>
    closeEnemies: Array<IEnemy>
    lastPlayerPosition: Vector3 | null
    lastPlayerNode: string | null
}

export type TPuppeteerManagerTick = (collisions: Array<ICollision>) => Promise<void>

export type TCreatePuppeteerManager = (props: {
    ResourceTracker: TResourceTracker
    PathfindingManager: TPathfindingManager
    AnimationManager: TAnimationManager
    CollisionsManager: TCollisionsManager
}) => {
    init: () => void
    tick: TPuppeteerManagerTick
}
