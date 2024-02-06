import { Vector2 } from 'three'

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
    path: Array<Vector2>
}

export interface IGraphNodeCopy extends IGraphNode {
    distance: number
    neighborNodes: Array<IGraphNodeCopy>
    stepped?: boolean
    previousNode?: IGraphNodeCopy
}

export type TGraphCopy = Array<IGraphNodeCopy>

export type TSortFunc = (nodeA: IGraphNodeCopy, nodeB: IGraphNodeCopy) => number
