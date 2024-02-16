import { IGraphNode, TGraph } from '../GraphHelper/GraphHelper.types'

export type TGetNodeById = ({ id }: { id: string }) => { node: IGraphNode | null }

export type TGetRandomNode = () => { node: IGraphNode | null }

export type TCreateNodeGetter = ({ graph }: { graph: TGraph }) => {
    getNodeById: TGetNodeById
    getRandomNode: TGetRandomNode
}

export type TNodeGetter = ReturnType<TCreateNodeGetter>
