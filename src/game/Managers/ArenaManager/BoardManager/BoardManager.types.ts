import { TResourceTracker } from '../../../ResourceTracker/ResourceTracker.types'
import { IBoundries } from '../../CollisionsManager/CollisionsManager.types'
import { TBoardArea } from './helpers/createBoardFeatures/createBoardFeatures.type'
import { TBoardModel } from './helpers/createBoardModel/createBoardModel.type'

export type TGenerateBoard = () => IBoundries

export type TCreateBoardManager = ({ ResourceTracker }: { ResourceTracker: TResourceTracker }) => {
    generateBoard: TGenerateBoard
}

export interface IBoardState {
    board: Array<TBoardArea>
    boardModel: TBoardModel | null
}

export type TBoardManager = ReturnType<TCreateBoardManager>
