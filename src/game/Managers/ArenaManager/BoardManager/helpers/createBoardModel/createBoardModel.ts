import { BufferAttribute, BufferGeometry, Mesh, MeshBasicMaterial } from 'three'

import { EBoardAreaType } from '../createBoardFeatures/createBoardFeatures.type'
import { TCreateBoardModel } from './createBoardModel.type'

type TCreateGeometry = (position: { x: number; y: number }) => Array<number>

const createSquare: TCreateGeometry = (position) => {
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

const createTopLeftNarrowedge: TCreateGeometry = (position) => {
    const { x, y } = position

    const upperTriangle = [
        x + 0.5,
        y + 0.5,
        0, // v3
        x - 0.5,
        y + 0.5,
        0, // v4
        x - 0.15,
        y + 0.35,
        0, // v5
    ]

    const middleTriangle = [
        x - 0.15,
        y + 0.35,
        0, // v3
        x - 0.5,
        y + 0.5,
        0, // v4
        x - 0.35,
        y + 0.15,
        0, // v5
    ]

    const bottomTriangle = [
        x - 0.35,
        y + 0.15,
        0, // v3
        x - 0.5,
        y + 0.5,
        0, // v4
        x - 0.5,
        y - 0.5,
        0, // v5
    ]

    return [...upperTriangle, ...middleTriangle, ...bottomTriangle]
}

const createTopRightNarrowedge: TCreateGeometry = (position) => {
    const { x, y } = position

    const upperTriangle = [
        x + 0.5,
        y + 0.5,
        0, // v4
        x - 0.5,
        y + 0.5,
        0, // v3
        x + 0.15,
        y + 0.35,
        0, // v5
    ]

    const middleTriangle = [
        x + 0.5,
        y + 0.5,
        0, // v3
        x + 0.15,
        y + 0.35,
        0, // v4
        x + 0.35,
        y + 0.15,
        0, // v5
    ]

    const bottomTriangle = [
        x + 0.5,
        y + 0.5,
        0, // v3
        x + 0.35,
        y + 0.15,
        0, // v4
        x + 0.5,
        y - 0.5,
        0, // v5
    ]

    return [...upperTriangle, ...middleTriangle, ...bottomTriangle]
}

const createBottomRightNarrowedge: TCreateGeometry = (position) => {
    const { x, y } = position

    const upperTriangle = [
        x + 0.5,
        y - 0.5,
        0, // v3,
        x + 0.5,
        y + 0.5,
        0, // v4
        x + 0.35,
        y - 0.15,
        0, // v5
    ]

    const middleTriangle = [
        x + 0.5,
        y - 0.5,
        0, // v3,
        x + 0.35,
        y - 0.15,
        0, // v5
        x + 0.15,
        y - 0.35,
        0, // v5
    ]

    const bottomTriangle = [
        x + 0.5,
        y - 0.5,
        0, // v4
        x + 0.15,
        y - 0.35,
        0, // v5
        x - 0.5,
        y - 0.5,
        0, // v5
    ]

    return [...upperTriangle, ...middleTriangle, ...bottomTriangle]
}

const createBottomLeftNarrowedge: TCreateGeometry = (position) => {
    const { x, y } = position

    const upperTriangle = [
        x - 0.5,
        y + 0.5,
        0, // v3,
        x - 0.5,
        y - 0.5,
        0, // v4
        x - 0.35,
        y - 0.15,
        0, // v5
    ]

    const middleTriangle = [
        x - 0.5,
        y - 0.5,
        0, // v3,
        x - 0.15,
        y - 0.35,
        0, // v5
        x - 0.35,
        y - 0.15,
        0, // v5
    ]

    const bottomTriangle = [
        x - 0.5,
        y - 0.5,
        0, // v3,
        x + 0.5,
        y - 0.5,
        0, // v3,
        x - 0.15,
        y - 0.35,
        0, // v5
    ]

    return [...upperTriangle, ...middleTriangle, ...bottomTriangle]
}

export const createBoardModel: TCreateBoardModel = ({ board }) => {
    const areas = []

    for (const area of board) {
        switch (area.type) {
            case EBoardAreaType.square: {
                areas.push(...createSquare(area))
                break
            }
            case EBoardAreaType.topLeftNarrowedge: {
                areas.push(...createTopLeftNarrowedge(area))
                break
            }
            case EBoardAreaType.topRightNarrowedge: {
                areas.push(...createTopRightNarrowedge(area))
                break
            }
            case EBoardAreaType.bottomRightNarrowedge: {
                areas.push(...createBottomRightNarrowedge(area))
                break
            }
            case EBoardAreaType.bottomLeftNarrowedge: {
                areas.push(...createBottomLeftNarrowedge(area))
                break
            }
        }
    }

    const vertices = new Float32Array(areas)

    const geometry = new BufferGeometry()
    geometry.setAttribute('position', new BufferAttribute(vertices, 3))

    const material = new MeshBasicMaterial({ color: 'gray' })

    return new Mesh(geometry, material)
}
