import { IGraphNodeCopy, TGraphCopy, TGraphTraverse, TSortFunc } from './GraphTraverse.types'

// @ts-expect-error Traverse works. Maybe just a function expression need some corrections for typescript to check it correctly
const checkIfHasSameNodeDownPreviousNodes = (
    node: IGraphNodeCopy,
    directNeighborNodes: Array<IGraphNodeCopy> = [],
) => {
    for (const neighborNode of directNeighborNodes) {
        if (node.id === neighborNode.id) {
            return node
        }
    }

    if (node.previousNode)
        return checkIfHasSameNodeDownPreviousNodes(node.previousNode, directNeighborNodes)

    return false
}

export const GraphTraverse: TGraphTraverse = ({ startNodeId, destinationNodeId, graph }) => {
    const originalStartNode = graph.find(({ id }) => id === startNodeId)
    const originalDestinationNode = graph.find(({ id }) => id === destinationNodeId)

    if (!originalStartNode || !originalDestinationNode) return { path: [] }

    const startNode: IGraphNodeCopy = {
        ...originalStartNode,
        distance: originalDestinationNode.center.distanceToSquared(originalStartNode.center),
        neighborNodes: [],
        stepped: true,
    }

    const destinationNode: IGraphNodeCopy = {
        ...originalDestinationNode,
        distance: 0,
        neighborNodes: [],
    }

    const graphCopy: TGraphCopy = [startNode, destinationNode]

    for (const graphNode of graph) {
        if (graphNode.id !== startNodeId && graphNode.id !== destinationNodeId)
            graphCopy.push({
                ...graphNode,
                distance: destinationNode.center.distanceToSquared(graphNode.center),
                neighborNodes: [],
            })
    }

    for (const graphNode of graphCopy) {
        for (const graphNodeId of graphNode.neighborNodesIds) {
            const neighborNode = graphCopy.find(({ id }) => id === graphNodeId)

            if (neighborNode) graphNode.neighborNodes.push(neighborNode)
        }
    }

    const sortFunc: TSortFunc = ({ distance: dA }, { distance: dB }) => dA - dB

    // @ts-expect-error Traverse works. Maybe just a function expression need some corrections for typescript to check it correctly
    const traverseThroughNodes = (node: IGraphNodeCopy) => {
        if (node.distance === 0) return node

        if (node.neighborNodes.filter(({ stepped }) => !stepped).length === 0 && node.previousNode)
            return traverseThroughNodes(node.previousNode)

        node.neighborNodes.sort(sortFunc)

        for (const neighborNode of node.neighborNodes) {
            if (neighborNode.stepped) continue

            neighborNode.stepped = true
            neighborNode.previousNode = node

            return traverseThroughNodes(neighborNode)
        }
    }

    const destinationNodeWithPath = traverseThroughNodes(startNode)

    if (!destinationNodeWithPath) return { path: [] }

    const getPathFromDestinationNode = (
        nodeWithPath: IGraphNodeCopy,
        path: Array<IGraphNodeCopy> = [],
    ) => {
        if (nodeWithPath.previousNode) {
            path.push(nodeWithPath)
            return getPathFromDestinationNode(nodeWithPath.previousNode, path)
        }

        return path
    }

    const notOptimizedPath = getPathFromDestinationNode(destinationNodeWithPath)

    for (const node of notOptimizedPath) {
        const shortageNode = checkIfHasSameNodeDownPreviousNodes(
            node,
            node.neighborNodes.filter(({ id }) => id !== node.previousNode.id),
        )

        if (shortageNode) node.previousNode = shortageNode
    }

    const path = getPathFromDestinationNode(destinationNodeWithPath).map(({ center }) => center)

    return {
        path,
    }
}
