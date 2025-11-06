import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";
// import styles from './ModelViewer.module.css'


interface ModelProps {
  modelUrl: string;
}

function Model({ modelUrl }: ModelProps) {
  const modelRef = useRef<THREE.Object3D>(null!);
  const targetRotationY = useRef(0);

  useFrame((state, delta) => {
    targetRotationY.current += 0.4 * delta;
    targetRotationY.current %= 2 * Math.PI;
    if (modelRef.current) {
      let diff = targetRotationY.current - modelRef.current.rotation.y;
      while (diff < -Math.PI) diff += 2 * Math.PI;
      while (diff > Math.PI) diff -= 2 * Math.PI;
      modelRef.current.rotation.y += diff * 0.1;
    }

    const idealPos = new THREE.Vector3(0, 1.5, 3);
    const target = new THREE.Vector3(0, 0.5, 0);
    state.camera.position.lerp(idealPos, 0.02);
    state.camera.lookAt(target);
  });

  const { scene } = useGLTF(modelUrl);

  return (
    <primitive
      ref={modelRef}
      object={scene}
      scale={1.6}
      position={[0, -0.2, 0]}
      rotation={[0, Math.PI / 4, 0]}
    />
  );
}

export default function ModelViewer({ modelUrl }: { modelUrl: string }) {
  return (
    <Canvas camera={{ position: [0, 1.5, 3], fov: 45 }}>
      <ambientLight intensity={0.8} />
      <directionalLight position={[5, 10, 7.5]} intensity={1.5} />
      <directionalLight position={[0, 0, -10]} intensity={0.5} />
      <directionalLight position={[0, 0, 10]} intensity={0.4} />
      <Suspense fallback={null}>
        <Model modelUrl={modelUrl}/>
      </Suspense>
    </Canvas>
  );
};
