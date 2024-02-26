import {
    IInputsManagerState,
    TCreateInputsManager,
    TDetachEvent,
    TRegisterControls,
    TRegisterEvent,
} from './InputsManager.types'

const registerEvent: TRegisterEvent = (state, { eventType, callback }) => {
    const callbackWithPrevent = (event: Event) => {
        event.preventDefault()

        callback(event)
    }

    state.ref.addEventListener(eventType, callbackWithPrevent)
    state.registeredKeybindings = { [eventType]: callbackWithPrevent }
}

const detachEvent: TDetachEvent = (state, { eventType, callback }) => {
    state.ref.removeEventListener(eventType, callback)
}

const registerControls: TRegisterControls = (state) => {
    for (const keybinding in state.keybindings) {
        registerEvent(state, { eventType: keybinding, callback: state.keybindings[keybinding] })
    }
}

const disposeControls: TRegisterControls = (state) => {
    for (const keybinding in state.registeredKeybindings) {
        detachEvent(state, { eventType: keybinding, callback: state.keybindings[keybinding] })
    }
}

export const createInputsManager: TCreateInputsManager = ({ ref, keybindings }) => {
    const state: IInputsManagerState = {
        ref,
        keybindings,
        registeredKeybindings: {},
    }

    const init = () => {
        registerControls(state)
    }

    return {
        init,
        disposeControls: () => disposeControls(state),
    }
}
