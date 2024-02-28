const isDev = import.meta.env.DEV

import { CircleGeometry, Mesh, MeshBasicMaterial } from 'three'

import { EAnimationTargets } from '../../../enums/animations.enums'
import { EGameObjects } from '../../../enums/objects.enums'
import { EAnimationTypes } from '../../AnimationsManager/AnimationsManager.types'
import { createSimpleMoveAlongPathAnimation } from '../../AnimationsManager/helpers/createSimpleMoveAlongPathAnimation/createSimpleMoveAlongPathAnimation'
import {
    IAttacksManagerState,
    TAddAttack,
    TCreateAttackInstance,
    TCreateAttacksManager,
    TRemoveAttack,
    TUpdateAttack,
} from './AttacksManager.types'
import { createAttack } from './helpers/CreateAttack/CreateAttack'

const targetMesh = new Mesh(
    new CircleGeometry(0.15),
    new MeshBasicMaterial({ color: 'pink', depthWrite: false }),
)
targetMesh.renderOrder = 4

export const createAttacksManager: TCreateAttacksManager = ({
    ResourceTracker,
    AnimationManager,
    CollisionsManager,
}) => {
    ResourceTracker.trackResource({ id: 'sight', resource: targetMesh })

    const state: IAttacksManagerState = {
        attacks: [],
    }

    const addAttack: TAddAttack = ({ owner, target, type }) => {
        const id = crypto.randomUUID()

        const attack = createAttack({ id, owner, target, type })

        if (attack) state.attacks.push(attack)
    }

    const updateAttack: TUpdateAttack = () => {}

    const removeAttack: TRemoveAttack = () => {}

    const createAttackInstance: TCreateAttackInstance = ({ attack, targetPosition }) => {
        const attackInstance = {
            id: `${attack.id}_${crypto.randomUUID()}`,
            resource: attack.attackMesh.clone(),
        }

        if (isDev) targetMesh.position.copy(targetPosition)

        ResourceTracker.trackResource(attackInstance)

        const ticksDuration = attack.range / attack.attackSpeed

        AnimationManager.addAnimation({
            id: `${EAnimationTargets.PROJECTILE_MOVE}_${attackInstance.id}`,
            type: EAnimationTypes.simple,
            tick: 0,
            ticksDuration,
            callback: createSimpleMoveAlongPathAnimation({
                start: attack.owner.position.clone(),
                destination: targetPosition.clone(),
                range: attack.range,
                positionUpdate: (position) => attackInstance.resource.position.copy(position),
            }),
            onEnded: () => {
                CollisionsManager.removeCollisionsItem(attackInstance.id)

                if (ResourceTracker.getTrackedResource(attackInstance.id))
                    ResourceTracker.disposeTrackedResource(attackInstance.id)
            },
        })

        attackInstance.resource.position.copy(attack.owner.position)
        attack.instances.push(attackInstance)
    }

    const triggerAllPossibleAttacks = () => {
        for (const attack of state.attacks) {
            if (!attack.owner) continue

            const attackRange = {
                x: attack.owner.position.x,
                y: attack.owner.position.y,
                r: attack.range,
            }

            const targets = CollisionsManager.findItemsInRange(attackRange)

            const correctTargets = []

            for (const target of targets) {
                if (!target.id.includes(attack.target)) continue

                const position = target.positionGetter()

                if (!position) continue

                const distanceToTarget = position.distanceTo(attack.owner.position)

                if (distanceToTarget <= attack.range)
                    correctTargets.push({ position, distanceToTarget })
            }

            const targetPosition = correctTargets.sort(
                (targetA, targetB) => targetA.distanceToTarget - targetB.distanceToTarget,
            )[0]?.position

            if (attack.actualCooldown === 0 && targetPosition) {
                createAttackInstance({ attack, targetPosition })
                attack.actualCooldown = attack.cooldown

                continue
            }

            if (attack.actualCooldown > 0) attack.actualCooldown--
        }
    }

    const checkAttacksCollisions = () => {
        const collisionsPerTick = []

        for (const attack of state.attacks) {
            const attackInstancesAfterCollisions = []

            for (const attackInstance of attack.instances) {
                const attackInstanceRange = {
                    x: attackInstance.resource.position.x,
                    y: attackInstance.resource.position.y,
                    r: attack.collisionRadius,
                }

                const collisions = CollisionsManager.findItemsInRange(attackInstanceRange)

                for (const collision of collisions) {
                    if (!collision.id.includes(EGameObjects.ENEMY)) continue

                    const collisionPosition = collision.positionGetter()

                    if (!collisionPosition) continue

                    if (
                        collisionPosition.distanceTo(attackInstance.resource.position) >
                        attack.collisionRadius
                    )
                        continue

                    CollisionsManager.removeCollisionsItem(attackInstance.id)
                    AnimationManager.clearAnimation(attackInstance.id)
                    ResourceTracker.disposeTrackedResource(attackInstance.id)

                    collisionsPerTick.push({
                        firstItemId: attackInstance.id,
                        secondItemId: collision.id,
                    })

                    break
                }

                if (
                    !collisionsPerTick.find(
                        (collision) => collision.firstItemId === attackInstance.id,
                    )
                ) {
                    attackInstancesAfterCollisions.push(attackInstance)
                }

                attack.instances = attackInstancesAfterCollisions
            }
        }

        return collisionsPerTick
    }

    const tick = () => {
        triggerAllPossibleAttacks()

        return checkAttacksCollisions()
    }

    return { addAttack, updateAttack, removeAttack, tick }
}
