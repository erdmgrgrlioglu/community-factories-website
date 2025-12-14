import { ObjToMesh } from "../meshes";
import Renderer from "../Renderer/Renderer";
import classes from "./Overlay.module.scss";

export default function Overlay(props) {
  return (
    <div className={classes.overlay}>
      <div className={classes.backdrop} onClick={() => props.onClick()} />
      <div className={classes.box}>
        <div className={classes.title}>{props.title}</div>
        {props.object ? (
          <Renderer objects={<ObjToMesh path={props.object} />} />
        ) : props.text ? (
          <div className={classes.text}>{props.text}</div>
        ) : (
          <div className={classes.fill} />
        )}
      </div>
    </div>
  );
}
