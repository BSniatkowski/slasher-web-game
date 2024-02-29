import { useCallback, useEffect, useState } from 'react'

export const useResize = (callback?: (props: { width: number; height: number }) => void) => {
    const [actualWindowSizes, setActualWindowSizes] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    })

    const onResize = useCallback(() => {
        setActualWindowSizes({
            width: window.innerWidth,
            height: window.innerHeight,
        })

        if (typeof callback === 'function')
            callback({
                width: window.innerWidth,
                height: window.innerHeight,
            })
    }, [callback])

    useEffect(() => {
        window.addEventListener('resize', onResize)

        return () => {
            window.removeEventListener('resize', onResize)
        }
    }, [onResize])

    return actualWindowSizes
}
