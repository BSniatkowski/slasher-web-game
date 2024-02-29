import styled from 'styled-components'

export const ThreeContainerWrapper = styled.div`
    position: relative;
    height: 100%;
    width: 100%;
    overflow: hidden;

    & > canvas {
        overflow: hidden;
    }
`

export const GameInterfaceContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    height: fit-content;
    width: fit-content;
`

export const DebugActionButtonsContainer = styled.div`
    display: flex;
    gap: 1rem;
`
