import { Mesh, Scene } from 'three'

export interface ITrackedResource {
    id: string
    resource: Mesh
}

export interface IResourceTrackerState {
    Scene: Scene
    resources: Array<ITrackedResource>
}

export type TTrackResource = (resource: ITrackedResource) => void

export type TDisposeTrackedResource = (id: string) => void

export type TDisposeMultipleTrackedResources = (similiarIdPart: string) => void

export type TDisposeAllResources = () => void

export type TCreateResourceTracker = (Scene: Scene) => {
    trackResource: TTrackResource
    disposeTrackedResource: TDisposeTrackedResource
    disposeMultipleTrackedResources: TDisposeMultipleTrackedResources
    disposeAllResources: TDisposeAllResources
}

export type TResourceTracker = ReturnType<TCreateResourceTracker>
