export type TWalker = ({
    baseBoard,
    walkable,
}: {
    baseBoard: Array<Array<boolean>>
    walkable: number
}) => Array<Array<boolean>>

export interface IWalkerState {
    board: Array<Array<boolean>>
    maxX: number
    maxY: number
    actualPosition: {
        x: number
        y: number
    }
}

export type TCheckPositionOnBoard = (
    state: IWalkerState,
    position: { x: number; y: number },
) => void

export type TSetActualPosition = (state: IWalkerState, position: { x: number; y: number }) => void

export type TFindStartPoint = (state: IWalkerState) => void

export type TWalk = (state: IWalkerState) => void
