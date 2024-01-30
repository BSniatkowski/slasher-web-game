import { BufferGeometry, Mesh, MeshBasicMaterial, NormalBufferAttributes } from 'three'

export type TCreateBoardModel = ({
    board,
}: {
    board: Array<Array<boolean>>
}) => Mesh<BufferGeometry<NormalBufferAttributes>, MeshBasicMaterial>

export type TBoardModel = ReturnType<TCreateBoardModel>
