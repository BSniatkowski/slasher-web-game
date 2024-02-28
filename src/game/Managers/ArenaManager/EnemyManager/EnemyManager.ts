import { CylinderGeometry, MathUtils, Mesh, MeshBasicMaterial } from 'three'

import {
    TCreateEnemyManager,
    TEnemyManagerState,
    TInitEnemy,
    TMoveEnemy,
    TSetEnemyPath,
} from './EnemyManager.types'

export const createEnemyManager: TCreateEnemyManager = ({ enemyStats, ResourceTracker }) => {
    const state: TEnemyManagerState = {
        ...enemyStats,
        hp: enemyStats.maxHp,
        enemyMesh: null,
        path: [],
    }

    const getId = () => state.id

    const move: TMoveEnemy = (position) => {
        if (!state.enemyMesh) return

        state.enemyMesh.position.set(position.x, position.y, 0.25)
        state.enemyMesh?.updateMatrix()
    }

    const init: TInitEnemy = (initialPosition) => {
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

        ResourceTracker.trackResource({ id: state.id, resource: enemyMesh })

        move(initialPosition)
    }

    const positionGetter = () => state.enemyMesh?.position

    const speedGetter = () => state.movementSpeed

    const rangeGetter = () => state.range

    const getPath = () => state.path

    const setPath: TSetEnemyPath = (path) => (state.path = path)

    return { getId, init, move, positionGetter, speedGetter, rangeGetter, getPath, setPath }
}
