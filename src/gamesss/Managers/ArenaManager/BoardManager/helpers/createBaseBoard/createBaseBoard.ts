import { TCreateBaseBoard } from './createBaseBoard.types'

export const createBaseBoard: TCreateBaseBoard = ({ maxSize }) =>
    new Array(maxSize.x).fill(false).map(() => new Array(maxSize.y).fill(false).map(() => false))
