import classes from "./Button.module.scss";

/**Default Button Component
 *
 * @param {*} props takes: onClick, className, children
 * @returns Button
 */
export default function Button(props) {
  return (
    <button
      onClick={props.onClick}
      disabled={props.disabled}
      className={classes.button}
    >
      {props.text}
    </button>
  );
}
