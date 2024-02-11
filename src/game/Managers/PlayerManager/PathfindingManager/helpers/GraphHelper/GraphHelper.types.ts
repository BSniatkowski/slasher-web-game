import { Vector3 } from 'three'

export interface IGraphNode {
    id: string
    center: Vector3
    polygons: Array<Vector3>
    neighborNodesIds: Array<string>
}

export type TGraph = Array<IGraphNode>

export type TGraphHelper = ({
    centroids,
}: {
    centroids: Array<{ polygons: Array<Vector3>; center: Vector3 }>
}) => {
    graph: TGraph
}
