import { useEffect, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { useCircle } from "@react-three/p2";
import { Html } from "@react-three/drei";

export default function Circle(props) {
  const [color, setColor] = useState("#0090e6");
  const [ref, api] = useCircle(() => ({
    mass: props.mass,
    position: props.position,
    args: props.args,
  }));

  function GravitateToCenter(mass, pos = []) {
    var dist = Math.pow(
      Math.sqrt(Math.pow(pos[0], 2) + Math.pow(pos[1], 2)),
      2
    );
    var force = (mass * 10000000) / dist > 1 ? dist : 1;
    console.log(
      -Math.cos(Math.atan2(pos[1], pos[0])) * force,
      -Math.sin(Math.atan2(pos[1], pos[0])) * force
    );
    return [
      -Math.cos(Math.atan2(pos[1], pos[0])) * force,
      -Math.sin(Math.atan2(pos[1], pos[0])) * force,
    ];
  }

  function ForceTowardsMouse(mass, pos = []) {
    //var dist = Math.pow(
    //  Math.sqrt(Math.pow(pos[0], 2) + Math.pow(pos[1], 2)),
    //  2
    //);
    var force = 1;
    return [force, force];
  }

  var position = [0, 0];
  useEffect(() => {
    api.position.subscribe((pos) => (position = pos));
    api.material.set({ friction: 0, restitution: 0 });
    return () => {};
  });

  useFrame(() => {
    api.applyForce(GravitateToCenter(api.mass, position), [0, 0]);
    if (props.mousePos[0] > 0)
      api.applyForce(ForceTowardsMouse(props.mousePos), [0, 0]);
  });

  return (
    <mesh
      ref={ref}
      onClick={() => {
        console.log(props.args[0]);
      }}
      onPointerEnter={() => setColor("#ff0000")}
      onPointerLeave={() => setColor("#0090e6")}
    >
      <circleGeometry attach="geometry" args={props.args} />
      <meshBasicMaterial attach="material" color={color} />
      <Html
        style={{
          pointerEvents: "none",
          color: "white",
          zIndex: -1,
        }}
        center
      >
        {props.text && props.text.length < props.args[0] * 12
          ? props.text
          : null}
      </Html>
    </mesh>
  );
}
