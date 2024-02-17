import { Mesh, Vector3 } from 'three'

import { TResourceTracker } from '../../../ResourceTracker/ResourceTracker.types'
import { TAnimationManager } from '../../AnimationsManager/AnimationsManager.types'
import { TPathfindingManager } from '../../PathfindingManager/PathfindingManager.types'
import { EEnemyBehaviours, TEnemyStats } from './helpers/createEnemy/createEnemy.types'

export type TUpdateBehaviour = (behaviour: EEnemyBehaviours) => void

export type TUpdateLastPlayerKnownPosition = (position?: Vector3) => void

export type TEnemyManagerState = TEnemyStats & {
    hp: number
    enemyMesh: null | Mesh
}

export type TUpdateEnemyPosition = (position: Vector3) => void

export interface IEnemy {
    state: TEnemyManagerState
    initEnemy: () => void
    updateLastPlayerKnownPosition: TUpdateLastPlayerKnownPosition
}

export type TCreateEnemyManager = ({
    enemyStats,
    ResourceTracker,
    PathfindingManager,
    AnimationManager,
}: {
    enemyStats: TEnemyStats
    ResourceTracker: TResourceTracker
    PathfindingManager: TPathfindingManager
    AnimationManager: TAnimationManager
}) => IEnemy
