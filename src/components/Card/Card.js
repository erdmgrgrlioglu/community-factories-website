import classes from "./Card.module.scss";

export default function Card(props) {
  return (
    <div className={"grid-stack-item card"} onClick={props.onClick}>
      <div className={`${"grid-stack-item-content"} ${classes.card}`}>
        <div className={classes.title}>{props.title}</div>
        <div className={classes.communities}>
          {props.communities
            ? props.communities.map((c, i) => (
                <div key={i} className={classes.box}>
                  {c}
                </div>
              ))
            : "no one is working on this"}
        </div>
        <div className={classes.filler} />
        <div className={classes.energy}>
          <div className={classes.blink}>
            {props.energy ? null : "?"}
            {" W"}
          </div>
        </div>
      </div>
    </div>
  );
}
