import { useEffect, useState } from "react";
import {
  energyIn,
  energyInUse,
  resourceAvailable,
  resourceInUse,
  format,
  earthCarryingCapacity,
  earthPopulation,
  recommendedChildCountPerFamily,
  earthCrustMass,
  numberOfImportantJigglyGoos,
  numberOfJigglyGoos,
} from "../../Functions";

import classes from "./Rates.module.scss";

export default function Rates() {
  const [clock, setClock] = useState(Math.random());
  useEffect(() => {
    setInterval(() => setClock(Math.random()), 1000);
    return () => {};
  }, []);

  return (
    <div
      className={"grid-stack-item"}
      gs-h="3"
      gs-w="2"
      onClick={() => numberOfImportantJigglyGoos(10)}
    >
      <div className={`${"grid-stack-item-content"} ${classes.rates}`}>
        <div className={classes.title}>{"rates"}</div>
        <div className={classes.row}>
          <div>{"Energy Available"}</div>
          <div className={classes.blink}>
            {format(energyIn()) + " Energy Second"}
          </div>
        </div>
        <div className={classes.row}>
          <div>{"Energy In Use"}</div>
          <div className={classes.blink}>
            {format(energyInUse()) + " Energy Second"}
          </div>
        </div>
        <div className={classes.row}>
          <div>{"Resource Available"}</div>
          <div className={classes.blink}>
            {format(resourceAvailable()) + " Mass"}
          </div>
        </div>
        <div className={classes.row}>
          <div>{"Resource In Use"}</div>
          <div className={classes.blink}>
            {format(resourceInUse()) + " Mass"}
          </div>
        </div>
        <div className={classes.row}>
          <div>{"Earth Carrying Capacity"}</div>
          <div className={classes.blink}>{earthCarryingCapacity() + clock}</div>
        </div>
        <div className={classes.row}>
          <div>{"Earth Population"}</div>
          <div className={classes.blink}>
            {Math.round(earthPopulation() + clock)}
          </div>
        </div>
        <div className={classes.row}>
          <div>{"Recommended Child Count per Family"}</div>
          <div className={classes.blink}>
            {recommendedChildCountPerFamily() + clock}
          </div>
        </div>
        <div className={classes.row}>
          <div>{"Number of Balls on Earths Crust"}</div>
          <div className={classes.blink}>
            {format(numberOfJigglyGoos(earthCrustMass(), 14))}
          </div>
        </div>
        <div className={classes.row}>
          <div>{"Mom"}</div>
          <div className={classes.blink}>
            {format(Math.pow(10, 67)) + " Mass"}
          </div>
        </div>
      </div>
    </div>
  );
}
