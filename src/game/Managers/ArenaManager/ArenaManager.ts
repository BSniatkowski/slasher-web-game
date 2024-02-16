import { Mesh } from 'three'

import {
    IArenaManagerState,
    IEnemiesPuppeteerState,
    TCreateArenaManager,
} from './ArenaManager.types'
import { createBoardManager } from './BoardManager/BoardManager'
import { createEnemyManager } from './EnemiesManager/EnemyManager/EnemyManager'
import { createEnemy } from './EnemiesManager/EnemyManager/helpers/createEnemy/createEnemy'

export const createArenaManager: TCreateArenaManager = ({
    ResourceTracker,
    PathfindingManager,
    AnimationManager,
}) => {
    const state: IArenaManagerState = {
        maxEnemies: 5,
        enemies: [],
    }

    const BoardManager = createBoardManager({ ResourceTracker })

    const generateBoard = () => {
        BoardManager.generateBoard()
    }

    const populateWithEnemies = () => {
        for (let enemyIndex = 0; enemyIndex < state.maxEnemies; enemyIndex++) {
            const enemyStats = createEnemy({ id: String(enemyIndex) })

            const enemy = createEnemyManager({
                enemyStats,
                ResourceTracker,
                PathfindingManager,
                AnimationManager,
            })

            enemy.initEnemy()

            state.enemies.push(enemy)
        }
    }

    // TODO - more complex enemiesPuppeteer with whole AI, traps and rewards arrange logic
    const createEnemiesPuppeteer = () => {
        const enemiesPuppeteerState: IEnemiesPuppeteerState = {
            lastPlayerPosition: null,
            playerMesh: null,
        }

        const init = () => {
            const playerMesh = ResourceTracker.getTrackedResource('player') as Mesh

            if (playerMesh) enemiesPuppeteerState.playerMesh = playerMesh
        }

        const tick = () => {
            if (
                !enemiesPuppeteerState.playerMesh ||
                (enemiesPuppeteerState.lastPlayerPosition &&
                    enemiesPuppeteerState.lastPlayerPosition.equals(
                        enemiesPuppeteerState.playerMesh.position,
                    ))
            )
                return

            const closeEnemies = []
            const distantEnemies = []

            enemiesPuppeteerState.lastPlayerPosition =
                enemiesPuppeteerState.playerMesh.position.clone()

            for (const enemy of state.enemies) {
                if (!enemy.state.enemyMesh) continue

                if (
                    enemy.state.lastPlayerKnownPosition &&
                    enemy.state.lastPlayerKnownPosition.distanceTo(
                        enemiesPuppeteerState.lastPlayerPosition,
                    ) <= enemy.state.range
                )
                    continue

                const distance = enemiesPuppeteerState.playerMesh.position.distanceTo(
                    enemy.state.enemyMesh?.position,
                )

                if (distance <= enemy.state.range * 5) {
                    closeEnemies.push(enemy)
                    continue
                }

                if (distance >= enemy.state.range * 10) distantEnemies.push(enemy)
            }

            for (const enemy of closeEnemies) {
                enemy.updateLastPlayerKnownPosition(enemiesPuppeteerState.lastPlayerPosition)
            }

            for (const enemy of distantEnemies) {
                enemy.updateLastPlayerKnownPosition()
            }
        }

        return { init, tick }
    }

    return { generateBoard, populateWithEnemies, createEnemiesPuppeteer }
}
