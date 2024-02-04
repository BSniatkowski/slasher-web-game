import { BufferGeometry, Material, Mesh, NormalBufferAttributes, Scene, Vector2 } from 'three'

import { TResourceTracker } from '../../../../../ResourceTracker/ResourceTracker.types'

export type TPolygonsHelper = ({
    Scene,
    ResourceTracker,
    board,
}: {
    Scene: Scene
    ResourceTracker: TResourceTracker
    board: Mesh<BufferGeometry<NormalBufferAttributes>, Material | Material[]>
}) => {
    polygons: Array<Vector2>
}
