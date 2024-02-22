import { TCreateBoardFeatures } from './createBoardFeatures.type'

export const createBoardFeatures: TCreateBoardFeatures = ({ walkableBoard }) => {
    const boardWithFeatures = []

    for (let xIndex = 0; xIndex < walkableBoard.length; xIndex++) {
        for (let yIndex = 0; yIndex < walkableBoard[0].length; yIndex++) {
            if (walkableBoard[xIndex][yIndex])
                boardWithFeatures.push({ type: 1, x: xIndex, y: yIndex })
        }
    }

    return boardWithFeatures
}
