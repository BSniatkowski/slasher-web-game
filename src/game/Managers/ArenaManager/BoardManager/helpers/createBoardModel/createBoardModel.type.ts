import { BufferGeometry, Mesh, MeshBasicMaterial, NormalBufferAttributes } from 'three'

import { TBoardArea } from '../createBoardFeatures/createBoardFeatures.type'

export type TCreateBoardModel = ({
    board,
}: {
    board: Array<TBoardArea>
}) => Mesh<BufferGeometry<NormalBufferAttributes>, MeshBasicMaterial>

export type TBoardModel = ReturnType<TCreateBoardModel>
