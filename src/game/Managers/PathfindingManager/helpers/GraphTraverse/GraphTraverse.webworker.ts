import { GraphTraverse } from './GraphTraverse'

onmessage = (event) => {
    const { path } = GraphTraverse(event.data)

    postMessage({ id: event.data.id, path })
}
