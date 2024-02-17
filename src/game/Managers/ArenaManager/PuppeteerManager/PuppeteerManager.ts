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

            if (initialNode) enemy.init(initialNode.center)

            state.enemies.push(enemy)
        }
    }

    const init = () => {
        createEnemies()
    }

    const tick = () => {}

    return { init, tick }
}
