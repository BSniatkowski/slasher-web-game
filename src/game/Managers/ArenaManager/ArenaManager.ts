import { TCreateArenaManager } from './ArenaManager.types'
import { createBoardManager } from './BoardManager/BoardManager'

export const createArenaManager: TCreateArenaManager = ({ Scene, ResourceTracker }) => {
    const BoardManager = createBoardManager({ Scene, ResourceTracker })

    const generateBoard = () => {
        BoardManager.generateBoard()
    }

    const populateWithEnemies = () => {}

    return { generateBoard }
}
