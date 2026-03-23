import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars, useGLTF } from "@react-three/drei";
import { Suspense } from "react";

const Earth = () => {
  const { scene } = useGLTF("/planet/scene.gltf");
  return <primitive object={scene} scale={2.5} />;
};

const EarthCanvas = () => {
  return (
    <Canvas camera={{ position: [0, 0, 5] }}>
      <Suspense fallback={null}>
        <OrbitControls autoRotate enableZoom={false} />
        <Earth />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;
