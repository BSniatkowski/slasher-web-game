import { useEffect, useRef } from 'react'

import { initializeGame } from '../../../Game/Game'

const ThreeContainer = () => {
    const rendererRef = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        if (rendererRef.current) {
            const Game = initializeGame(rendererRef)

            return () => {
                Game.dispose()
            }
        }
    }, [])

    return <div ref={rendererRef} />
}

export default ThreeContainer
