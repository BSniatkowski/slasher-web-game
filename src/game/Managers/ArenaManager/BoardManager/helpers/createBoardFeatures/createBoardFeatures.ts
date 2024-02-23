import { EBoardAreaType, TBoardArea, TCreateBoardFeatures } from './createBoardFeatures.type'

export const createBoardFeatures: TCreateBoardFeatures = ({ walkableBoard }) => {
    const boardWithFeatures: Array<TBoardArea> = []

    for (let xIndex = 0; xIndex < walkableBoard.length; xIndex++) {
        for (let yIndex = 0; yIndex < walkableBoard[0].length; yIndex++) {
            if (walkableBoard[xIndex][yIndex] === EBoardAreaType.square)
                boardWithFeatures.push({
                    type: EBoardAreaType.square,
                    x: xIndex,
                    y: yIndex,
                })

            if (
                walkableBoard[xIndex][yIndex] === EBoardAreaType.empty &&
                (walkableBoard?.[xIndex - 1]?.[yIndex] ||
                    walkableBoard?.[xIndex - 1]?.[yIndex - 1] ||
                    walkableBoard?.[xIndex + 1]?.[yIndex] ||
                    walkableBoard?.[xIndex + 1]?.[yIndex + 1])
            )
                boardWithFeatures.push({
                    type: EBoardAreaType.empty,
                    x: xIndex,
                    y: yIndex,
                })
        }
    }

    console.log(boardWithFeatures)

    const getAreaOnLeft = (area: TBoardArea) => {
        return (
            boardWithFeatures.find(
                (boardArea) => boardArea.x === area.x - 1 && boardArea.y === area.y,
            )?.type ?? EBoardAreaType.empty
        )
    }

    const getAreaBelow = (area: TBoardArea) => {
        return (
            boardWithFeatures.find(
                (boardArea) => boardArea.x === area.x && boardArea.y === area.y - 1,
            )?.type ?? EBoardAreaType.empty
        )
    }

    const getAreaOnRight = (area: TBoardArea) => {
        return (
            boardWithFeatures.find(
                (boardArea) => boardArea.x === area.x + 1 && boardArea.y === area.y,
            )?.type ?? EBoardAreaType.empty
        )
    }

    const getAreaAbove = (area: TBoardArea) => {
        return (
            boardWithFeatures.find(
                (boardArea) => boardArea.x === area.x && boardArea.y === area.y + 1,
            )?.type ?? EBoardAreaType.empty
        )
    }

    for (const area of boardWithFeatures) {
        if (area.type === EBoardAreaType.square) continue

        if (
            getAreaAbove(area) === EBoardAreaType.square &&
            getAreaOnLeft(area) === EBoardAreaType.square &&
            getAreaBelow(area) === EBoardAreaType.empty &&
            getAreaOnRight(area) === EBoardAreaType.empty
        )
            area.type = EBoardAreaType.topLeftNarrowedge

        if (
            getAreaAbove(area) === EBoardAreaType.square &&
            getAreaOnLeft(area) === EBoardAreaType.empty &&
            getAreaBelow(area) === EBoardAreaType.empty &&
            getAreaOnRight(area) === EBoardAreaType.square
        )
            area.type = EBoardAreaType.topRightNarrowedge

        if (
            getAreaAbove(area) === EBoardAreaType.empty &&
            getAreaOnLeft(area) === EBoardAreaType.square &&
            getAreaBelow(area) === EBoardAreaType.square &&
            getAreaOnRight(area) === EBoardAreaType.empty
        )
            area.type = EBoardAreaType.bottomLeftNarrowedge

        if (
            getAreaAbove(area) === EBoardAreaType.empty &&
            getAreaOnLeft(area) === EBoardAreaType.empty &&
            getAreaBelow(area) === EBoardAreaType.square &&
            getAreaOnRight(area) === EBoardAreaType.square
        )
            area.type = EBoardAreaType.bottomRightNarrowedge
    }

    return boardWithFeatures
}
