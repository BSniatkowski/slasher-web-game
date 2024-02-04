import { TCreateNodeChecker, TFindNodeByPosition } from './NodeChecker.types'

export const createNodeChecker: TCreateNodeChecker = ({ graph }) => {
    const findNodeByPosition: TFindNodeByPosition = ({ position }) => {
        for (const graphNode of graph) {
            const { id, polygons } = graphNode

            const isBetween

            for (const polygon of polygons) {
                
            }

            return { nodeId: id }
        }

        return { nodeId: null }
    }

    return { findNodeByPosition }
}
