import { Line, Mesh, Scene } from 'three'

export interface ITrackedResource {
    id: string
    resource: Mesh | Line
}

export interface IResourceTrackerState {
    Scene: Scene
    resources: Array<ITrackedResource>
}

export type TTrackResource = (resource: ITrackedResource) => void

export type TGetTrackedResource = (id: string) => Mesh | undefined

export type TDisposeTrackedResource = (id: string) => void

export type TDisposeMultipleTrackedResources = (similiarIdPart: string) => void

export type TDisposeAllResources = () => void

export type TCreateResourceTracker = (Scene: Scene) => {
    trackResource: TTrackResource
    getTrackedResource: TGetTrackedResource
    disposeTrackedResource: TDisposeTrackedResource
    disposeMultipleTrackedResources: TDisposeMultipleTrackedResources
    disposeAllResources: TDisposeAllResources
}

export type TResourceTracker = ReturnType<TCreateResourceTracker>
