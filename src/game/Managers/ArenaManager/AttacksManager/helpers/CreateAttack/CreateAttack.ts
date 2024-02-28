const isDev = import.meta.env.DEV

import { Mesh, MeshBasicMaterial, SphereGeometry } from 'three'

import { EAttackTypes } from '../../AttacksManager.types'
import { IAttackBaseStats, TCreateAttack } from './CreateAttack.type'

const projectileGeometry = new SphereGeometry(0.1, 8, 8)
const projectileMaterial = new MeshBasicMaterial({ color: 'purple' })

const projectileMesh = new Mesh(projectileGeometry, projectileMaterial)

export const createAttack: TCreateAttack = ({ id, owner, target, type }) => {
    const baseStats: IAttackBaseStats = {
        id,
        owner,
        target,
        actualCooldown: 0,
        cooldown: 30,
        attackSpeed: 0.1,
        range: 3,
        collisionRadius: 0.25,
        instances: [],
    }

    switch (type) {
        case EAttackTypes.projectile: {
            return { type: EAttackTypes.projectile, attackMesh: projectileMesh, ...baseStats }
        }
        default: {
            if (isDev)
                console.warn(`Attack type ${type} with id: ${id} does not exist and was not added.`)
        }
    }
}
