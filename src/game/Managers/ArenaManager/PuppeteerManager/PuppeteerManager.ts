import { Vector3 } from 'three'

import { ENEMY_MOVE } from '../../../consts/animations.consts'
import { PLAYER } from '../../../consts/objects.consts'
import { EAnimationTypes } from '../../AnimationsManager/AnimationsManager.types'
import { createMoveAlongPathAnimation } from '../../AnimationsManager/helpers/createMoveAlongPathAnimation/createMoveAlongPathAnimation'
import { createEnemyManager } from '../EnemyManager/EnemyManager'
import { createEnemy } from '../EnemyManager/helpers/createEnemy/createEnemy'
import { IPuppeteerManagerState, TCreatePuppeteerManager } from './PuppeteerManager.types'

export const createPuppeteerManager: TCreatePuppeteerManager = ({
    ResourceTracker,
    PathfindingManager,
    AnimationManager,
}) => {
    const state: IPuppeteerManagerState = {
        enemies: [],
        closeEnemies: [],
        lastPlayerPosition: null,
        lastPlayerNode: null,
    }

    const createEnemies = () => {
        const maxEnemies = Math.round(Math.random() * 9) + 1

        for (let enemyIndex = 0; enemyIndex < maxEnemies; enemyIndex++) {
            const enemyStats = createEnemy({ id: String(enemyIndex) })

            const enemy = createEnemyManager({
                enemyStats,
                ResourceTracker,
            })

            const initialNode = PathfindingManager.getRandomNode()

            if (initialNode) enemy.init(new Vector3(initialNode.center.x, initialNode.center.y))

            state.enemies.push(enemy)
        }
    }

    const init = () => {
        createEnemies()
    }

    const moveEnemies = async () => {
        if (!state.lastPlayerPosition) return

        const pathfindingPromises: Array<Promise<void>> = []

        for (let enemyIndex = 0; enemyIndex < state.closeEnemies.length; enemyIndex++) {
            const enemy = state.closeEnemies[enemyIndex]

            const currentEnemyPosition = enemy.positionGetter()?.clone().setZ(0)

            if (!currentEnemyPosition) continue

            const distanceFromCurrentEnemyToPlayer = currentEnemyPosition.distanceToSquared(
                state.lastPlayerPosition,
            )

            const closerToPlayerEnemy = enemyIndex !== 0 && state.closeEnemies[enemyIndex - 1]

            const closerToPlayerEnemyPosition =
                closerToPlayerEnemy && closerToPlayerEnemy?.positionGetter()?.clone()?.setZ(0)

            const isDistanceToPlayerGreaterThanToAnotherEnemy =
                closerToPlayerEnemyPosition &&
                distanceFromCurrentEnemyToPlayer >
                    closerToPlayerEnemyPosition.distanceToSquared(state.lastPlayerPosition)

            const animationId = `${ENEMY_MOVE}${enemy.getId()}`

            if (isDistanceToPlayerGreaterThanToAnotherEnemy) {
                pathfindingPromises.push(
                    PathfindingManager.findPath({
                        id: animationId,
                        startPosition: currentEnemyPosition,
                        destinationPosition: closerToPlayerEnemyPosition,
                    }).then((pathFromEnemyToEnemy) => {
                        const path = [...pathFromEnemyToEnemy, ...closerToPlayerEnemy.getPath()]

                        AnimationManager.clearAnimation(animationId)
                        AnimationManager.addAnimation({
                            id: animationId,
                            type: EAnimationTypes.dynamic,
                            callback: createMoveAlongPathAnimation({
                                path,
                                speedGetter: enemy.speedGetter,
                                positionUpdate: enemy.move,
                                internalPathSetter: enemy.setPath,
                            }),
                            isPossibleGetter: () => true,
                            isEndedGetter: () =>
                                distanceFromCurrentEnemyToPlayer <= enemy.rangeGetter(),
                        })
                    }),
                )

                continue
            }

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
                        callback: createMoveAlongPathAnimation({
                            path,
                            speedGetter: enemy.speedGetter,
                            positionUpdate: enemy.move,
                            internalPathSetter: enemy.setPath,
                        }),
                        isPossibleGetter: () => true,
                        isEndedGetter: () =>
                            distanceFromCurrentEnemyToPlayer <= enemy.rangeGetter(),
                    })
                }),
            )
        }

        await Promise.all(pathfindingPromises)
    }

    const checkAndUpdateCloseEnemies = async () => {
        if (!state.lastPlayerPosition) return

        const closeEnemies = []

        for (const enemy of state.enemies) {
            const distanceToPlayer = enemy
                .positionGetter()
                ?.distanceToSquared(state.lastPlayerPosition)

            if (distanceToPlayer && distanceToPlayer <= 50)
                closeEnemies.push({ distanceToPlayer, enemy })
        }

        closeEnemies.sort((enemyA, enemyB) => enemyA.distanceToPlayer - enemyB.distanceToPlayer)

        state.closeEnemies = closeEnemies.map(({ enemy }) => enemy)

        await moveEnemies()
    }

    const checkAndUpdateLastPlayerNode = async (position: Vector3) => {
        const playerNode = PathfindingManager.getNodeIdByPosition(position)

        if (!playerNode || state.lastPlayerNode === playerNode) return

        await checkAndUpdateCloseEnemies()

        state.lastPlayerNode = playerNode
    }

    const checkAndUpdateLastPlayerPosition = async () => {
        const player = ResourceTracker.getTrackedResource(PLAYER)

        if (!player || state.lastPlayerPosition?.equals(player.position)) return

        state.lastPlayerPosition = player.position.clone().setZ(0)

        await checkAndUpdateLastPlayerNode(player.position)
    }

    const tick = async () => {
        await checkAndUpdateLastPlayerPosition()
    }

    return { init, tick }
}
