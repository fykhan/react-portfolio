import React, { Suspense } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import {
  Float,
  OrbitControls,
  Preload,
  Decal,
  useTexture,
} from "@react-three/drei";
import { TextureLoader } from "three";

import CanvasLoader from "../Loader";

const Mesh = (props) => {
  const [decal] = useTexture([props.imgUrl]);

  return (
    <Float speed={1.75} rotationIntensity={0.1} floatIntensity={2}>
      <ambientLight intensity={2} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 2]} />
        <meshStandardMaterial
          color='#fff8eb'
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />        
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
          map={decal}
          flatShading
        />  
      </mesh>
    </Float>
  );
};

const MeshCanvas = ({ icon }) => {
  return (
    <Canvas
      frameloop='demand'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Mesh imgUrl={icon} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default MeshCanvas;