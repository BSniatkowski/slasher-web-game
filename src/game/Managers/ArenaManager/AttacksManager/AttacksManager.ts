import { CreateAttack } from './helpers/CreateAttack/CreateAttack'

export const CreateAttacksManager = () => {
    const state = {
        attacks: [],
    }

    const addAttack = ({ type }) => {
        const id = crypto.randomUUID()

        const attack = CreateAttack({ id, type })

        if (attack) state.attacks.push(attack)
    }

    const updateAttack = () => {}

    const removeAttack = () => {}

    const checkAttacksCollisions = () => {}

    const tick = () => {
        checkAttacksCollisions()
    }

    return { addAttack, updateAttack, removeAttack, tick }
}
