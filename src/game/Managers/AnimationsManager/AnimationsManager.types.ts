export enum EAnimationTypes {
    simple,
    dynamic,
}

export interface IAnimationBase {
    id: string
    onEnded?: () => void
}

export interface ISimpleAnimation extends IAnimationBase {
    type: EAnimationTypes.simple
    tick: number
    ticksDuration: number
    callback: ({ tick, ticksDuration }: { tick: number; ticksDuration: number }) => void
}

export interface IDynamicAnimation extends IAnimationBase {
    type: EAnimationTypes.dynamic
    isPossibleGetter: () => boolean
    isEndedGetter: () => boolean
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
