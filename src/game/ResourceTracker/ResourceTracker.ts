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
        if (!(resourceItem?.id && resourceItem?.resource)) {
            if (isDev && allLogs)
                console.log(
                    `Resource of id: ${resourceItem.id} is incorrect and was not added to Scene and tracking.`,
                )

            return
        }

        state.resources = [...state.resources, resourceItem]

        if (isDev && allLogs) console.log(`Resource of id: ${resourceItem.id} is now tracked.`)

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

        // @ts-expect-error I don't know why I cannot check if parameter exists and then do something. To further research
        if (resource.isDirectionalLight || resource.isHemisphereLight) {
            // @ts-expect-error -||-
            resource.dispose()
        } else {
            Scene.remove(resource)
            // @ts-expect-error -||-
            resource.geometry.dispose()
        }

        // @ts-expect-error -||-
        if (!resource.material) return

        const updateStateArray = () => {
            const resourceIndex = state.resources.findIndex((resource) => resource.id === id)

            state.resources = [
                ...state.resources.slice(0, resourceIndex),
                ...state.resources.slice(resourceIndex + 1),
            ]
        }

        if (
            // @ts-expect-error -||-
            Array.isArray(resource.material) &&
            // @ts-expect-error I don't know why I cannot check if parameter exists and then do something. To further research
            !(resource.isDirectionalLight || resource.isHemisphereLight)
        ) {
            // @ts-expect-error -||-
            for (const material of resource.material) {
                material.dispose()
            }
        } else {
            // @ts-expect-error -||-
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
