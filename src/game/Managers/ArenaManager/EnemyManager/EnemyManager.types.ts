import { Mesh, Vector3 } from 'three'

import { TResourceTracker } from '../../../ResourceTracker/ResourceTracker.types'
import { TEnemyStats } from './helpers/createEnemy/createEnemy.types'

export type TEnemyManagerState = TEnemyStats & {
    hp: number
    enemyMesh: null | Mesh
    path: Array<Vector3>
}

export type TInitEnemy = (position: Vector3) => void

export type TMoveEnemy = (position: Vector3) => void

export type TSetEnemyPath = (path: Array<Vector3>) => void
export interface IEnemy {
    getId: () => string
    init: TInitEnemy
    move: TMoveEnemy
    positionGetter: () => Vector3 | undefined
    speedGetter: () => number
    rangeGetter: () => number
    getPath: () => Array<Vector3>
    setPath: TSetEnemyPath
}

export type TCreateEnemyManager = ({
    enemyStats,
    ResourceTracker,
}: {
    enemyStats: TEnemyStats
    ResourceTracker: TResourceTracker
}) => IEnemy
