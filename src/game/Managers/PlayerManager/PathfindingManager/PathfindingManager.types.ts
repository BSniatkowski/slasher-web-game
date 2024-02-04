import { Scene } from 'three'

import { TResourceTracker } from '../../../ResourceTracker/ResourceTracker.types'

export type TCreatePathfindingManager = ({
    Scene,
    ResourceTracker,
}: {
    Scene: Scene
    ResourceTracker: TResourceTracker
}) => {
    init: () => void
}
