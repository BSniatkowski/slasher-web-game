import { Mesh } from 'three'

import { EGameObjects } from '../../../../../enums/objects.enums'
import { EAttackTypes } from '../../AttacksManager.types'

export interface IAttackBaseStats {
    id: string
    owner: Mesh
    target: EGameObjects.ENEMY | EGameObjects.PLAYER
    actualCooldown: number
    cooldown: number
    attackSpeed: number
    range: number
    collisionRadius: number
    instances: Array<{ id: string; resource: Mesh }>
}

export type TAttack = IAttackBaseStats & { type: EAttackTypes.projectile; attackMesh: Mesh }

export type TCreateAttack = (
    props: Pick<TAttack, 'id' | 'owner' | 'target' | 'type'>,
) => TAttack | undefined
