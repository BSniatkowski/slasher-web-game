import { Mesh, Vector2 } from 'three'

import { TResourceTracker } from '../../../ResourceTracker/ResourceTracker.types'
import { TEnemyStats } from './helpers/createEnemy/createEnemy.types'

export type TEnemyManagerState = TEnemyStats & {
    hp: number
    enemyMesh: null | Mesh
}

export type TInitEnemy = (position: Vector2) => void

export type TMoveEnemy = (position: Vector2) => void

export interface IEnemy {
    init: TInitEnemy
    move: TMoveEnemy
}

export type TCreateEnemyManager = ({
    enemyStats,
    ResourceTracker,
}: {
    enemyStats: TEnemyStats
    ResourceTracker: TResourceTracker
}) => IEnemy
