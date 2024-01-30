import { Scene } from 'three'

import { TResourceTracker } from '../../../ResourceTracker/ResourceTracker.types'
import { TBoardModel } from './helpers/createBoardModel/createBoardModel.type'

export type TGenerateBoard = () => void

export type TCreateBoardManager = ({
    Scene,
    ResourceTracker,
}: {
    Scene: Scene
    ResourceTracker: TResourceTracker
}) => { generateBoard: TGenerateBoard }

export interface IBoardState {
    board: Array<Array<boolean>>
    boardModel: TBoardModel | null
}

export type TBoardManager = ReturnType<TCreateBoardManager>
