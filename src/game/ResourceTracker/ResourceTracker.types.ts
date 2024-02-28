import { DirectionalLight, HemisphereLight, Line, Mesh, Object3D, Scene } from 'three'

export type TResource = Mesh | Line | DirectionalLight | HemisphereLight | Object3D | undefined

export interface ITrackedResource {
    id: string
    resource: TResource
}

export interface IResourceTrackerState {
    Scene: Scene
    resources: Array<ITrackedResource>
}

export type TTrackResource = (resource: ITrackedResource) => void

export type TGetTrackedResource = (id: string) => TResource

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
