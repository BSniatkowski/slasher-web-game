import { BufferAttribute, BufferGeometry, Mesh, MeshLambertMaterial } from 'three'

import { IPoint } from '../../../../PathfindingManager/helpers/GraphTraverse/GraphTraverse.types'
import { EBoardAreaType } from '../createBoardFeatures/createBoardFeatures.type'
import { TCreateBoardModel } from './createBoardModel.type'

type TCreateGeometry = (
    position: { x: number; y: number },
    rotation?: 90 | 180 | 270,
) => Array<number>

type TRotatePoints = (
    x: number,
    y: number,
    allPoints: Array<number>,
    rotation: 90 | 180 | 270,
) => Array<number>

const createSquare: TCreateGeometry = (position) => {
    const { x, y } = position

    const upperTriangle = [x + 0.5, y + 0.5, 0, x - 0.5, y + 0.5, 0, x - 0.5, y - 0.5, 0]

    const bottomTriangle = [x - 0.5, y - 0.5, 0, x + 0.5, y - 0.5, 0, x + 0.5, y + 0.5, 0]

    return [...upperTriangle, ...bottomTriangle]
}

const rotatePoints: TRotatePoints = (x, y, allPoints, rotation) => {
    const substractedPoints = allPoints.map((point, index) => {
        if (index % 3 === 0) return point - x
        if (index % 3 === 1) return point - y
        if (index % 3 === 2) return point
    })

    const rotatedPoints: Array<number> = []

    for (let pointIndex = 0; pointIndex < substractedPoints.length; pointIndex += 3) {
        const points = substractedPoints.slice(pointIndex, pointIndex + 3)

        const [subX, subY] = points

        if (subX === undefined || subY === undefined) return allPoints

        switch (rotation) {
            case 90: {
                rotatedPoints.push(-subY + x, subX + y, 0)
                break
            }
            case 180: {
                rotatedPoints.push(-subX + x, -subY + y, 0)
                break
            }
            case 270: {
                rotatedPoints.push(subY + x, -subX + y, 0)
                break
            }
        }
    }

    return rotatedPoints
}

const createNarrowedge: TCreateGeometry = (position, rotation) => {
    const { x, y } = position

    const upperTriangle = [x + 0.5, y + 0.5, 0, x - 0.5, y + 0.5, 0, x - 0.15, y + 0.35, 0]

    const middleTriangle = [x - 0.15, y + 0.35, 0, x - 0.5, y + 0.5, 0, x - 0.35, y + 0.15, 0]

    const bottomTriangle = [x - 0.35, y + 0.15, 0, x - 0.5, y + 0.5, 0, x - 0.5, y - 0.5, 0]

    if (!rotation) return [...upperTriangle, ...middleTriangle, ...bottomTriangle]

    return rotatePoints(x, y, [...upperTriangle, ...middleTriangle, ...bottomTriangle], rotation)
}

const createSolidSquare: TCreateGeometry = (position, rotation) => {
    const { x, y } = position

    const upperTriangle = [x + 0.25, y + 0.5, 0, x - 0.5, y + 0.5, 0, x - 0.5, y - 0.5, 0]

    const bottomTriangle = [x - 0.5, y - 0.5, 0, x + 0.25, y - 0.5, 0, x + 0.25, y + 0.5, 0]

    const rightTopTriangle = [x + 0.25, y + 0.5, 0, x + 0.25, y - 0.5, 0, x + 0.5, y + 0.25, 0]

    const rightBottomTriangle = [x + 0.5, y + 0.25, 0, x + 0.25, y - 0.5, 0, x + 0.5, y - 0.25, 0]

    if (!rotation)
        return [...upperTriangle, ...bottomTriangle, ...rightTopTriangle, ...rightBottomTriangle]

    return rotatePoints(
        x,
        y,
        [...upperTriangle, ...bottomTriangle, ...rightTopTriangle, ...rightBottomTriangle],
        rotation,
    )
}

const createSmoothSquare: TCreateGeometry = (position, rotation) => {
    const { x, y } = position

    const upperTriangle = [x + 0.5, y - 0.5, 0, x - 0.35, y - 0.15, 0, x - 0.15, y - 0.35, 0]

    const middleTriangle = [x + 0.5, y - 0.5, 0, x - 0.5, y + 0.5, 0, x - 0.35, y - 0.15, 0]

    const bottomTriangle = [x - 0.5, y + 0.5, 0, x + 0.5, y - 0.5, 0, x + 0.5, y + 0.5, 0]

    if (!rotation) return [...upperTriangle, ...middleTriangle, ...bottomTriangle]

    return rotatePoints(x, y, [...upperTriangle, ...middleTriangle, ...bottomTriangle], rotation)
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
                areas.push(...createNarrowedge(area))
                break
            }
            case EBoardAreaType.topRightNarrowedge: {
                areas.push(...createNarrowedge(area, 270))
                break
            }
            case EBoardAreaType.bottomRightNarrowedge: {
                areas.push(...createNarrowedge(area, 180))
                break
            }
            case EBoardAreaType.bottomLeftNarrowedge: {
                areas.push(...createNarrowedge(area, 90))
                break
            }
            case EBoardAreaType.solidLeftSquare: {
                areas.push(...createSolidSquare(area))
                break
            }
            case EBoardAreaType.solidTopSquare: {
                areas.push(...createSolidSquare(area, 270))
                break
            }
            case EBoardAreaType.solidRightSquare: {
                areas.push(...createSolidSquare(area, 180))
                break
            }
            case EBoardAreaType.solidBottomSquare: {
                areas.push(...createSolidSquare(area, 90))
                break
            }
            case EBoardAreaType.smoothBottomLeftSquare: {
                areas.push(...createSmoothSquare(area))
                break
            }
            case EBoardAreaType.smoothTopLeftSquare: {
                areas.push(...createSmoothSquare(area, 270))
                break
            }
            case EBoardAreaType.smoothTopRightSquare: {
                areas.push(...createSmoothSquare(area, 180))
                break
            }
            case EBoardAreaType.smoothBottomRightSquare: {
                areas.push(...createSmoothSquare(area, 90))
                break
            }
        }
    }

    const uniquePoints: Array<(IPoint & { z: number; index: number }) | number> = []

    let index = 0

    for (let areasPointIndex = 0; areasPointIndex < areas.length; areasPointIndex += 3) {
        const point = {
            index,
            x: areas[areasPointIndex],
            y: areas[areasPointIndex + 1],
            z: areas[areasPointIndex + 2],
        }

        const foundPoint = uniquePoints.find(
            (uniquePoint) =>
                typeof uniquePoint === 'object' &&
                uniquePoint.x === point.x &&
                uniquePoint.y === point.y &&
                uniquePoint.z === point.z,
        )

        if (foundPoint && typeof foundPoint === 'object') {
            uniquePoints.push(foundPoint.index)
            continue
        }

        index++
        uniquePoints.push(point)
    }

    const vertices: Array<number> = []
    const indices = []

    for (const uniquePoint of uniquePoints) {
        if (typeof uniquePoint === 'object') {
            indices.push(uniquePoint.index)
            vertices.push(uniquePoint.x, uniquePoint.y, uniquePoint.z)
            continue
        }

        indices.push(uniquePoint)
    }

    const geometry = new BufferGeometry()

    geometry.setIndex(indices)
    geometry.setAttribute('position', new BufferAttribute(new Float32Array(vertices), 3))
    geometry.computeVertexNormals()

    const material = new MeshLambertMaterial({ color: 'grey' })

    const boardMesh = new Mesh(geometry, material)
    boardMesh.castShadow = false
    boardMesh.receiveShadow = true
    boardMesh.matrixAutoUpdate = false
    boardMesh.updateMatrix()

    return boardMesh
}
