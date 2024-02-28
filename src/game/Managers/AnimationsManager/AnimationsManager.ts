const isDev = import.meta.env.DEV

import {
    EAnimationTypes,
    IAnimationManagerState,
    TAddAnimation,
    TClearAnimation,
} from './AnimationsManager.types'

export const createAnimationManager = () => {
    const state: IAnimationManagerState = {
        animations: [],
    }

    const addAnimation: TAddAnimation = (animation) => {
        switch (animation.type) {
            case EAnimationTypes.simple: {
                if (
                    typeof animation.callback !== 'function' ||
                    typeof animation.ticksDuration !== 'number' ||
                    animation.ticksDuration <= 0
                ) {
                    if (isDev) {
                        if (typeof animation.callback !== 'function')
                            console.warn(
                                `Cannot add animation ${animation.id} because type of "callback" parameter is incorrect.`,
                            )
                        if (typeof animation.ticksDuration !== 'number')
                            console.warn(
                                `Cannot add animation ${animation.id} because type of "ticksDuration" parameter is incorrect.`,
                            )
                        if (
                            typeof animation.ticksDuration === 'number' &&
                            animation.ticksDuration <= 0
                        )
                            console.warn(
                                `Cannot add animation ${animation.id} because value of "ticksDuration" parameter is incorrect.`,
                            )
                    }

                    return
                }
                break
            }
            case EAnimationTypes.dynamic: {
                if (
                    typeof animation.callback !== 'function' ||
                    typeof animation.isEndedGetter !== 'function' ||
                    typeof animation.isPossibleGetter !== 'function'
                ) {
                    if (isDev) {
                        if (typeof animation.callback !== 'function')
                            console.warn(
                                `Cannot add animation ${animation?.id} because type of "callback" parameter is incorrect.`,
                            )
                        if (typeof animation.isEndedGetter !== 'function')
                            console.warn(
                                `Cannot add animation ${animation?.id} because type of "isEndedGetter" parameter is incorrect.`,
                            )
                        if (typeof animation.isPossibleGetter !== 'function')
                            console.warn(
                                `Cannot add animation ${animation?.id} because type of "isPossibleGetter" parameter is incorrect.`,
                            )
                    }

                    return
                }
                break
            }
            default: {
                console.warn(
                    `Cannot add animation ${JSON.stringify(
                        animation,
                    )} because animation type is incorrect.`,
                )
                return
            }
        }

        state.animations.push(animation)
    }

    const clearAnimation: TClearAnimation = (id) => {
        state.animations = state.animations.filter((animation) => animation.id !== id)
    }

    const clearAllEndedAnimations = () => {
        state.animations = state.animations.filter((animation) => {
            switch (animation.type) {
                case EAnimationTypes.simple: {
                    const isNotEnded = animation.tick < animation.ticksDuration

                    if (!isNotEnded && typeof animation.onEnded === 'function') animation.onEnded()

                    return isNotEnded
                }
                case EAnimationTypes.dynamic: {
                    const isNotEnded = !animation.isEndedGetter()

                    if (!isNotEnded && typeof animation.onEnded === 'function') animation.onEnded()

                    return isNotEnded
                }
            }
        })
    }

    const animate = () => {
        for (const animation of state.animations) {
            switch (animation.type) {
                case EAnimationTypes.simple: {
                    if (animation.tick < animation.ticksDuration) {
                        animation.callback({
                            tick: animation.tick,
                            ticksDuration: animation.ticksDuration,
                        })
                        animation.tick++
                    }
                    break
                }
                case EAnimationTypes.dynamic: {
                    if (animation.isPossibleGetter()) animation.callback()

                    break
                }
            }
        }

        clearAllEndedAnimations()
    }

    return { animate, addAnimation, clearAnimation, clearAllEndedAnimations }
}
