import classes from "./ScrollingText.module.scss";

export default function ScrollingText(props) {
  return (
    <div className={classes.text}>
      <div className={classes.textScroll}>
        <div>
          <p>
            {props.text ||
              "SGVsbG8gV29ybGQhIGh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9ZFF3NHc5V2dYY1E"}
          </p>
          <p>
            {props.text ||
              "SGVsbG8gV29ybGQhIGh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9ZFF3NHc5V2dYY1E"}
          </p>
        </div>
      </div>
    </div>
  );
}
