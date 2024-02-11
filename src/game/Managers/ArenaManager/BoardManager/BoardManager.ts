import { IBoardState, TCreateBoardManager, TGenerateBoard } from './BoardManager.types'
import { createBaseBoard } from './helpers/createBaseBoard/createBaseBoard'
import { createBoardModel } from './helpers/createBoardModel/createBoardModel'
import { Walker } from './helpers/Walker/Walker'

const maxSize = {
    x: 200,
    y: 200,
}

export const createBoardManager: TCreateBoardManager = ({ Scene, ResourceTracker }) => {
    const state: IBoardState = {
        board: [],
        boardModel: null,
    }

    const generateBoard: TGenerateBoard = () => {
        if (state.boardModel) ResourceTracker.disposeTrackedResource('board')

        const baseBoard = createBaseBoard({ maxSize })

        const walkableBoard = Walker({ baseBoard, walkable: 0.1 })

        state.board = walkableBoard

        const boardModel = createBoardModel({ board: walkableBoard })

        boardModel.matrixAutoUpdate = false
        boardModel.updateMatrix()

        state.boardModel = boardModel

        ResourceTracker.trackResource({ id: 'board', resource: boardModel })

        Scene.add(boardModel)
    }

    return { generateBoard }
}
