import { Globe } from "../meshes";
import Renderer from "../Renderer/Renderer";
import classes from "./Overlay.module.scss";

export default function Overlay(props) {
  return (
    <div className={classes.overlay} onClick={() => props.onClick()}>
      <div className={classes.box}>
        <div className={classes.title}>{props.overlay.title}</div>
        <Renderer objects={<Globe />} />
      </div>
    </div>
  );
}
