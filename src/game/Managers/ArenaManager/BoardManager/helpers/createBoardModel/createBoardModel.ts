import { BufferAttribute, BufferGeometry, Mesh, MeshBasicMaterial } from 'three'

import { TCreateBoardModel } from './createBoardModel.type'

type TCreateSquare = (position: { x: number; y: number }) => Array<number>

const createSquare: TCreateSquare = (position) => {
    const { x, y } = position

    return [
        x - 0.5,
        y - 0.5,
        0, // v0
        x + 0.5,
        y - 0.5,
        0, // v1
        x + 0.5,
        y + 0.5,
        0, // v2
        x + 0.5,
        y + 0.5,
        0, // v3
        x - 0.5,
        y + 0.5,
        0, // v4
        x - 0.5,
        y - 0.5,
        0, // v5
    ]
}

export const createBoardModel: TCreateBoardModel = ({ board }) => {
    const boardSquaresArray = board.map((x, indexX) =>
        x.map((y, indexY) => y && createSquare({ x: indexX, y: indexY })),
    )

    const squares = []

    for (const boardSquareX of boardSquaresArray) {
        for (const boardSquareY of boardSquareX) {
            if (boardSquareY) squares.push(...boardSquareY)
        }
    }

    const vertices = new Float32Array(squares)

    const geometry = new BufferGeometry()
    geometry.setAttribute('position', new BufferAttribute(vertices, 3))

    const material = new MeshBasicMaterial({ color: 'gray' })

    return new Mesh(geometry, material)
}
