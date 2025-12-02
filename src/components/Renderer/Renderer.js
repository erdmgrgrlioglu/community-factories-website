import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Physics } from "@react-three/p2";

import classes from "./Renderer.module.scss";

export default function Renderer(props) {
  return (
    <div className={classes.renderer}>
      <Canvas>
        <Suspense fallback={null}>
          <Physics normalIndex={2} gravity={[0, 0]}>
            {props.objects}
          </Physics>
        </Suspense>
      </Canvas>
    </div>
  );
}
