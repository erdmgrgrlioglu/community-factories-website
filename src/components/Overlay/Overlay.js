import { ObjToMesh } from "../three";
import Renderer from "../Renderer/Renderer";
import classes from "./Overlay.module.scss";

export default function Overlay(props) {
  return (
    <div className={classes.overlay} onClick={() => props.onClick()}>
      <div className={classes.box} onClick={(e) => e.stopPropagation()}>
        <div className={classes.title}>{props.value.title}</div>
        {props.value.object ? (
          <Renderer
            cameraDistance={props.value.object.cameraDistance}
            objects={
              <>
                <ObjToMesh
                  path={props.value.object.path}
                  scale={props.value.scale}
                />
                {props.value.object.mesh ? props.value.object.mesh : null}
              </>
            }
          />
        ) : (
          <div className={classes.element}>
            {props.value.element ? props.value.element : null}
          </div>
        )}
      </div>
    </div>
  );
}
