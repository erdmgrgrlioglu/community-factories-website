import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

export default function Globe() {
  const ref = useRef();

  useFrame(({ clock }) => {
    if (ref.current) ref.current.rotation.y = clock.elapsedTime / 8;
  });

  return (
    <mesh ref={ref}>
      <dodecahedronGeometry attach="geometry" args={[2, 2]} />
      <meshBasicMaterial attach="material" color="#0090e6" wireframe />
    </mesh>
  );
}
