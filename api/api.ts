import {
    TFetchExample,
     TPostRequestExample,
} from './api.types'

const fakeServerResponseDelay = async (minDelay?: number) =>
    new Promise((res) => {
        setTimeout(res, minDelay ?? 100 + Math.random() * 500)
    })

export const fetchExample: TFetchExample = async () => {
    await fakeServerResponseDelay()

    return {}
}

export const postRequestExample: TPostRequestExample = async () => {
    await fakeServerResponseDelay(1000)

    return { status: 200 }
}

