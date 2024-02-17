import { BufferAttribute, BufferGeometry, Mesh, MeshBasicMaterial } from 'three'

import { TCreateBoardModel } from './createBoardModel.type'

type TCreateSquare = (position: { x: number; y: number }) => Array<number>

const createSquare: TCreateSquare = (position) => {
    const { x, y } = position

    const upperTriangle = [
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

    const bottomTriangle = [
        x - 0.5,
        y - 0.5,
        0, // v0
        x + 0.5,
        y - 0.5,
        0, // v1
        x + 0.5,
        y + 0.5,
        0, // v2
    ]

    return [...upperTriangle, ...bottomTriangle]
}

export const createBoardModel: TCreateBoardModel = ({ board }) => {
    const squares = []

    for (let xIndex = 0; xIndex < board.length; xIndex++) {
        for (let yIndex = 0; yIndex < board[0].length; yIndex++) {
            if (board[xIndex][yIndex]) squares.push(...createSquare({ x: xIndex, y: yIndex }))
        }
    }

    const vertices = new Float32Array(squares)

    const geometry = new BufferGeometry()
    geometry.setAttribute('position', new BufferAttribute(vertices, 3))

    const material = new MeshBasicMaterial({ color: 'gray' })

    return new Mesh(geometry, material)
}
