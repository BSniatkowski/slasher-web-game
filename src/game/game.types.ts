import { MutableRefObject } from 'react'

export type TAnimate = () => void
export type TPause = () => void
export type TDispose = () => void

export type TInitializeGame = (ref: MutableRefObject<HTMLDivElement | null>) => {
    animate: TAnimate
    pause: TPause
    dispose: TDispose
}
