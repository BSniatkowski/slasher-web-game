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

    const moveEnemies = () => {
        const closestToPlayerEnemy = state.closeEnemies[0]

        const closestToPlayerEnemyPosition = closestToPlayerEnemy?.positionGetter()

        if (!state.lastPlayerPosition || !closestToPlayerEnemy || !closestToPlayerEnemyPosition)
            return

        for (const enemy of state.closeEnemies) {
            const currentEnemyPosition = enemy.positionGetter()

            if (!currentEnemyPosition) continue

            const distanceFromCurrentEnemyToPlayer = currentEnemyPosition.distanceToSquared(
                state.lastPlayerPosition,
            )

            const isDistanceToPlayerGreaterThanToAnotherEnemy =
                distanceFromCurrentEnemyToPlayer >
                closestToPlayerEnemyPosition.distanceToSquared(state.lastPlayerPosition)

            const animationId = `${ENEMY_MOVE}${enemy.getId()}`

            if (isDistanceToPlayerGreaterThanToAnotherEnemy) {
                const pathFromEnemyToEnemy = PathfindingManager.findPath({
                    startPosition: currentEnemyPosition,
                    destinationPosition: closestToPlayerEnemyPosition,
                })

                const path = [...pathFromEnemyToEnemy, ...closestToPlayerEnemy.getPath()]

                AnimationManager.clearAnimation(animationId)
                AnimationManager.addAnimation({
                    id: animationId,
                    type: EAnimationTypes.dynamic,
                    callback: createMoveAlongPathAnimation({
                        path,
                        speedGetter: enemy.speedGetter,
                        positionUpdate: enemy.move,
                    }),
                    isPossibleGetter: () => true,
                    isEndedGetter: () => distanceFromCurrentEnemyToPlayer <= enemy.rangeGetter(),
                })
            }

            const pathFromEnemyToPlayer = PathfindingManager.findPath({
                startPosition: currentEnemyPosition,
                destinationPosition: state.lastPlayerPosition,
            })

            AnimationManager.clearAnimation(animationId)
            AnimationManager.addAnimation({
                id: animationId,
                type: EAnimationTypes.dynamic,
                callback: createMoveAlongPathAnimation({
                    path: pathFromEnemyToPlayer,
                    speedGetter: enemy.speedGetter,
                    positionUpdate: enemy.move,
                }),
                isPossibleGetter: () => true,
                isEndedGetter: () => false,
            })
        }
    }

    const checkAndUpdateCloseEnemies = () => {
        if (!state.lastPlayerPosition) return

        const closeEnemies = []

        for (const enemy of state.enemies) {
            const distanceToPlayer = enemy
                .positionGetter()
                ?.distanceToSquared(state.lastPlayerPosition)

            if (distanceToPlayer && distanceToPlayer <= 10)
                closeEnemies.push({ distanceToPlayer, enemy })
        }

        closeEnemies.sort((enemyA, enemyB) => enemyA.distanceToPlayer - enemyB.distanceToPlayer)

        state.closeEnemies = closeEnemies.map(({ enemy }) => enemy)

        moveEnemies()
    }

    const checkAndUpdateLastPlayerNode = (position: Vector3) => {
        const playerNode = PathfindingManager.getNodeIdByPosition(position)

        if (!playerNode || state.lastPlayerNode === playerNode) return

        checkAndUpdateCloseEnemies()

        state.lastPlayerNode = playerNode
    }

    const checkAndUpdateLastPlayerPosition = () => {
        const player = ResourceTracker.getTrackedResource(PLAYER)

        if (!player || state.lastPlayerPosition?.equals(player.position)) return

        state.lastPlayerPosition = player.position.clone()

        checkAndUpdateLastPlayerNode(player.position)
    }

    const tick = () => {
        checkAndUpdateLastPlayerPosition()
    }

    return { init, tick }
}
