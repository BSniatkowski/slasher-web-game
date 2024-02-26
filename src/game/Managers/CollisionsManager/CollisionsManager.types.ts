import { Vector3 } from 'three'

export enum ESubQuadtrees {
    nw = 'nw',
    ne = 'ne',
    se = 'se',
    sw = 'sw',
}

export interface IBoundries {
    x: number
    y: number
    w: number
    h: number
}

export interface ICollisionItem {
    id: string
    positionGetter: () => Vector3 | undefined
}

export interface IQuadtree {
    boundries: IBoundries
    capacity: number
    items: Array<ICollisionItem>
    subQuadtrees: null | Map<ESubQuadtrees, IQuadtree>
}

export type TCreateQuadtree = (props: { boundries: IBoundries; capacity: number }) => IQuadtree

export type TAddItemToQuadtree = (item: ICollisionItem, quadtree: IQuadtree) => void

export interface ICollisionsManagerState {
    quadtree: null | IQuadtree
    boardBoundries: null | IBoundries
    capacity: number
    items: Array<ICollisionItem>
}

export type TIsInsideBoudingBox = (props: {
    boundries: IBoundries
    item: ICollisionItem
}) => boolean

export interface IRange {
    x: number
    y: number
    r: number
}

export type TIsBoundryInRange = (range: IRange, boundry: IBoundries) => boolean

export type TFindItemsInRange = (
    range: IRange,
    quadtree?: null | IQuadtree,
    items?: Array<ICollisionItem>,
) => Array<ICollisionItem>

export type TUpdateBoardBoundries = (boundries: IBoundries) => void

export type TAddCollisionsItem = (item: ICollisionItem) => void

export type TRemoveCollisionsItem = (id: string) => void

export type TCreateCollisionsManager = () => {
    updateBoardBoundries: TUpdateBoardBoundries
    tick: () => void
    addCollisionsItem: TAddCollisionsItem
    removeCollisionsItem: TRemoveCollisionsItem
    findItemsInRange: TFindItemsInRange
}

export type TCollisionsManager = ReturnType<TCreateCollisionsManager>
