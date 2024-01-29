import { useEffect, useMemo, useRef } from 'react'
import * as THREE from 'three'

const ThreeContainer = () => {
    const rendererRef = useRef<HTMLDivElement | null>(null)

    const scene = useMemo(() => new THREE.Scene(), [])
    const camera = useMemo(
        () => new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000),
        [],
    )
    const renderer = useMemo(() => new THREE.WebGLRenderer(), [])

    useEffect(() => {
        renderer.setSize(window.innerWidth - 18, window.innerHeight)
        if (rendererRef.current) rendererRef.current.appendChild(renderer.domElement)

        const geometry = new THREE.BoxGeometry(1, 1, 1)
        const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 })
        const cube = new THREE.Mesh(geometry, material)
        scene.add(cube)

        camera.position.z = 5

        function animate() {
            if (renderer) requestAnimationFrame(animate)

            cube.rotation.x += 0.01
            cube.rotation.y += 0.01

            renderer.render(scene, camera)
        }

        animate()

        return () => {
            scene.remove(cube)

            geometry.dispose()
            material.dispose()

            renderer.domElement.remove()
            renderer.dispose()
        }
    }, [camera, renderer, scene])

    return <div ref={rendererRef} />
}

export default ThreeContainer
