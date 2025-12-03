import { ObjToMesh } from "../meshes";
import Renderer from "../Renderer/Renderer";
import classes from "./Overlay.module.scss";

export default function Overlay(props) {
  return (
    <div className={classes.overlay}>
      <div className={classes.backdrop} onClick={() => props.onClick()} />
      <div className={classes.box}>
        <div className={classes.title}>{props.overlay.title}</div>
        {props.overlay.objectPath ? (
          <Renderer objects={<ObjToMesh path={props.overlay.objectPath} />} />
        ) : (
          <div className={classes.fill} />
        )}
      </div>
    </div>
  );
}
