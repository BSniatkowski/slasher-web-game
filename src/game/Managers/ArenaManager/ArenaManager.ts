import { TCreateArenaManager } from './ArenaManager.types'
import { createBoardManager } from './BoardManager/BoardManager'
import { createPuppeteerManager } from './PuppeteerManager/PuppeteerManager'

export const createArenaManager: TCreateArenaManager = ({
    ResourceTracker,
    PathfindingManager,
    AnimationManager,
}) => {
    const BoardManager = createBoardManager({ ResourceTracker })
    const PuppeteerManager = createPuppeteerManager({
        ResourceTracker,
        PathfindingManager,
        AnimationManager,
    })

    const generateBoard = () => {
        BoardManager.generateBoard()
    }

    const populate = () => {
        PuppeteerManager.init()
    }

    return { generateBoard, populate, tick: PuppeteerManager.tick }
}
