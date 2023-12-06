import React, { Suspense } from "react";
import "./styles.css";
import { Canvas, useLoader } from "react-three-fiber";
import { Physics, usePlane, useBox } from "use-cannon";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from "drei";

function Dice() {
  const { nodes } = useLoader(GLTFLoader, "/dice/scene.gltf");

  const [ref, api] = useBox(() => ({
    mass: 0.1,
    position: [0, 0.2, 0],
    allowSleep: false, // if i keep this to true in will still be asleep when i want to reroll the dice :(
    sleepSpeedLimit: 1,
    args: [0.22, 0.22, 0.22],
    material: {
      friction: 1,
      restitution: 1
    }
  }));

  const rerollDice = () => {
    api.velocity.set(-4, -0.5, 0);
    api.angularVelocity.set(
      Math.floor(Math.random() * 10),
      Math.floor(Math.random() * 10),
      Math.floor(Math.random() * 10)
    );
    api.rotation.set(0, 0.2, 0.4);
    api.position.set(2, 1, 0);
  };

  return (
    <group
      onClick={() => rerollDice()}
      scale={[0.3, 0.3, 0.3]}
      ref={ref}
      dispose={null}
    >
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[2.34, 0, 0]}>
            <group position={[-2.33, -0.01, 0]} scale={[0.41, 0.41, 0.41]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.pasted__pSphere51_blinn1_0.geometry}
              >
                <meshPhysicalMaterial attach="material" color="#fff" />
              </mesh>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.pasted__pSphere51_blinn2_0.geometry}
              >
                <meshPhysicalMaterial attach="material" color="#eb4034" />
              </mesh>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

function Ground(props) {
  const [ref] = usePlane(() => ({ rotation: [-Math.PI / 2, 0, 0], ...props }));

  return (
    <mesh
      ref={ref}
      receiveShadow
      position={[0, -1, 0]}
      rotation={[-0.5 * Math.PI, 0, 0]}
    >
      <planeBufferGeometry attach="geometry" args={[100, 100]} />
      <shadowMaterial attach="material" color="black" />
    </mesh>
  );
}

export default function App() {
  return (
    <Canvas camera={{ position: [0, 3, 3] }} colorManagement shadowMap>
      <hemisphereLight intensity={0.2} />
      <directionalLight
        position={[0, 10, 8]}
        castShadow
        penumbra={1}
        intensity={0.5}
      />
      <OrbitControls />
      <Physics>
        <Ground />
        <Suspense fallback={null}>
          <Dice />
        </Suspense>
      </Physics>
    </Canvas>
  );
}
