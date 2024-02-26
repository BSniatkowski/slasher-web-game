import { TCreateArenaManager } from './ArenaManager.types'
import { createBoardManager } from './BoardManager/BoardManager'
import { createPuppeteerManager } from './PuppeteerManager/PuppeteerManager'

export const createArenaManager: TCreateArenaManager = ({
    ResourceTracker,
    PathfindingManager,
    AnimationManager,
    CollisionsManager,
}) => {
    const BoardManager = createBoardManager({ ResourceTracker })

    const PuppeteerManager = createPuppeteerManager({
        ResourceTracker,
        PathfindingManager,
        AnimationManager,
        CollisionsManager,
    })

    const generateBoard = () => {
        const boundries = BoardManager.generateBoard()

        CollisionsManager.updateBoardBoundries(boundries)
    }

    const populate = () => {
        PuppeteerManager.init()
    }

    return { generateBoard, populate, tick: PuppeteerManager.tick }
}
