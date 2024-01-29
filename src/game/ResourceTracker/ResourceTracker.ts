import {
    IResourceTrackerState,
    TCreateResourceTracker,
    TDisposeAllResources,
    TDisposeMultipleTrackedResources,
    TDisposeTrackedResource,
    TTrackResource,
} from './ResourceTracker.types'

export const createResourceTracker: TCreateResourceTracker = (Scene) => {
    const state: IResourceTrackerState = { Scene, resources: [] }

    const trackResource: TTrackResource = (resource) => {
        state.resources = [...state.resources, resource]
    }

    const disposeTrackedResource: TDisposeTrackedResource = (id) => {
        const resource = state.resources.find((resource) => resource.id === id)?.resource

        if (!resource) {
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
        disposeTrackedResource,
        disposeMultipleTrackedResources,
        disposeAllResources,
    }
}
