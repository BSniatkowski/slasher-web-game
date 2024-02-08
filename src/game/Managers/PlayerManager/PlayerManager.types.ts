import {
    CylinderGeometry,
    Line,
    Mesh,
    MeshBasicMaterial,
    PerspectiveCamera,
    Raycaster,
    Scene,
    Vector2,
} from 'three'

import { TResourceTracker } from '../../ResourceTracker/ResourceTracker.types'

export interface IPlayerManagerState {
    player: null | Mesh<CylinderGeometry, MeshBasicMaterial>
    pointer: Vector2
    raycaster: Raycaster
    pathMesh: null | Line
    shorterPathMesh: null | Line
}

export type TUpdatePointer = (state: IPlayerManagerState, event: PointerEvent) => void

export type TCreatePlayerManager = ({
    ref,
    Scene,
    Camera,
    ResourceTracker,
}: {
    ref: HTMLCanvasElement
    Scene: Scene
    Camera: PerspectiveCamera
    ResourceTracker: TResourceTracker
}) => {
    init: () => void
    dispose: () => void
}

export type TPlayerManager = ReturnType<TCreatePlayerManager>
