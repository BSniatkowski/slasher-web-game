import { EGameObjects } from '../../../enums/objects.enums'
import { IBoardState, TCreateBoardManager, TGenerateBoard } from './BoardManager.types'
import { createBaseBoard } from './helpers/createBaseBoard/createBaseBoard'
import { createBoardFeatures } from './helpers/createBoardFeatures/createBoardFeatures'
import { createBoardModel } from './helpers/createBoardModel/createBoardModel'
import { Walker } from './helpers/Walker/Walker'

const maxSize = {
    x: 50,
    y: 50,
}

export const createBoardManager: TCreateBoardManager = ({ ResourceTracker }) => {
    const state: IBoardState = {
        board: [],
        boardModel: null,
    }

    const generateBoard: TGenerateBoard = () => {
        if (state.boardModel) ResourceTracker.disposeTrackedResource('board')

        const baseBoard = createBaseBoard({ maxSize })

        const walkableBoard = Walker({ baseBoard, walkable: 0.1 })

        const boardWithFeatures = createBoardFeatures({ walkableBoard })

        state.board = boardWithFeatures

        const boardModel = createBoardModel({ board: boardWithFeatures })

        // boardModel.matrixAutoUpdate = false
        // boardModel.updateMatrix()

        state.boardModel = boardModel

        ResourceTracker.trackResource({ id: EGameObjects.BOARD, resource: boardModel })

        return { x: -0.5, y: -0.5, w: maxSize.x + 1, h: maxSize.y + 1 } // TODO - correct first points at model creating to remove those -0.5
    }

    return { generateBoard }
}
