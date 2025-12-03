import { useEffect, useState } from "react";
import { Globe } from "../meshes";
import Renderer from "../Renderer/Renderer";
import classes from "./KardeshevCounter.module.scss";
import { kardeshevNumber } from "../../Functions";

export default function KardeshevCounter() {
  const [counter, setCounter] = useState(kardeshevNumber());

  useEffect(
    () =>
      setInterval(
        () =>
          setCounter(
            kardeshevNumber() + 0.000000000000000000001 * new Date().valueOf()
          ),
        100
      ),
    []
  );

  return (
    <div className={classes.globe}>
      <div className={classes.number}>
        <div>{counter}</div>
      </div>
      <Renderer objects={<Globe />} />
    </div>
  );
}
