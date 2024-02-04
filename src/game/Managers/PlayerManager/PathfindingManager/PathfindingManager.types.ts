import { Scene, Vector2 } from 'three'

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
    startPosition: Vector2
    destinationPosition: Vector2
}) => {
    path: Array<Vector2>
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
