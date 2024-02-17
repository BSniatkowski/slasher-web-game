import { CylinderGeometry, MathUtils, Mesh, MeshBasicMaterial, Vector3 } from 'three'

import { EAnimationTypes } from '../../AnimationsManager/AnimationsManager.types'
import { createMoveAlongPathAnimation } from '../../AnimationsManager/helpers/createMoveAlongPathAnimation/createMoveAlongPathAnimation'
import {
    TCreateEnemyManager,
    TEnemyManagerState,
    TUpdateBehaviour,
    TUpdateEnemyPosition,
    TUpdateLastPlayerKnownPosition,
} from './EnemyManager.types'
import { EEnemyBehaviours } from './helpers/createEnemy/createEnemy.types'

export const createEnemyManager: TCreateEnemyManager = ({
    enemyStats,
    ResourceTracker,
    PathfindingManager,
    AnimationManager,
}) => {
    const state: TEnemyManagerState = {
        ...enemyStats,
        hp: enemyStats.maxHp,
        enemyMesh: null,
    }

    const updateEnemyPosition: TUpdateEnemyPosition = (position) => {
        if (!state.enemyMesh) return

        state.enemyMesh.position.copy(position).setZ(0.25)
        state.enemyMesh?.updateMatrix()
    }

    const initEnemy = () => {
        const geometry = new CylinderGeometry(0.2, 0.2, 0.25, 8)
        const material = new MeshBasicMaterial({
            color: 'yellow',
            depthTest: false,
            depthWrite: false,
        })

        const enemyMesh = new Mesh(geometry, material)
        enemyMesh.matrixAutoUpdate = false
        enemyMesh.renderOrder = 3

        enemyMesh.rotateX(MathUtils.degToRad(90))

        state.enemyMesh = enemyMesh

        ResourceTracker.trackResource({ id: `enemy_${state.id}`, resource: enemyMesh })

        const { node } = PathfindingManager.getRandomNode()

        if (!node) return

        const initialPosition = new Vector3(node.center.x, node.center.y)

        updateEnemyPosition(initialPosition)
    }

    const updateBehaviour: TUpdateBehaviour = (behaviour) => {
        state.behaviour = behaviour
    }

    const updateLastPlayerKnownPosition: TUpdateLastPlayerKnownPosition = (position) => {
        if (!position || !state.enemyMesh) {
            state.lastPlayerKnownPosition = null

            AnimationManager.clearAnimation(`enemy_move_${state.id}`)
            updateBehaviour(EEnemyBehaviours.idle)
            return
        }

        state.lastPlayerKnownPosition = position.clone()
        updateBehaviour(EEnemyBehaviours.chasing)

        const { path } = PathfindingManager.findPath({
            startPosition: state.enemyMesh.position,
            destinationPosition: state.lastPlayerKnownPosition,
        })

        const isPossibleGetter = () => true
        const isEndedGetter = () =>
            state.enemyMesh && state.lastPlayerKnownPosition && state.range
                ? state.enemyMesh.position.distanceTo(state.lastPlayerKnownPosition) <= state.range
                : true

        AnimationManager.clearAnimation(`enemy_move_${state.id}`)
        AnimationManager.addAnimation({
            id: `enemy_move_${state.id}`,
            type: EAnimationTypes.dynamic,
            callback: createMoveAlongPathAnimation({
                path,
                speedGetter: () => state.movementSpeed,
                positionUpdate: updateEnemyPosition,
            }),
            isPossibleGetter,
            isEndedGetter,
        })
    }

    return { state, initEnemy, updateLastPlayerKnownPosition }
}
