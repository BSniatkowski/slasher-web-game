import { Vector3 } from 'three'

import { EEnemyBehaviours, TEnemy } from './helpers/createEnemy/createEnemy.types'

export type TUpdateBehaviour = ({ behaviour }: { behaviour: EEnemyBehaviours }) => void

export type TUpdateLastPlayerKnownPosition = ({ position }: { position: Vector3 }) => void

export type TEnemyManagerState = TEnemy & {
    hp: number
}

export type TCreateEnemyManager = (enemy: TEnemy) => {
    updateLastPlayerKnownPosition: TUpdateLastPlayerKnownPosition
}
