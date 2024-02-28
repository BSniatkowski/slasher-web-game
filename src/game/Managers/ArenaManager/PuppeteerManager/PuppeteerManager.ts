import { Vector3 } from 'three'

import { EAnimationTargets } from '../../../enums/animations.enums'
import { EGameObjects } from '../../../enums/objects.enums'
import { EAnimationTypes } from '../../AnimationsManager/AnimationsManager.types'
import { createDynamicMoveAlongPathAnimation } from '../../AnimationsManager/helpers/createDynamicMoveAlongPathAnimation/createDynamicMoveAlongPathAnimation'
import { ICollision } from '../AttacksManager/AttacksManager.types'
import { createEnemyManager } from '../EnemyManager/EnemyManager'
import { IEnemy } from '../EnemyManager/EnemyManager.types'
import { createEnemy } from '../EnemyManager/helpers/createEnemy/createEnemy'
import {
    IPuppeteerManagerState,
    TCreatePuppeteerManager,
    TPuppeteerManagerTick,
} from './PuppeteerManager.types'

const closeEnemiesDistance = 5

export const createPuppeteerManager: TCreatePuppeteerManager = ({
    ResourceTracker,
    PathfindingManager,
    AnimationManager,
    CollisionsManager,
}) => {
    const state: IPuppeteerManagerState = {
        enemies: null,
        closeEnemies: [],
        lastPlayerPosition: null,
        lastPlayerNode: null,
    }

    const createEnemies = () => {
        const maxEnemies = Math.round(Math.random() * 49) + 1

        for (let enemyIndex = 0; enemyIndex < maxEnemies; enemyIndex++) {
            const id = `${EGameObjects.ENEMY}_${crypto.randomUUID()}`

            const enemyStats = createEnemy({ id })

            const enemy = createEnemyManager({
                enemyStats,
                ResourceTracker,
            })

            const initialNode = PathfindingManager.getRandomNode()

            if (initialNode) enemy.init(new Vector3(initialNode.center.x, initialNode.center.y))

            if (state.enemies) state.enemies.set(id, enemy)

            CollisionsManager.addCollisionsItem({
                id,
                positionGetter: enemy.positionGetter,
            })
        }
    }

    const init = () => {
        state.enemies = new Map()

        createEnemies()
    }

    const removeEnemy = (id: string) => {
        if (!state.enemies) return

        CollisionsManager.removeCollisionsItem(id)
        AnimationManager.clearAnimation(`${EAnimationTargets.ENEMY_MOVE}_${id}`)
        ResourceTracker.disposeTrackedResource(id)
        state.enemies.delete(id)
    }

    const removeEnemies = (collisions: Array<ICollision>) => {
        for (const collision of collisions) {
            removeEnemy(collision.secondItemId)
        }
    }

    const moveEnemies = async () => {
        if (!state.lastPlayerPosition) return

        const pathfindingPromises: Array<Promise<void>> = []

        for (let enemyIndex = 0; enemyIndex < state.closeEnemies.length; enemyIndex++) {
            const enemy = state.closeEnemies[enemyIndex]

            const currentEnemyPosition = enemy.positionGetter()?.clone().setZ(0)

            if (!currentEnemyPosition) continue

            const animationId = `${EAnimationTargets.ENEMY_MOVE}_${enemy.getId()}`

            const isPossibleGetter = () => true

            pathfindingPromises.push(
                PathfindingManager.findPath({
                    id: animationId,
                    startPosition: currentEnemyPosition,
                    destinationPosition: state.lastPlayerPosition,
                }).then((path) => {
                    AnimationManager.clearAnimation(animationId)
                    AnimationManager.addAnimation({
                        id: animationId,
                        type: EAnimationTypes.dynamic,
                        callback: createDynamicMoveAlongPathAnimation({
                            path,
                            speedGetter: enemy.speedGetter,
                            positionUpdate: enemy.move,
                            internalPathSetter: enemy.setPath,
                        }),
                        isPossibleGetter,
                        isEndedGetter: () => enemy.getPath()?.length === 0,
                    })
                }),
            )
        }

        await Promise.all(pathfindingPromises)
    }

    const checkAndUpdateCloseEnemies = async () => {
        if (!state.lastPlayerPosition || !state.enemies) return

        const range = {
            x: state.lastPlayerPosition.x,
            y: state.lastPlayerPosition.y,
            r: closeEnemiesDistance,
        }

        const enemiesInRange = CollisionsManager.findItemsInRange(range)

        const closeEnemies: Array<{ distanceToPlayer: number; enemy: IEnemy }> = []

        for (const enemyInRange of enemiesInRange) {
            const enemy = state.enemies.get(enemyInRange.id)

            const enemyPosition = enemy && enemy.positionGetter()

            if (enemy && enemyPosition) {
                const distanceToPlayer = enemyPosition.distanceTo(state.lastPlayerPosition)

                if (distanceToPlayer <= closeEnemiesDistance)
                    closeEnemies.push({
                        distanceToPlayer,
                        enemy,
                    })
            }
        }

        state.closeEnemies = closeEnemies
            .sort((enemyA, enemyB) => enemyA.distanceToPlayer - enemyB.distanceToPlayer)
            .map(({ enemy }) => enemy)

        await moveEnemies()
    }

    const checkAndUpdateLastPlayerNode = async (position: Vector3) => {
        const playerNode = PathfindingManager.getNodeIdByPosition(position)

        if (!playerNode || state.lastPlayerNode === playerNode) return

        await checkAndUpdateCloseEnemies()

        state.lastPlayerNode = playerNode
    }

    const checkAndUpdateLastPlayerPosition = async () => {
        const player = ResourceTracker.getTrackedResource(EGameObjects.PLAYER)

        if (!player || state.lastPlayerPosition?.equals(player.position)) {
            return
        }

        state.lastPlayerPosition = player.position.clone().setZ(0)

        await checkAndUpdateLastPlayerNode(player.position)
    }

    const tick: TPuppeteerManagerTick = async (collisions) => {
        removeEnemies(collisions)
        await checkAndUpdateLastPlayerPosition()
    }

    return { init, tick }
}
