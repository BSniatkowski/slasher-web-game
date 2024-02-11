import { Scene, Vector3 } from 'three'

import { TResourceTracker } from '../../../../../ResourceTracker/ResourceTracker.types'

export type TCentroidsHelper = ({
    Scene,
    ResourceTracker,
    polygons,
}: {
    Scene: Scene
    ResourceTracker: TResourceTracker
    polygons: Array<Vector3>
}) => {
    centroids: Array<{ polygons: Array<Vector3>; center: Vector3 }>
}
