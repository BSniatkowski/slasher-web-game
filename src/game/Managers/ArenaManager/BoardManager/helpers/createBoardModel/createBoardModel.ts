import { BufferAttribute, BufferGeometry, Mesh, MeshBasicMaterial } from 'three'

import { TCreateBoardModel } from './createBoardModel.type'

type TCreateSquare = (position: { x: number; y: number }) => Array<number>

const createSquare: TCreateSquare = (position) => {
    const { x, y } = position

    return [
        x - 1.0,
        y - 1.0,
        0, // v0
        x + 1.0,
        y - 1.0,
        0, // v1
        x + 1.0,
        y + 1.0,
        0, // v2

        x + 1.0,
        y + 1.0,
        0, // v3
        x - 1.0,
        y + 1.0,
        0, // v4
        x - 1.0,
        y - 1.0,
        0, // v5
    ]
}

export const createBoardModel: TCreateBoardModel = ({ board }) => {
    const boardSquaresArray = board.map((x, indexX) =>
        x.map((y, indexY) => y && createSquare({ x: indexX, y: indexY })),
    )

    const squares = boardSquaresArray
        .reduce((acc, el) => acc.concat(el), [])
        .filter((el) => Array.isArray(el)) as Array<Array<number>>

    const flatSquaresArray = squares.reduce((acc, el) => acc.concat(el), [])

    const vertices = new Float32Array(flatSquaresArray)

    const geometry = new BufferGeometry()
    geometry.setAttribute('position', new BufferAttribute(vertices, 3))

    const material = new MeshBasicMaterial({ color: 'gray' })

    return new Mesh(geometry, material)
}
