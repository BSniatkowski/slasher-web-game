import { Mesh } from 'three'

import { TBoardArea } from '../createBoardFeatures/createBoardFeatures.type'

export type TCreateBoardModel = ({ board }: { board: Array<TBoardArea> }) => Mesh

export type TBoardModel = ReturnType<TCreateBoardModel>
