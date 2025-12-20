import { OrbitControls } from "@react-three/drei";

import { HamiltonianSpace } from "../../components/three";
import { Renderer } from "../../components";

import classes from "./Test.module.scss";

export default function TestPage(props) {
  const resolution = 40;

  return (
    <div className={classes.test}>
      <Renderer
        cameraDistance={resolution}
        objects={
          <>
            <OrbitControls />
            <HamiltonianSpace resolution={resolution} extent={2} />
          </>
        }
      />
    </div>
  );
}
