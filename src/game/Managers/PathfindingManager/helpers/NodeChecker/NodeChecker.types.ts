import { Vector3 } from 'three'

import { TGraph } from '../GraphHelper/GraphHelper.types'

export type TFindNodeIdByPosition = ({ position }: { position: Vector3 }) => string | null

export type TCreateNodeChecker = ({ graph }: { graph: TGraph }) => {
    findNodeIdByPosition: TFindNodeIdByPosition
}

export type TNodeChecker = ReturnType<TCreateNodeChecker>
