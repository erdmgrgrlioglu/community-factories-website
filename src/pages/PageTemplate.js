import classes from "./Pages.module.scss";

export default function PageTemplate(props) {
  return (
    <div className={classes.page}>
      <div className={classes.content}>
        <div>{props.name}</div>
        {props.children}
      </div>
    </div>
  );
}
