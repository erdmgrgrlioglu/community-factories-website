import classes from "./Card.module.scss";

export default function Card(props) {
  return (
    <div className={`${props.className} ${classes.card}`}>
      <div className={classes.title}>{props.title}</div>
      {props.children}
    </div>
  );
}
