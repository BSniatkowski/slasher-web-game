import { GraphTraverse } from './GraphTraverse'
import { IWebWorkerState, TWebWorkerOnReceiveMessageEvent } from './GraphTraverse.types'

const state: IWebWorkerState = {
    graph: null,
}

onmessage = (event: TWebWorkerOnReceiveMessageEvent) => {
    switch (event.data.type) {
        case 'init': {
            state.graph = event.data.graph
            break
        }
        case 'calculate': {
            if (!state.graph) {
                postMessage({
                    id: event.data.id,
                    path: [event.data.startPosition, event.data.destinationPosition],
                })
                break
            }

            const { path } = GraphTraverse({ graph: state.graph, ...event.data })

            postMessage({ id: event.data.id, path })
            break
        }
        default:
            console.warn(
                `There is no specified message type! Passed data: ${JSON.stringify(event.data)}`,
            )
    }
}
