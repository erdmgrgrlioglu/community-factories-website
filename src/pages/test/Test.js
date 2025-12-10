import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Html } from "@react-three/drei";
import * as THREE from "three";
import { useRef } from "react";

const EARTH_RADIUS = 1;
const MOON_RADIUS = 0.27;

function Moon() {
  const moonRef = useRef();
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (moonRef.current) {
      moonRef.current.position.set(Math.sin(t) * 5, 0, Math.cos(t) * 5);
    }
  });

  return (
    <mesh ref={moonRef}>
      <sphereGeometry args={[MOON_RADIUS, 16, 16]} />
      <Html
        position={[MOON_RADIUS * 1.5, 0, 0]}
        center
        style={{
          pointerEvents: "none",
          background: "transparent",
          color: "black",
        }}
      >
        {""}
      </Html>
      <Html
        position={[MOON_RADIUS * 1.5, 0, 0]}
        center
        style={{
          pointerEvents: "none",
          background: "transparent",
          color: "black",
        }}
      >
        {"7.342e22 kg"}
      </Html>
    </mesh>
  );
}

export default function TestPage(props) {
  return (
    <Canvas
      camera={{ position: [10, 5, 20], fov: 45 }}
      onCreated={({ camera }) => camera.layers.enableAll()}
    >
      <directionalLight position={[0, 0, 1]} intensity={3} />

      <axesHelper args={[5]} />
      <mesh>
        <sphereGeometry args={[EARTH_RADIUS, 16, 16]} />
        <meshPhongMaterial
          shininess={5}
          specular={new THREE.Color(0x333333)}
          normalScale={new THREE.Vector2(0.85, 0.85)}
        />
        <Html
          position={[EARTH_RADIUS * 1.5, 0, 0]}
          center
          style={{
            pointerEvents: "none",
            background: "transparent",
            color: "black",
          }}
        >
          {"Earth"}
        </Html>
        <Html
          position={[EARTH_RADIUS * 1.5, 0, 0]}
          center
          style={{
            pointerEvents: "none",
            background: "transparent",
            color: "black",
          }}
        >
          {"5.97237e24 kg"}
        </Html>
      </mesh>

      <Moon />

      <OrbitControls minDistance={5} maxDistance={100} makeDefault />
    </Canvas>
  );
}
