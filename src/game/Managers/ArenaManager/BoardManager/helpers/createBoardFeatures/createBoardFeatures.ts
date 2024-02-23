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

        const areaAbove = getAreaAbove(area)
        const areaOnLeft = getAreaOnLeft(area)
        const areaBelow = getAreaBelow(area)
        const areaOnRight = getAreaOnRight(area)

        if (
            areaAbove === EBoardAreaType.square &&
            areaOnLeft === EBoardAreaType.square &&
            areaBelow === EBoardAreaType.empty &&
            areaOnRight === EBoardAreaType.empty
        )
            area.type = EBoardAreaType.topLeftNarrowedge

        if (
            areaAbove === EBoardAreaType.square &&
            areaOnLeft === EBoardAreaType.empty &&
            areaBelow === EBoardAreaType.empty &&
            areaOnRight === EBoardAreaType.square
        )
            area.type = EBoardAreaType.topRightNarrowedge

        if (
            areaAbove === EBoardAreaType.empty &&
            areaOnLeft === EBoardAreaType.square &&
            areaBelow === EBoardAreaType.square &&
            areaOnRight === EBoardAreaType.empty
        )
            area.type = EBoardAreaType.bottomLeftNarrowedge

        if (
            areaAbove === EBoardAreaType.empty &&
            areaOnLeft === EBoardAreaType.empty &&
            areaBelow === EBoardAreaType.square &&
            areaOnRight === EBoardAreaType.square
        )
            area.type = EBoardAreaType.bottomRightNarrowedge
    }

    for (const area of boardWithFeatures) {
        if (area.type !== EBoardAreaType.square) continue

        const areaAbove = getAreaAbove(area)
        const areaOnLeft = getAreaOnLeft(area)
        const areaBelow = getAreaBelow(area)
        const areaOnRight = getAreaOnRight(area)

        if (
            areaAbove === EBoardAreaType.empty &&
            areaOnLeft === EBoardAreaType.square &&
            areaBelow === EBoardAreaType.empty &&
            areaOnRight === EBoardAreaType.empty
        )
            area.type = EBoardAreaType.solidLeftSquare

        if (
            areaAbove === EBoardAreaType.square &&
            areaOnLeft === EBoardAreaType.empty &&
            areaBelow === EBoardAreaType.empty &&
            areaOnRight === EBoardAreaType.empty
        )
            area.type = EBoardAreaType.solidTopSquare

        if (
            areaAbove === EBoardAreaType.empty &&
            areaOnLeft === EBoardAreaType.empty &&
            areaBelow === EBoardAreaType.empty &&
            areaOnRight === EBoardAreaType.square
        )
            area.type = EBoardAreaType.solidRightSquare

        if (
            areaAbove === EBoardAreaType.empty &&
            areaOnLeft === EBoardAreaType.empty &&
            areaBelow === EBoardAreaType.square &&
            areaOnRight === EBoardAreaType.empty
        )
            area.type = EBoardAreaType.solidBottomSquare
    }

    return boardWithFeatures
}
