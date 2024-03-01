import { IPoint } from '../../../../PathfindingManager/helpers/GraphTraverse/GraphTraverse.types'

export enum EBoardAreaType {
    empty,
    square,
    topLeftNarrowedge,
    topRightNarrowedge,
    bottomRightNarrowedge,
    bottomLeftNarrowedge,
    solidTopSquare,
    solidRightSquare,
    solidBottomSquare,
    solidLeftSquare,
    smoothTopLeftSquare,
    smoothTopRightSquare,
    smoothBottomRightSquare,
    smoothBottomLeftSquare,
}

export type TBoardArea = IPoint & { type: EBoardAreaType }

export type TCreateBoardFeatures = ({
    walkableBoard,
}: {
    walkableBoard: Array<Array<number>>
}) => Array<TBoardArea>

export type TBoardModel = ReturnType<TCreateBoardFeatures>
