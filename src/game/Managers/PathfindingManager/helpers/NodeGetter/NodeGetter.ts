import { TCreateNodeGetter, TGetNodeById, TGetRandomNode } from './NodeGetter.types'

export const createNodeGetter: TCreateNodeGetter = ({ graph }) => {
    const getRandomNode: TGetRandomNode = () => {
        if (!graph || graph.length === 0) return { node: null }

        const randomNodeIndex = Math.round(Math.abs(Math.random() * graph.length - 1))

        return { node: graph[randomNodeIndex] }
    }

    const getNodeById: TGetNodeById = ({ id }) => {
        for (const node of graph) {
            if (node.id === id) return { node }
        }

        return { node: null }
    }

    return { getNodeById, getRandomNode }
}
