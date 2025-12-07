import { useEffect, useState } from "react";
import {
  energyBudget,
  energyConsumption,
  format,
  carryingCapacity,
  worldPopulation,
  recommendedChildCountPerFamily,
  resourceBudget,
  resourceConsumption,
} from "../../Functions";

import classes from "./Rates.module.scss";

export default function Rates(props) {
  const [clock, setClock] = useState(Math.random());
  useEffect(() => {
    setInterval(() => setClock(Math.random()), 1000);
    return () => {};
  }, []);

  return (
    <div className={"grid-stack-item"} gs-h="3" gs-w="2">
      <div className={`${"grid-stack-item-content"} ${classes.rates}`}>
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
          <div>{"Resource Budget"}</div>
          <div className={classes.blink}>
            {resourceBudget().toString() + " TW"}
          </div>
        </div>
        <div className={classes.row}>
          <div>{"Resource Consumption"}</div>
          <div className={classes.blink}>
            {resourceConsumption().toString() + " TW"}
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
    </div>
  );
}
