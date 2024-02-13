import { Vector3 } from 'three'

export enum EEnemyBehaviours {
    idle,
    moving,
    chasing,
}

export interface IEnemyStats {
    id: string
    movementSpeed: number
    range: number
    behaviour: EEnemyBehaviours
    lastPlayerKnownPosition: Vector3 | null
}

export enum EEnemyTypes {
    soldier,
    archer,
    tank,
}

export interface ISoldier extends IEnemyStats {
    type: EEnemyTypes.soldier
}

export interface IArcher extends IEnemyStats {
    type: EEnemyTypes.archer
}

export interface ITank extends IEnemyStats {
    type: EEnemyTypes.tank
}

export type TEnemy = ISoldier | IArcher | ITank

export type TCreateEnemy = ({ id }: { id: string }) => TEnemy
