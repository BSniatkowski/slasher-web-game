import { Scene } from 'three'

import { TResourceTracker } from '../../ResourceTracker/ResourceTracker.types'
import { TBoardManager } from './BoardManager/BoardManager.types'

export interface IArenaManagerState {
    BoardManager: TBoardManager
}

export type TCreateArenaManager = ({
    Scene,
    ResourceTracker,
}: {
    Scene: Scene
    ResourceTracker: TResourceTracker
}) => {
    generateBoard: () => void
}

export type TArenaManager = ReturnType<TCreateArenaManager>
