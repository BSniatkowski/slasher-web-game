const isDev = import.meta.env.DEV
const allLogs = import.meta.env.SHOW_RESOURCES_TRACKER_INFO_LOGS as boolean

import {
    IResourceTrackerState,
    TCreateResourceTracker,
    TDisposeAllResources,
    TDisposeMultipleTrackedResources,
    TDisposeTrackedResource,
    TGetTrackedResource,
    TTrackResource,
} from './ResourceTracker.types'

export const createResourceTracker: TCreateResourceTracker = (Scene) => {
    const state: IResourceTrackerState = { Scene, resources: [] }

    const trackResource: TTrackResource = (resourceItem) => {
        if (isDev && allLogs) console.log(`Resource of id: ${resourceItem.id} is now tracked.`)

        state.resources = [...state.resources, resourceItem]

        Scene.add(resourceItem.resource)
    }

    const getTrackedResource: TGetTrackedResource = (id) =>
        state.resources.find((resource) => resource.id === id)?.resource

    const disposeTrackedResource: TDisposeTrackedResource = (id) => {
        const resource = state.resources.find((resource) => resource.id === id)?.resource

        if (isDev && allLogs) console.log(`Resource of id: ${id} was safely dispose.`)

        if (!resource) {
            if (isDev)
                console.warn(
                    `Resource of id: ${id} was not tracked and cannot be safely dispose. Check resource initialization.`,
                )

            return
        }

        Scene.remove(resource)
        resource.geometry.dispose()

        if (!resource.material) return

        const updateStateArray = () => {
            const resourceIndex = state.resources.findIndex((resource) => resource.id === id)

            state.resources = [
                ...state.resources.slice(0, resourceIndex),
                ...state.resources.slice(resourceIndex + 1),
            ]
        }

        if (Array.isArray(resource.material)) {
            for (const material of resource.material) {
                material.dispose()
            }
        } else {
            resource.material.dispose()
        }

        updateStateArray()
    }

    const disposeMultipleTrackedResources: TDisposeMultipleTrackedResources = (similiarIdPart) => {
        const resourcesIds = state.resources
            .filter((resource) => resource.id.includes(similiarIdPart))
            .map(({ id }) => id)

        for (const resourceId of resourcesIds) {
            disposeTrackedResource(resourceId)
        }
    }

    const disposeAllResources: TDisposeAllResources = () => {
        const resourcesIds = state.resources.map(({ id }) => id)

        for (const resourceId of resourcesIds) {
            disposeTrackedResource(resourceId)
        }
    }

    return {
        trackResource,
        getTrackedResource,
        disposeTrackedResource,
        disposeMultipleTrackedResources,
        disposeAllResources,
    }
}
