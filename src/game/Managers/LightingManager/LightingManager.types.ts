import { DirectionalLight, HemisphereLight } from 'three'

import { TResourceTracker } from '../../ResourceTracker/ResourceTracker.types'
import { IBoundries } from '../CollisionsManager/CollisionsManager.types'

export interface ILightingManagerState {
    boardBoundries: null | IBoundries
    directionalLight: null | DirectionalLight
    hemisphereLight: null | HemisphereLight
}

export type TUpdateBoardBoundries = (boardBoundries: IBoundries) => void

export type TCreateLightingManager = (props: { ResourceTracker: TResourceTracker }) => {
    init: () => void
    updateBoardBoundries: TUpdateBoardBoundries
    tick: () => void
    dispose: () => void
}

export type TLightingManager = ReturnType<TCreateLightingManager>
