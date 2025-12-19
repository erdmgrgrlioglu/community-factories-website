import { useFrame } from "@react-three/fiber";
import { OrbitControls, Html } from "@react-three/drei";
import { Renderer } from "../../components";
import { useEffect, useRef, useState } from "react";

function complexToHsl(Z) {
  var r = Math.abs(Z[0]);
  var angle = Math.atan2(Z[0], Z[1]);

  var h = (angle + Math.PI) / (2 * Math.PI);
  var s = 1.0;
  var l = r / 1.0;
}

function HamiltonianSpace(props) {
  const [color, setColor] = useState(["#000000", 0.1]);
  const ref = useRef();

  // set
  //const [V, setV] = useState(); //props.potential(particle_system));
  //useEffect(() => {
  //  //props.particle_system.buildMatrixOperators(this);
  //}, []);

  // solve
  useFrame(({ clock }, delta) => {
    if (ref.current) {
      console.log("Took", delta, "seconds");
      setColor([
        "#" +
          (Math.random() * 9).toFixed() +
          "" +
          (Math.random() * 9).toFixed() +
          "" +
          (Math.random() * 9).toFixed() +
          +"" +
          (Math.random() * 9).toFixed() +
          "" +
          (Math.random() * 9).toFixed(),
        1,
      ]);
    }
  });
  complexToHsl([0, -1]);

  const count = 1000000;
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count * 3; i++) {
    positions[i] = (Math.random() - 0.5) * 4;
  }

  // visualise
  return (
    <group ref={ref}>
      <mesh scale={[4, 4, 4]}>
        <boxGeometry attach="geometry" />
        <meshBasicMaterial attach="material" color="#0090e6" wireframe />
      </mesh>
      <points>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            array={positions}
            count={count}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          attach="material"
          color={color[0]}
          transparent={true}
          opacity={color[1]}
          size={0.01}
        />
      </points>
    </group>
  );
}

export default function TestPage(props) {
  return (
    <Renderer
      objects={
        <>
          <OrbitControls minDistance={5} maxDistance={100} makeDefault />
          <HamiltonianSpace />
        </>
      }
    />
  );
}
