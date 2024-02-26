export interface IInputsManagerState {
    ref: HTMLCanvasElement
    keybindings: Record<string, (event: Event) => void>
    registeredKeybindings: Record<string, (event: Event) => void>
}

export type TRegisterEvent = (
    state: IInputsManagerState,
    keybinding: { eventType: string; callback: (event: Event) => void },
) => void

export type TDetachEvent = (
    state: IInputsManagerState,
    keybinding: { eventType: string; callback: (event: Event) => void },
) => void

export type TRegisterControls = (state: IInputsManagerState) => void

export type TDisposeControls = (state: IInputsManagerState) => void

export type TCreateInputsManager = ({
    ref,
    keybindings,
}: {
    ref: HTMLCanvasElement
    keybindings: Record<string, (event: Event) => void>
}) => {
    init: () => void
    disposeControls: () => void
}

export type TInputsManager = ReturnType<TCreateInputsManager>
