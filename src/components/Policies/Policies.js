import classes from "./Policies.module.scss";

export default function Policies(props) {
  return (
    <div className={`${props.className} ${classes.policies}`}>
      <div className={classes.title}>{"policies"}</div>
      <div className={classes.grid}>
        {props.policies
          ? props.policies.map((v, i) => (
              <div
                key={i}
                className={classes.box}
                onClick={() =>
                  props.onClick({
                    title: v,
                  })
                }
              >
                {v}
              </div>
            ))
          : null}
      </div>
    </div>
  );
}
