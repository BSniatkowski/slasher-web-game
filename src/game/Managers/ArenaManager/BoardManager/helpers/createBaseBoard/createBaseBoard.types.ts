import { EBoardAreaType } from '../createBoardFeatures/createBoardFeatures.type'

export type TCreateBaseBoard = ({
    maxSize: { x, y },
}: {
    maxSize: { x: number; y: number }
}) => Array<Array<EBoardAreaType>>
