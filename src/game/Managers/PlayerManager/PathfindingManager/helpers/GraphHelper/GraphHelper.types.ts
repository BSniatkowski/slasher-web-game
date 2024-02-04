import { Vector2 } from 'three'

export interface IGraphNode {
    id: string
    center: Vector2
    polygons: Array<Vector2>
    neighborNodesIds: Array<string>
    neighborNodes: TGraph
}

export type TGraph = Array<IGraphNode>

export type TGraphHelper = ({
    centroids,
}: {
    centroids: Array<{ polygons: Array<Vector2>; center: Vector2 }>
}) => {
    graph: TGraph
}
