import { useEffect, useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { useCircle } from "@react-three/p2";
import {
  CSS2DRenderer,
  CSS2DObject,
} from "three/addons/renderers/CSS2DRenderer.js";

export default function Circle(props) {
  const [color, setColor] = useState("#00aeef");
  const [ref, api] = useCircle(() => ({
    mass: props.mass,
    position: props.position,
    args: props.args,
  }));
  const labelRef = useRef();
  const label = new CSS2DObject(labelRef.current);

  function GravitateToCenter(mass, pos = []) {
    var dist = Math.pow(
      Math.sqrt(Math.pow(pos[0], 2) + Math.pow(pos[1], 2)),
      2
    );
    var force = (mass * 10000000) / dist > 1 ? dist : 1;
    return [
      -Math.cos(Math.atan2(pos[1], pos[0])) * force,
      -Math.sin(Math.atan2(pos[1], pos[0])) * force,
    ];
  }

  var position = [0, 0];
  useEffect(() => {
    api.position.subscribe((pos) => (position = pos));
    api.material.set({ friction: 0, restitution: 0 });
  });

  useFrame((state, deltaTime) => {
    api.applyForce(GravitateToCenter(api.mass, position), [0, 0]);
  });

  return (
    <>
      <mesh
        ref={ref}
        onClick={() => {
          console.log(props.args[0]);
        }}
        onPointerEnter={() => setColor("#ff0000")}
        onPointerLeave={() => setColor("#00aeef")}
      >
        <circleGeometry attach="geometry" args={props.args} />
        <meshBasicMaterial attach="material" color={color} doubleSide={true} />
      </mesh>
      <div ref={labelRef}>hola!</div>
    </>
  );
}
