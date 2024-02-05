import { Vector2 } from 'three'

import { TGraph } from '../GraphHelper/GraphHelper.types'

export type TFindNodeByPosition = ({ position }: { position: Vector2 }) => { nodeId: string | null }

export type TCreateNodeChecker = ({ graph }: { graph: TGraph }) => {
    findNodeByPosition: TFindNodeByPosition
}

export type TNodeChecker = ReturnType<TCreateNodeChecker>
