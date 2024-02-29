import { MutableRefObject } from 'react'

export interface IGeneralSharedState {
    isPaused: boolean
}
export type TOnGeneralStateChangeCallback = (props: IGeneralSharedState) => void
export type TSetOnGeneralStateChangeCallback = (callback: TOnGeneralStateChangeCallback) => void
export interface IGeneralState extends IGeneralSharedState {
    onGeneralStateChangeCallback: null | TOnGeneralStateChangeCallback
}

export type TAnimate = () => Promise<void>
export type TTogglePause = () => void
export type TOnWindowResize = (props: { width: number; height: number }) => void
export type TDispose = () => void

export type TCreateGame = (ref: MutableRefObject<HTMLDivElement | null>) => {
    animate: TAnimate
    setOnGeneralStateChangeCallback: TSetOnGeneralStateChangeCallback
    togglePause: TTogglePause
    onWindowResize: TOnWindowResize
    dispose: TDispose
}

export type TGame = ReturnType<TCreateGame>
