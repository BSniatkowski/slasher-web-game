import { EEnemyBehaviours, EEnemyTypes, TCreateEnemy } from './createEnemy.types'

export const createEnemy: TCreateEnemy = ({ id }) => {
    const enemyStats = {
        id,
        behaviour: EEnemyBehaviours.idle,
        lastPlayerKnownPosition: null,
    }

    const enemyType = Math.round(Math.random() * 100)

    if (enemyType < 60)
        return {
            type: EEnemyTypes.soldier,
            ...enemyStats,
            maxHp: 10,
            movementSpeed: 0.02,
            range: 0.5,
        }
    if (enemyType < 80)
        return {
            type: EEnemyTypes.archer,
            ...enemyStats,
            maxHp: 5,
            movementSpeed: 0.025,
            range: 2,
        }
    return { type: EEnemyTypes.tank, ...enemyStats, maxHp: 20, movementSpeed: 0.015, range: 0.7 }
}
