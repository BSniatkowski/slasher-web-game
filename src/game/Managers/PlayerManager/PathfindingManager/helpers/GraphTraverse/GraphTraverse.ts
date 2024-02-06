import { Vector2 } from 'three'

import { IGraphNodeCopy, TGraphCopy, TGraphTraverse, TSortFunc } from './GraphTraverse.types'

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

    // @ts-expect-error Traverse works perfect. Maybe just a function expression need some corrections to typesript check it correctly
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

    const path: Array<Vector2> = []

    const getPathFromDestinationNode = (destinationNodeWithPath: IGraphNodeCopy) => {
        if (destinationNodeWithPath.previousNode) {
            path.push(destinationNodeWithPath.center)
            getPathFromDestinationNode(destinationNodeWithPath.previousNode)
        }
    }

    getPathFromDestinationNode(destinationNodeWithPath)

    return { path }
}
