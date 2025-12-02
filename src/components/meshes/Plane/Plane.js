import { useFrame } from "@react-three/fiber";
import { usePlane } from "@react-three/p2";

export default function Plane(props) {
  const [ref, api] = usePlane(() => ({ mass: 0, position: props.position }));

  return (
    <mesh ref={ref}>
      <circleGeometry attach="geometry" args={[1, 20]} />
      <meshBasicMaterial attach="material" color="#00aeef" doubleSide={true} />
    </mesh>
  );
}
