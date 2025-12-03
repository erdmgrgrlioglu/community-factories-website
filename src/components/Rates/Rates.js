import { useEffect, useState } from "react";
import {
  energyBudget,
  energyConsumption,
  format,
  carryingCapacity,
  worldPopulation,
  recommendedChildCountPerFamily,
} from "../../Functions";

import classes from "./Rates.module.scss";

export default function Rates(props) {
  const [clock, setClock] = useState("");
  useEffect(() => {
    setClock(Math.random());
    setInterval(() => setClock(Math.random()), 1000);
  }, []);

  return (
    <div className={`${props.className} ${classes.rates}`}>
      <div className={classes.title}>{"rates"}</div>
      <div className={classes.row}>
        <div>{"Energy Budget"}</div>
        <div className={classes.blink}>
          {energyBudget().toString().substring(0, 3) + " TW"}
        </div>
      </div>
      <div className={classes.row}>
        <div>{"Energy Consumption"}</div>
        <div className={classes.blink}>
          {energyConsumption().toString().substring(0, 2) + " TW"}
        </div>
      </div>
      <div className={classes.row}>
        <div>{"Carrying Capacity"}</div>
        <div className={classes.blink}>
          {format(Math.round(carryingCapacity() + clock))}
        </div>
      </div>
      <div className={classes.row}>
        <div>{"World Population"}</div>
        <div className={classes.blink}>
          {format(Math.round(worldPopulation() + clock))}
        </div>
      </div>
      <div className={classes.row}>
        <div>{"Recommended Child Count per Family"}</div>
        <div className={classes.blink}>
          {(recommendedChildCountPerFamily() + clock)
            .toString()
            .substring(0, 9)}
        </div>
      </div>
    </div>
  );
}
