import { Vector3 } from 'three'

export interface IEnemyBasicStats {
    id: string
    movementSpeed: number
    range: number
    maxHp: number
    lastPlayerKnownPosition: Vector3 | null
}

export enum EEnemyTypes {
    soldier,
    archer,
    tank,
}

export interface ISoldier extends IEnemyBasicStats {
    type: EEnemyTypes.soldier
}

export interface IArcher extends IEnemyBasicStats {
    type: EEnemyTypes.archer
}

export interface ITank extends IEnemyBasicStats {
    type: EEnemyTypes.tank
}

export type TEnemyStats = ISoldier | IArcher | ITank

export type TCreateEnemy = ({ id }: { id: string }) => TEnemyStats
