import { Vector3 } from 'three'

import { TResourceTracker } from '../../../ResourceTracker/ResourceTracker.types'
import { TAnimationManager } from '../../AnimationsManager/AnimationsManager.types'
import { TCollisionsManager } from '../../CollisionsManager/CollisionsManager.types'
import { TAttack } from './helpers/CreateAttack/CreateAttack.type'

export enum EAttackTypes {
    projectile,
}

export interface ICollision {
    firstItemId: string
    secondItemId: string
}
export interface IAttacksManagerState {
    attacks: Array<TAttack>
}

export type TAddAttack = (props: Pick<TAttack, 'owner' | 'target' | 'type'>) => void

export type TUpdateAttack = (props: Partial<TAttack>) => void

export type TRemoveAttack = (id: string) => void

export type TCreateAttackInstance = (props: { attack: TAttack; targetPosition: Vector3 }) => void

export type TCreateAttacksManager = (props: {
    ResourceTracker: TResourceTracker
    AnimationManager: TAnimationManager
    CollisionsManager: TCollisionsManager
}) => {
    addAttack: TAddAttack
    updateAttack: TUpdateAttack
    removeAttack: TRemoveAttack
    tick: () => Array<ICollision>
}

export type TAttacksManager = ReturnType<TCreateAttacksManager>
