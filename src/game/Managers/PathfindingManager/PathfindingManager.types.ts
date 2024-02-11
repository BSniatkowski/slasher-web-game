import { Scene, Vector3 } from 'three'

import { TResourceTracker } from '../../../ResourceTracker/ResourceTracker.types'
import { TGraph } from './helpers/GraphHelper/GraphHelper.types'
import { TNodeChecker } from './helpers/NodeChecker/NodeChecker.types'

export interface IPathfindingManagerState {
    graph: null | TGraph
    NodeChecker: null | TNodeChecker
}

export type TFindPath = ({
    startPosition,
    destinationPosition,
}: {
    startPosition: Vector3
    destinationPosition: Vector3
}) => {
    path: Array<Vector3>
}

export type TCreatePathfindingManager = ({
    Scene,
    ResourceTracker,
}: {
    Scene: Scene
    ResourceTracker: TResourceTracker
}) => {
    init: () => void
    findPath: TFindPath
}

export type TPathfindingManager = ReturnType<TCreatePathfindingManager>
