import { EEnemyBehaviours, EEnemyTypes, IEnemyStats, TCreateEnemy } from './createEnemy.types'

export const createEnemy: TCreateEnemy = ({ id }) => {
    const enemyStats: IEnemyStats = {
        id,
        movementSpeed: 0.15,
        range: 0.3,
        behaviour: EEnemyBehaviours.idle,
        lastPlayerKnownPosition: null,
    }

    const enemyType = Math.round(Math.random() * 100)

    if (enemyType < 60) return { ...enemyStats, type: EEnemyTypes.soldier }
    if (enemyType < 80) return { ...enemyStats, type: EEnemyTypes.archer }
    return { ...enemyStats, type: EEnemyTypes.tank }
}
