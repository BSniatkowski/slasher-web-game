import { TResourceTracker } from '../../../ResourceTracker/ResourceTracker.types'
import { TBoardModel } from './helpers/createBoardModel/createBoardModel.type'

export type TGenerateBoard = () => void

export type TCreateBoardManager = ({ ResourceTracker }: { ResourceTracker: TResourceTracker }) => {
    generateBoard: TGenerateBoard
}

export interface IBoardState {
    board: Array<Array<boolean>>
    boardModel: TBoardModel | null
}

export type TBoardManager = ReturnType<TCreateBoardManager>
