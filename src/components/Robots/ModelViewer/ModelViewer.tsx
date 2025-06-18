import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, useGLTF } from '@react-three/drei'
import styles from './ModelViewer.module.css'

interface ModelProps {
  url: string
  scale?: number
}

function Model({ url, scale = 1 }: ModelProps) {
  const { scene } = useGLTF(url)
  return <primitive object={scene} scale={scale} />
}

interface ModelViewerProps {
  modelUrl: string
}

export const ModelViewer = ({ modelUrl }: ModelViewerProps) => {
  return (
    <div className={styles.container}>
      <Canvas camera={{ position: [0, 1.5, 3], fov: 60 }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 10, 7.5]} intensity={1} />
        <Suspense fallback={null}>
          <Model url={modelUrl} scale={1} />
        </Suspense>
        <OrbitControls enableDamping dampingFactor={0.1} />
      </Canvas>
    </div>
  )
}
