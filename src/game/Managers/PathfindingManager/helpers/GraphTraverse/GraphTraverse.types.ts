import { IGraphNode, TGraph } from '../GraphHelper/GraphHelper.types'

export interface Point {
    x: number
    y: number
    z?: number
}

export type TGetTwoDimensionalDistanceBetweenPoints = (pointA: Point, pointB: Point) => number

export type TGraphTraverse = ({
    startPosition,
    startNodeId,
    destinationPosition,
    destinationNodeId,
    graph,
}: {
    startPosition: Point
    startNodeId: string
    destinationPosition: Point
    destinationNodeId: string
    graph: TGraph
}) => {
    path: Array<Point>
}

export interface IGraphNodeCopy extends IGraphNode {
    distance: number
    neighborNodes: Array<IGraphNodeCopy>
    stepped?: boolean
    previousNode?: IGraphNodeCopy
}

export type TGraphCopy = Array<IGraphNodeCopy>

export interface IWebWorkerState {
    graph: null | TGraphCopy
}

export interface IWebWorkerCalculatePathData {
    type: 'calculate'
    id: string
    startPosition: Point
    startNodeId: string
    destinationPosition: Point
    destinationNodeId: string
}

export type TWebWorkerOnReceiveMessageEvent =
    | { data: { type: 'init'; graph: TGraphCopy } }
    | {
          data: IWebWorkerCalculatePathData
      }

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
