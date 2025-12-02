import { FaBug } from "react-icons/fa";
import classes from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer className={classes.footer}>
      <div>
        <div className={classes.bug}>
          <FaBug size="10" />V 0 . 0 . 1
        </div>
      </div>
    </footer>
  );
}
