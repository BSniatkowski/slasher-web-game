import { Scene, Vector2 } from 'three'

import { TResourceTracker } from '../../../../ResourceTracker/ResourceTracker.types'

export type TCentroidsHelper = ({
    Scene,
    ResourceTracker,
    polygons,
}: {
    Scene: Scene
    ResourceTracker: TResourceTracker
    polygons: Array<Vector2>
}) => {
    centroids: Array<{ polygons: Array<Vector2>; center: Vector2 }>
}
