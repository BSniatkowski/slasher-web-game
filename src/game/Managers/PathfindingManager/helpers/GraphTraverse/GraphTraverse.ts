import {
    IGraphNodeCopy,
    TCheckIfHasSameNodeDownPreviousNodes,
    TGetPathFromDestinationNode,
    TGetTwoDimensionalDistanceBetweenPoints,
    TGraphCopy,
    TGraphTraverse,
    TSortFunc,
    TTraverseThroughNodes,
} from './GraphTraverse.types'

const checkIfHasSameNodeDownPreviousNodes: TCheckIfHasSameNodeDownPreviousNodes = (
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

const getTwoDimensionalDistanceBetweenPoints: TGetTwoDimensionalDistanceBetweenPoints = (
    pointA,
    pointB,
) => Math.sqrt(Math.pow(pointA.x - pointB.x, 2) + Math.pow(pointA.y - pointB.y, 2))

export const GraphTraverse: TGraphTraverse = ({
    startPosition,
    startNodeId,
    destinationPosition,
    destinationNodeId,
    graph,
}) => {
    const originalStartNode = graph.find(({ id }) => id === startNodeId)
    const originalDestinationNode = graph.find(({ id }) => id === destinationNodeId)

    if (!originalStartNode || !originalDestinationNode) return { path: [] }

    const startNode: IGraphNodeCopy = {
        ...originalStartNode,
        distance: getTwoDimensionalDistanceBetweenPoints(
            originalDestinationNode.center,
            originalStartNode.center,
        ),
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
                distance: getTwoDimensionalDistanceBetweenPoints(
                    destinationNode.center,
                    graphNode.center,
                ),
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

    const traverseThroughNodes: TTraverseThroughNodes = (node) => {
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

    const destinationNodeWithPath = traverseThroughNodes(startNode) as IGraphNodeCopy | undefined

    if (!destinationNodeWithPath) return { path: [] }

    const getPathFromDestinationNode: TGetPathFromDestinationNode = (nodeWithPath, path = []) => {
        if (nodeWithPath.previousNode) {
            path.push(nodeWithPath)
            return getPathFromDestinationNode(nodeWithPath.previousNode, path)
        }

        return path
    }

    const notOptimizedPath = getPathFromDestinationNode(destinationNodeWithPath)

    for (let nodeIndex = 0; nodeIndex < notOptimizedPath.length; nodeIndex++) {
        const shortageNode = checkIfHasSameNodeDownPreviousNodes(
            notOptimizedPath[nodeIndex],
            notOptimizedPath[nodeIndex].neighborNodes.filter(
                ({ id }) => id !== notOptimizedPath[nodeIndex].previousNode?.id,
            ),
        ) as IGraphNodeCopy

        if (shortageNode) {
            notOptimizedPath[nodeIndex].previousNode = shortageNode

            nodeIndex = notOptimizedPath.findIndex((node) => node.id === shortageNode.id)
        }
    }

    const path2D = getPathFromDestinationNode(destinationNodeWithPath)

    const path = []

    for (const node of path2D) {
        path.push({ ...node.center })
    }

    path[0] = destinationPosition
    path[path.length - 1] = { ...startPosition, z: 0 }
    path.reverse()

    return { path }
}
