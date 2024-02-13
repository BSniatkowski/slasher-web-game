import {
    TCreateEnemyManager,
    TEnemyManagerState,
    TUpdateBehaviour,
    TUpdateLastPlayerKnownPosition,
} from './EnemyManager.types'
import { EEnemyBehaviours } from './helpers/createEnemy/createEnemy.types'

export const createEnemyManager: TCreateEnemyManager = (enemy) => {
    const state: TEnemyManagerState = {
        ...enemy,
    }

    const updateBehaviour: TUpdateBehaviour = ({ behaviour }) => {
        state.behaviour = behaviour
    }

    const updateLastPlayerKnownPosition: TUpdateLastPlayerKnownPosition = ({ position }) => {
        if (!position) {
            state.lastPlayerKnownPosition = null
            // clear path animation
            updateBehaviour({ behaviour: EEnemyBehaviours.idle })
            return
        }

        updateBehaviour({ behaviour: EEnemyBehaviours.chasing })
        // find path to player
    }

    return { updateLastPlayerKnownPosition }
}
