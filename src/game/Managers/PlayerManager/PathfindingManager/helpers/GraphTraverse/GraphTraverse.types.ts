import { Vector3 } from 'three'

import { IGraphNode, TGraph } from '../GraphHelper/GraphHelper.types'

export type TGraphTraverse = ({
    startNodeId,
    destinationNodeId,
    graph,
}: {
    startNodeId: string
    destinationNodeId: string
    graph: TGraph
}) => {
    path: Array<Vector3>
}

export interface IGraphNodeCopy extends IGraphNode {
    distance: number
    neighborNodes: Array<IGraphNodeCopy>
    stepped?: boolean
    previousNode?: IGraphNodeCopy
}

export type TGraphCopy = Array<IGraphNodeCopy>

export type TCheckIfHasSameNodeDownPreviousNodes = (
    node: IGraphNodeCopy,
    directNeighborNodes: Array<IGraphNodeCopy>,
) => IGraphNodeCopy | false

export type TTraverseThroughNodes = (node: IGraphNodeCopy) => IGraphNodeCopy | undefined

export type TSortFunc = (nodeA: IGraphNodeCopy, nodeB: IGraphNodeCopy) => number

export type TGetPathFromDestinationNode = (
    nodeWithPath: IGraphNodeCopy,
    path?: Array<IGraphNodeCopy>,
) => Array<IGraphNodeCopy>
