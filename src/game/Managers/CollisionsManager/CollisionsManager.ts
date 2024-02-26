import {
    ESubQuadtrees,
    ICollisionsManagerState,
    IQuadtree,
    TAddCollisionsItem,
    TAddItemToQuadtree,
    TCreateCollisionsManager,
    TCreateQuadtree,
    TFindItemsInRange,
    TIsBoundryInRange,
    TIsInsideBoudingBox,
    TRemoveCollisionsItem,
    TUpdateBoardBoundries,
} from './CollisionsManager.types'

const isInsideBoudingBox: TIsInsideBoudingBox = ({ boundries, item }) => {
    const position = item.positionGetter()

    if (!position) return false

    const { x, y, w, h } = boundries
    const { x: pX, y: pY } = position

    return pX > x && pX < x + w && pY > y && pY < y + h
}

const isBoundryInRange: TIsBoundryInRange = (range, boundries) => {
    const { x: rX, y: rY, r } = range
    const { x, y, w, h } = boundries

    const closestX = Math.max(x, Math.min(rX, x + w))
    const closestY = Math.max(y, Math.min(rY, y + h))

    const distance = Math.sqrt((rX - closestX) ** 2 + (rY - closestY) ** 2)

    return distance <= r
}

export const createCollisionsManager: TCreateCollisionsManager = () => {
    const state: ICollisionsManagerState = {
        quadtree: null,
        boardBoundries: null,
        capacity: 4,
        items: [],
    }

    const createQuadtree: TCreateQuadtree = ({ boundries, capacity }) => {
        return { boundries, capacity, items: [], subQuadtrees: null } satisfies IQuadtree
    }

    const addItemToQuadtree: TAddItemToQuadtree = (item, quadtree) => {
        if (
            (!quadtree.subQuadtrees && quadtree.items.length < state.capacity) ||
            quadtree.boundries.w * quadtree.boundries.h <= 4
        ) {
            quadtree.items.push(item)
            return
        }

        if (!quadtree.subQuadtrees) {
            const subQuadtrees = new Map<ESubQuadtrees, IQuadtree>()

            const { x, y, w, h } = quadtree.boundries

            const nw = createQuadtree({
                boundries: { x, y, w: w / 2, h: h / 2 },
                capacity: quadtree.capacity,
            })

            subQuadtrees.set(ESubQuadtrees.nw, nw)

            const ne = createQuadtree({
                boundries: { x: x + w / 2, y, w: w / 2, h: h / 2 },
                capacity: quadtree.capacity,
            })

            subQuadtrees.set(ESubQuadtrees.ne, ne)

            const sw = createQuadtree({
                boundries: { x: x + w / 2, y: y + h / 2, w: w / 2, h: h / 2 },
                capacity: quadtree.capacity,
            })

            subQuadtrees.set(ESubQuadtrees.sw, sw)

            const se = createQuadtree({
                boundries: { x, y: y + h / 2, w: w / 2, h: h / 2 },
                capacity: quadtree.capacity,
            })

            subQuadtrees.set(ESubQuadtrees.se, se)

            quadtree.subQuadtrees = subQuadtrees

            for (const item of quadtree.items) {
                if (isInsideBoudingBox({ boundries: nw.boundries, item })) {
                    addItemToQuadtree(item, nw)
                    continue
                }
                if (isInsideBoudingBox({ boundries: ne.boundries, item })) {
                    addItemToQuadtree(item, ne)
                    continue
                }
                if (isInsideBoudingBox({ boundries: se.boundries, item })) {
                    addItemToQuadtree(item, se)
                    continue
                }
                if (isInsideBoudingBox({ boundries: sw.boundries, item })) {
                    addItemToQuadtree(item, sw)
                    continue
                }
            }

            quadtree.items = []
        }

        const nw = quadtree.subQuadtrees.get(ESubQuadtrees.nw) as IQuadtree
        const ne = quadtree.subQuadtrees.get(ESubQuadtrees.ne) as IQuadtree
        const se = quadtree.subQuadtrees.get(ESubQuadtrees.se) as IQuadtree
        const sw = quadtree.subQuadtrees.get(ESubQuadtrees.sw) as IQuadtree

        if (isInsideBoudingBox({ boundries: nw.boundries, item })) addItemToQuadtree(item, nw)

        if (isInsideBoudingBox({ boundries: ne.boundries, item })) addItemToQuadtree(item, ne)

        if (isInsideBoudingBox({ boundries: se.boundries, item })) addItemToQuadtree(item, se)

        if (isInsideBoudingBox({ boundries: sw.boundries, item })) addItemToQuadtree(item, sw)
    }

    const addAllItemsToQuadtree = () => {
        if (!state.quadtree) return

        for (const item of state.items) {
            addItemToQuadtree(item, state.quadtree)
        }
    }

    const updateBoardBoundries: TUpdateBoardBoundries = (boundries) => {
        state.boardBoundries = boundries
    }

    const tick = () => {
        if (!state.boardBoundries) return

        state.quadtree = createQuadtree({
            boundries: state.boardBoundries,
            capacity: state.capacity,
        })

        addAllItemsToQuadtree()
    }

    const addCollisionsItem: TAddCollisionsItem = (item) => {
        state.items.push(item)
    }

    const removeCollisionsItem: TRemoveCollisionsItem = (id) => {
        state.items = state.items.filter((item) => item.id !== id)
    }

    const findItemsInRange: TFindItemsInRange = (range, quadtree = state.quadtree, items = []) => {
        if (!quadtree) return items

        if (quadtree.subQuadtrees) {
            const ne = quadtree.subQuadtrees.get(ESubQuadtrees.ne) as IQuadtree

            if (isBoundryInRange(range, ne.boundries)) findItemsInRange(range, ne, items)

            const nw = quadtree.subQuadtrees.get(ESubQuadtrees.nw) as IQuadtree

            if (isBoundryInRange(range, nw.boundries)) findItemsInRange(range, nw, items)

            const sw = quadtree.subQuadtrees.get(ESubQuadtrees.sw) as IQuadtree

            if (isBoundryInRange(range, sw.boundries)) findItemsInRange(range, sw, items)

            const se = quadtree.subQuadtrees.get(ESubQuadtrees.se) as IQuadtree

            if (isBoundryInRange(range, se.boundries)) findItemsInRange(range, se, items)
        } else {
            items.push(...quadtree.items)
        }

        return items
    }

    return { updateBoardBoundries, tick, addCollisionsItem, removeCollisionsItem, findItemsInRange }
}
