import { useEffect, useRef } from 'react'

import { initializeGame } from '../../../gamesss/gamesss'

const ThreeContainer = () => {
    const rendererRef = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        if (rendererRef.current) {
            const game = initializeGame(rendererRef)

            return () => {
                game.dispose()
            }
        }
    }, [])

    return <div ref={rendererRef} />
}

export default ThreeContainer
