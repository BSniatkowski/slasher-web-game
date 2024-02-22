export type TWalker = ({
    baseBoard,
    walkable,
}: {
    baseBoard: Array<Array<number>>
    walkable: number
}) => Array<Array<number>>

export interface IWalkerState {
    board: Array<Array<number>>
    maxX: number
    maxY: number
    actualPosition: {
        x: number
        y: number
    }
    vacantPositions: Array<{
        x: number
        y: number
    }>
}

export type TUpdateVacantPositions = (
    state: IWalkerState,
    position: { x: number; y: number },
) => void

export type TCheckPositionOnBoard = (
    state: IWalkerState,
    position: { x: number; y: number },
) => void

export type TSetActualPosition = (state: IWalkerState, position: { x: number; y: number }) => void

export type TFindStartPoint = (state: IWalkerState) => void

export type TWalk = (state: IWalkerState) => void
