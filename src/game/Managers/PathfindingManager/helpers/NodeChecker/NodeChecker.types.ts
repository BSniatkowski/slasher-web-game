import { Vector3 } from 'three'

import { TGraph } from '../GraphHelper/GraphHelper.types'

export type TFindNodeByPosition = ({ position }: { position: Vector3 }) => { nodeId: string | null }

export type TCreateNodeChecker = ({ graph }: { graph: TGraph }) => {
    findNodeByPosition: TFindNodeByPosition
}

export type TNodeChecker = ReturnType<TCreateNodeChecker>
