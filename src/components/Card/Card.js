import { format } from "../../Functions";

import classes from "./Card.module.scss";

export default function Card(props) {
  return (
    <div className={"grid-stack-item"} onClick={props.onClick}>
      <div className={`${"grid-stack-item-content"} ${classes.card}`}>
        <div className={classes.title}>
          {props.value.title ? props.value.title : "Factory"}
        </div>
        <div className={classes.communities}>
          {props.value.communities
            ? props.value.communities.map((c, i) => (
                <div key={i} className={classes.box}>
                  {c}
                </div>
              ))
            : "no one is working on this"}
        </div>
        <div className={classes.filler} />
        {props.value.energy ? (
          <div className={classes.energy}>
            <div className={classes.blink}>
              {format(props.value.energy) + " Energy"}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
