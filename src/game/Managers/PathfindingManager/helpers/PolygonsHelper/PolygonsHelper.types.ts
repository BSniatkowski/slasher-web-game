import { BufferGeometry, Material, Mesh, NormalBufferAttributes, Vector2 } from 'three'

import { TResourceTracker } from '../../../../ResourceTracker/ResourceTracker.types'

export type TPolygonsHelper = ({
    ResourceTracker,
    board,
}: {
    ResourceTracker: TResourceTracker
    board: Mesh<BufferGeometry<NormalBufferAttributes>, Material | Material[]>
}) => {
    polygons: Array<Vector2>
}
