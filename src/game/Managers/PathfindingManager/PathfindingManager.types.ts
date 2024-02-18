import { Vector3 } from 'three'

import { TResourceTracker } from '../../ResourceTracker/ResourceTracker.types'
import { TGraph } from './helpers/GraphHelper/GraphHelper.types'
import { TFindNodeIdByPosition, TNodeChecker } from './helpers/NodeChecker/NodeChecker.types'
import { TGetRandomNode, TNodeGetter } from './helpers/NodeGetter/NodeGetter.types'

export interface IPathfindingManagerState {
    graph: null | TGraph
    NodeChecker: null | TNodeChecker
    NodeGetter: null | TNodeGetter
    WebWorkers: Array<{ id: string; instance: Worker; isInUse: boolean; que: number }>
}

export type TFindPath = ({
    id,
    startPosition,
    destinationPosition,
}: {
    id: string
    startPosition: Vector3
    destinationPosition: Vector3
}) => Promise<Array<Vector3>>

export type TCreatePathfindingManager = ({
    ResourceTracker,
}: {
    ResourceTracker: TResourceTracker
}) => {
    init: () => void
    findPath: TFindPath
    getRandomNode: TGetRandomNode
    getNodeIdByPosition: TFindNodeIdByPosition
    dispose: () => void
}

export type TPathfindingManager = ReturnType<TCreatePathfindingManager>
