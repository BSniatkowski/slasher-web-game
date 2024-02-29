import { useCallback, useEffect, useMemo, useRef, useState } from 'react'

import { createGame } from '../../../game/game'
import { IGeneralSharedState, TGame } from '../../../game/game.types'
import { useResize } from '../../../hooks/useResize/useResize'
import Button from '../../atoms/Button/Button'
import * as S from './ThreeContainer.style'

const ThreeContainer = () => {
    const rendererRef = useRef<HTMLDivElement | null>(null)

    const [Game, setGame] = useState<TGame | null>(null)

    const [sharedGameState, setSharedGameState] = useState<null | IGeneralSharedState>(null)

    const onResize = useCallback(
        (windowSizes: { width: number; height: number }) => {
            if (Game) Game.onWindowResize(windowSizes)
        },
        [Game],
    )

    useResize(onResize)

    const togglePause = useCallback(() => {
        if (Game) Game.togglePause()
    }, [Game])

    const isPaused = useMemo(() => sharedGameState?.isPaused, [sharedGameState])

    useEffect(() => {
        if (rendererRef.current) {
            const game = createGame(rendererRef)

            game.setOnGeneralStateChangeCallback(setSharedGameState)

            setGame(game)
            return () => {
                game.dispose()
            }
        }
    }, [])

    return (
        <S.ThreeContainerWrapper>
            <div ref={rendererRef} />
            <S.GameInterfaceContainer>
                <S.DebugActionButtonsContainer>
                    <Button
                        label={isPaused ? 'Play' : 'Pause'}
                        onClick={togglePause}
                        iconVariant={isPaused ? 'play' : 'pause'}
                    />
                </S.DebugActionButtonsContainer>
            </S.GameInterfaceContainer>
        </S.ThreeContainerWrapper>
    )
}

export default ThreeContainer
