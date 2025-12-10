import { PresentationControls } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { OBJLoader } from "three/addons/loaders/OBJLoader.js";

export default function ObjToMesh(props) {
  const obj = useLoader(OBJLoader, props.path);

  return (
    <PresentationControls global>
      {obj.children.map((o, i) => (
        <mesh
          key={i}
          geometry={o.geometry}
          scale={[0.5, 0.5, 0.5]}
          rotation={[1, 0, 0]}
        >
          <meshBasicMaterial
            attach="material"
            color="#0090e6"
            wireframe={true}
          />
        </mesh>
      ))}
    </PresentationControls>
  );
}
