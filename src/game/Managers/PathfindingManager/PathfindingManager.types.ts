import { Vector3 } from 'three'

import { TResourceTracker } from '../../ResourceTracker/ResourceTracker.types'
import { TGraph } from './helpers/GraphHelper/GraphHelper.types'
import { TNodeChecker } from './helpers/NodeChecker/NodeChecker.types'
import { TGetRandomNode, TNodeGetter } from './helpers/NodeGetter/NodeGetter.types'

export interface IPathfindingManagerState {
    graph: null | TGraph
    NodeChecker: null | TNodeChecker
    NodeGetter: null | TNodeGetter
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
    ResourceTracker,
}: {
    ResourceTracker: TResourceTracker
}) => {
    init: () => void
    findPath: TFindPath
    getRandomNode: TGetRandomNode
}

export type TPathfindingManager = ReturnType<TCreatePathfindingManager>
