import { Mesh, Vector3 } from 'three'

import { TResourceTracker } from '../../ResourceTracker/ResourceTracker.types'
import { TAnimationManager } from '../AnimationsManager/AnimationsManager.types'
import { TPathfindingManager } from '../PathfindingManager/PathfindingManager.types'
import { IEnemy } from './EnemyManager/EnemyManager.types'

export interface IArenaManagerState {
    maxEnemies: number
    enemies: Array<IEnemy>
}

export interface IEnemiesPuppeteerState {
    lastPlayerPosition: null | Vector3
    playerMesh: null | Mesh
}

export type TEnemiesPuppeteer = () => {
    init: () => void
    tick: () => void
}

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
    populateWithEnemies: () => void
    createEnemiesPuppeteer: TEnemiesPuppeteer
}

export type TArenaManager = ReturnType<TCreateArenaManager>
