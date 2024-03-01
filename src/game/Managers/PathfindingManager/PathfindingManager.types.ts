import { Vector3 } from 'three'

import { TResourceTracker } from '../../ResourceTracker/ResourceTracker.types'
import { TGraph } from './helpers/GraphHelper/GraphHelper.types'
import { IPoint, IWebWorkerCalculatePathData } from './helpers/GraphTraverse/GraphTraverse.types'
import { TFindNodeIdByPosition, TNodeChecker } from './helpers/NodeChecker/NodeChecker.types'
import { TGetRandomNode, TNodeGetter } from './helpers/NodeGetter/NodeGetter.types'

type TWebWorkerResolve = (path: Array<IPoint>) => void
export interface IWebWorker {
    id: string
    instance: Worker
    que: Array<{ id: string; resolve: TWebWorkerResolve }>
}

export interface IWebWorkerOnRespondMessageEvent {
    data: {
        id: string
        path: Array<IPoint>
    }
}

export type TDelegateToWebWorker = (
    pathData: IWebWorkerCalculatePathData,
    resolve: TWebWorkerResolve,
) => void

export interface IPathfindingManagerState {
    graph: null | TGraph
    NodeChecker: null | TNodeChecker
    NodeGetter: null | TNodeGetter
    WebWorkers: Array<IWebWorker>
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
