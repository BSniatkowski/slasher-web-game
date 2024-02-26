import { TCreateArenaManager } from './ArenaManager.types'
import { createBoardManager } from './BoardManager/BoardManager'
import { createPlayerManager } from './PlayerManager/PlayerManager'
import { createPuppeteerManager } from './PuppeteerManager/PuppeteerManager'

export const createArenaManager: TCreateArenaManager = ({
    ref,
    Camera,
    ResourceTracker,
    PathfindingManager,
    AnimationManager,
    CollisionsManager,
}) => {
    const BoardManager = createBoardManager({ ResourceTracker })

    const PlayerManager = createPlayerManager({
        ref,
        Camera,
        ResourceTracker,
        PathfindingManager,
        AnimationManager,
        CollisionsManager,
    })

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
        PlayerManager.init()
        PuppeteerManager.init()
    }

    const tick = async () => {
        await PlayerManager.tick()
        await PuppeteerManager.tick()
    }

    const dispose = () => {
        PlayerManager.dispose()
    }

    return { generateBoard, populate, tick, dispose }
}
