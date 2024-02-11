import {
    IWalkerState,
    TCheckPositionOnBoard,
    TFindStartPoint,
    TSetActualPosition,
    TUpdateVacantPositions,
    TWalk as TWalk,
    TWalker,
} from './Walker.types'

const updateVacantPositions: TUpdateVacantPositions = (state, { x, y }) => {
    const vacantPositions = []

    for (const vacantPosition of state.vacantPositions) {
        if (!(vacantPosition.x === x && vacantPosition.y === y))
            vacantPositions.push(vacantPosition)
    }

    if (
        state.board?.[x - 1]?.[y] === false &&
        !vacantPositions.find(
            (vacantPosition) => vacantPosition.x === x - 1 && vacantPosition.y === y,
        )
    )
        vacantPositions.push({ x: x - 1, y })

    if (
        state.board?.[x]?.[y - 1] === false &&
        !vacantPositions.find(
            (vacantPosition) => vacantPosition.x === x && vacantPosition.y === y - 1,
        )
    )
        vacantPositions.push({ x, y: y - 1 })

    if (
        state.board?.[x + 1]?.[y] === false &&
        !vacantPositions.find(
            (vacantPosition) => vacantPosition.x === x + 1 && vacantPosition.y === y,
        )
    )
        vacantPositions.push({ x: x + 1, y })

    if (
        state.board?.[x]?.[y + 1] === false &&
        !vacantPositions.find(
            (vacantPosition) => vacantPosition.x === x && vacantPosition.y === y + 1,
        )
    )
        vacantPositions.push({ x, y: y + 1 })

    state.vacantPositions = vacantPositions
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
    const { vacantPositions } = state

    const position =
        vacantPositions.length > 0 &&
        vacantPositions[Math.abs(Math.round(Math.random() * vacantPositions.length - 1))]

    if (position) setActualPosition(state, position)
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
    const board = []

    for (const x of baseBoard) {
        const xCopy = []

        for (const y of x) {
            xCopy.push(y)
        }

        board.push(xCopy)
    }

    const state: IWalkerState = {
        board,
        maxX: baseBoard.length,
        maxY: baseBoard[0].length,
        actualPosition: { x: 0, y: 0 },
        vacantPositions: [],
    }

    setActualPosition(state, {
        x: Math.round(state.maxX / 2),
        y: Math.round(state.maxY / 2),
    })

    const maxSteps = Math.round(
        baseBoard.length * baseBoard[0].length * (walkable >= 0 && walkable <= 1 ? walkable : 0.5),
    )

    for (let step = 1; step < maxSteps; step++) {
        walk(state)
    }

    return state.board
}
