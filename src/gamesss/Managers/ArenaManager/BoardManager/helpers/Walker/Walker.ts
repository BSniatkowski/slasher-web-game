import {
    IWalkerState,
    TCheckPositionOnBoard,
    TFindStartPoint,
    TSetActualPosition,
    TWalk as TWalk,
    TWalker,
} from './Walker.types'

const checkPositionOnBoard: TCheckPositionOnBoard = (state, { x, y }) => {
    state.board[x][y] = true
}

const setActualPosition: TSetActualPosition = (state, position) => {
    state.actualPosition = position
    checkPositionOnBoard(state, position)
}

const findStartPoint: TFindStartPoint = (state) => {
    // console.log('Finding new start point...')

    const { board, maxX, maxY } = state

    const position = {
        x: Math.round(Math.random() * maxX),
        y: Math.round(Math.random() * maxY),
    }

    if (
        board?.[position.x]?.[position.y] === undefined ||
        board?.[position.x]?.[position.y] === true
    ) {
        findStartPoint(state)
        return
    }

    setActualPosition(state, position)
}

const walk: TWalk = (state) => {
    // console.log('Walking...')

    const directionValue = Math.round(Math.random() * 100)

    const {
        board,
        maxX,
        maxY,
        actualPosition: { x, y },
    } = state

    if (
        board?.[x - 1]?.[y] === true &&
        board?.[x]?.[y - 1] === true &&
        board?.[x + 1]?.[y] === true &&
        board?.[x]?.[y + 1] === true
    ) {
        findStartPoint(state)

        walk(state)
        return
    }

    if (directionValue <= 25 && y + 1 < maxY && !board[x][y + 1]) {
        setActualPosition(state, { x, y: y + 1 })
        return
    }
    if (directionValue <= 50 && x + 1 < maxX && !board[x + 1][y]) {
        setActualPosition(state, { x: x + 1, y })
        return
    }
    if (directionValue <= 75 && y - 1 >= 0 && !board[x][y - 1]) {
        setActualPosition(state, { x, y: y - 1 })
        return
    }
    if (x - 1 >= 0 && !board[x - 1][y]) {
        setActualPosition(state, { x: x - 1, y })
        return
    }
}

export const Walker: TWalker = ({ baseBoard, walkable }) => {
    const state: IWalkerState = {
        board: baseBoard.map((x) => x.map((y) => y)),
        maxX: baseBoard.length,
        maxY: baseBoard[0].length,
        actualPosition: {
            x: 0,
            y: 0,
        },
    }

    findStartPoint(state)

    const maxSteps = Math.round(
        baseBoard.length * baseBoard[0].length * (walkable >= 0 && walkable <= 1 ? walkable : 0.5),
    )

    for (let step = 1; step < maxSteps; step++) {
        walk(state)
    }

    return state.board
}
