export enum EAnimationTypes {
    simple,
    dynamic,
}

export interface ISimpleAnimation {
    id: string
    type: EAnimationTypes.simple
    tick: number
    ticksDuration: number
    callback: ({ tick, ticksDuration }: { tick: number; ticksDuration: number }) => void
}

export interface IDynamicAnimation {
    id: string
    type: EAnimationTypes.dynamic
    isPossibleGetter: () => boolean | undefined
    isEndedGetter: () => boolean | undefined
    callback: () => void
}

export type TAnimation = ISimpleAnimation | IDynamicAnimation

export interface IAnimationManagerState {
    animations: Array<TAnimation>
}

export type TAddAnimation = (animation: TAnimation) => void

export type TClearAnimation = (id: string) => void

export type TCreateAnimationManager = () => {
    animate: () => void
    addAnimation: TAddAnimation
    clearAnimation: TClearAnimation
    clearAllEndedAnimations: () => void
}

export type TAnimationManager = ReturnType<TCreateAnimationManager>
