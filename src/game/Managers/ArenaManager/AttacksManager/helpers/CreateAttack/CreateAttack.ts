const isDev = import.meta.env.DEV

import { EAttackTypes } from '../../AttacksManager.types'

export const CreateAttack = ({ id, type }) => {
    const state = {
        id,
        actualCooldown: 0,
        cooldown: 30,
        range: 3,
    }

    switch (type) {
        case EAttackTypes.projectile: {
            return { type: EAttackTypes.projectile, ...state }
        }
        default: {
            if (isDev)
                console.warn(`Attack type ${type} with id: ${id} does not exist and was not added.`)
        }
    }
}
