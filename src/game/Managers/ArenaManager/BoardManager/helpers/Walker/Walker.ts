import {
    IWalkerState,
    TCheckPositionOnBoard,
    TFindStartPoint,
    TIsPartOfActualMap,
    TSetActualPosition,
    TUpdateVacantPositions,
    TWalk as TWalk,
    TWalker,
} from './Walker.types'

const isPartOfActualMap: TIsPartOfActualMap = (board, { x, y }) =>
    board?.[x - 1]?.[y] || board?.[x]?.[y - 1] || board?.[x + 1]?.[y] || board?.[x]?.[y - 1]

const updateVacantPositions: TUpdateVacantPositions = (state, { x, y }) => {
    state.vacantPositions = state.vacantPositions.filter(
        (position) => !(position.x === x && position.y === y),
    )
}

const checkPositionOnBoard: TCheckPositionOnBoard = (state, { x, y }) => {
    state.board[x][y] = true
    updateVacantPositions(state, { x, y })
}

const setActualPosition: TSetActualPosition = (state, position) => {
    state.actualPosition = position
    checkPositionOnBoard(state, position)
}

const findStartPoint: TFindStartPoint = (state) => {
    const { board, maxX, maxY, vacantPositions } = state

    const vacantAndPartOfMap = vacantPositions.filter((pos) => isPartOfActualMap(board, pos))

    const position =
        vacantPositions.length > 0
            ? vacantAndPartOfMap[
                  Math.abs(Math.round(Math.random() * vacantAndPartOfMap.length - 1))
              ]
            : {
                  x: Math.abs(Math.round(Math.random() * maxX - 1)),
                  y: Math.abs(Math.round(Math.random() * maxY - 1)),
              }

    if (
        (vacantPositions.length === 0 && board?.[position.x]?.[position.y] === true) ||
        position === undefined
    )
        return

    if (board?.[position.x]?.[position.y] !== false) {
        findStartPoint(state)
        return
    }

    setActualPosition(state, position)
}

const walk: TWalk = (state) => {
    const directionValue = Math.round(Math.random() * 100)

    const {
        board,
        maxX,
        maxY,
        actualPosition: { x, y },
    } = state

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

    findStartPoint(state)
}

export const Walker: TWalker = ({ baseBoard, walkable }) => {
    const state: IWalkerState = {
        board: baseBoard.map((x) => x.map((y) => y)),
        maxX: baseBoard.length,
        maxY: baseBoard[0].length,
        actualPosition: {
            x: Math.round(baseBoard.length / 2),
            y: Math.round(baseBoard[0].length / 2),
        },
        vacantPositions: baseBoard
            .map((x, indexX) =>
                x
                    .map(
                        (y, indexY) =>
                            !y && {
                                x: indexX,
                                y: indexY,
                            },
                    )
                    .filter((y) => y),
            )
            .reduce((acc, el) => acc.concat(el), []) as Array<{ x: number; y: number }>,
    }

    const maxSteps = Math.round(
        baseBoard.length * baseBoard[0].length * (walkable >= 0 && walkable <= 1 ? walkable : 0.5),
    )

    for (let step = 0; step < maxSteps; step++) {
        walk(state)
    }

    return state.board
}
