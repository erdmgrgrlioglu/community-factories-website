import { useFrame } from "@react-three/fiber";
import { OrbitControls, Html } from "@react-three/drei";
import { Renderer } from "../../components";
import { useRef, useState } from "react";

import classes from "./Test.module.scss";

function complexToRgba(Z) {
  var r = Math.abs(Z[0]);
  var angle = Math.atan2(Z[0], Z[1]);

  return [
    (angle + Math.PI) / (2 * Math.PI),
    1.0,
    Math.max(0, Math.min(r / 1.0, 1)),
  ]; //hsv
}

function HamiltonianSpace(props) {
  const ref = useRef();
  const count = Math.pow(props.resolution, 3);

  // set
  const [colors, setColors] = useState(
    new Float32Array(count * 4).map(
      (v, i) => (i % 4 == 3 ? Math.random() : Math.random()) //complexToRgba([0, -1]);
    )
  );

  // this is ugly
  const [positions, setPositions] = useState(() => {
    const pos = [];
    for (let x = 0; x < props.resolution; x++)
      for (var y = 0; y < props.resolution; y++)
        for (var z = 0; z < props.resolution; z++)
          pos.push(
            x - (props.resolution - 1) / 2,
            y - (props.resolution - 1) / 2,
            z - (props.resolution - 1) / 2
          );
    return new Float32Array(pos);
  });

  const [V, setV] = useState(); //props.particle_system;

  // solve
  useFrame(({ clock }, delta) => {
    if (ref.current) {
      console.log("Took", delta, "seconds");
      setColors(
        colors.map((v, i) => (i % 4 == 3 ? Math.random() : Math.random())) //complexToRgba([0, -1]);
      );
      ref.current.geometry.attributes.color.needsUpdate = true;
    }
  });

  // visualise
  return (
    <group>
      <mesh scale={[props.resolution, props.resolution, props.resolution]}>
        <boxGeometry attach="geometry" />
        <meshBasicMaterial attach="material" color="#0090e6" wireframe />
      </mesh>
      <Html
        style={{
          pointerEvents: "none",
          color: "#0090e6",
        }}
        position={[
          props.resolution / 2 + (props.resolution * 5) / 100,
          -props.resolution / 2,
          -(props.resolution / 2 + (props.resolution * 5) / 100),
        ]}
        children={props.extent}
        center
      />
      <Html
        style={{
          pointerEvents: "none",
          color: "#0090e6",
        }}
        position={[
          0,
          -props.resolution / 2,
          -(props.resolution / 2 + (props.resolution * 5) / 100),
        ]}
        children={"Å"}
        center
      />
      <Html
        style={{
          pointerEvents: "none",
          color: "#0090e6",
        }}
        position={[
          -(props.resolution / 2 + (props.resolution * 5) / 100),
          -(props.resolution / 2),
          -(props.resolution / 2 + (props.resolution * 5) / 100),
        ]}
        children={-props.extent}
        center
      />
      <Html
        style={{
          pointerEvents: "none",
          color: "#0090e6",
        }}
        position={[
          -(props.resolution / 2 + (props.resolution * 5) / 100),
          -props.resolution / 2,
          0,
        ]}
        children={"Å"}
        center
      />
      <Html
        style={{
          pointerEvents: "none",
          color: "#0090e6",
        }}
        position={[
          -(props.resolution / 2 + (props.resolution * 5) / 100),
          -props.resolution / 2,
          props.resolution / 2 + (props.resolution * 5) / 100,
        ]}
        children={props.extent}
        center
      />
      <points ref={ref}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            array={positions}
            count={count}
            itemSize={3}
          />
          <bufferAttribute
            attach="attributes-color"
            array={colors}
            count={count}
            itemSize={4}
          />
        </bufferGeometry>
        <pointsMaterial
          attach="material"
          vertexColors={true}
          transparent={true}
          size={1}
        />
      </points>
    </group>
  );
}

export default function TestPage(props) {
  const resolution = 40;

  return (
    <div className={classes.test}>
      <Renderer
        position={[resolution, resolution, resolution]}
        objects={
          <>
            <OrbitControls minDistance={5} maxDistance={100} makeDefault />
            <HamiltonianSpace resolution={resolution} extent={2} />
          </>
        }
      />
    </div>
  );
}
