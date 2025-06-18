import { Suspense, useRef, useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, useGLTF } from '@react-three/drei'
import * as THREE from 'three'
// import styles from './ModelViewer.module.css'

interface ModelProps {
  url: string
  boxSize?: number
}

function Model({ url, boxSize = 1 }: ModelProps) {
  const { scene } = useGLTF(url)
  const ref = useRef<THREE.Group>(null)
  const [scale, setScale] = useState(1)
  const [position, setPosition] = useState<[number, number, number]>([0, 0, 0])

  useEffect(() => {
    if (ref.current) {
      const box = new THREE.Box3().setFromObject(ref.current)
      const size = box.getSize(new THREE.Vector3())
      const center = box.getCenter(new THREE.Vector3())

      const maxDimension = Math.max(size.x, size.y, size.z)
      const scaleFactor = boxSize / maxDimension

      setPosition([-center.x * scaleFactor, -center.y * scaleFactor, -center.z * scaleFactor])
      setScale(scaleFactor)
    }
  }, [scene, boxSize])

  return (
    <primitive
      ref={ref}
      object={scene}
      scale={scale}
      position={position}
    />
  )
}

interface ModelViewerProps {
  modelUrl: string
}

export const ModelViewer = ({ modelUrl }: ModelViewerProps) => {
  return (
    <Canvas camera={{ position: [0, 1.5, 3], fov: 60 }}>
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 10, 7.5]} intensity={1} />
      <Suspense fallback={null}>
        <Model url={modelUrl} boxSize={1} />
      </Suspense>
      <OrbitControls enableDamping dampingFactor={0.1} />
    </Canvas>
  )
}
