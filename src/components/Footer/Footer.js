import { useState } from "react";
import { FaBug } from "react-icons/fa";
import { GiSquib } from "react-icons/gi";

import classes from "./Footer.module.scss";

export default function Footer() {
  const [count, setCount] = useState(0);

  return (
    <footer className={classes.footer}>
      <div>
        <div className={classes.bug} onClick={() => setCount(count + 1)}>
          {count > 5 ? <GiSquib size="10" /> : <FaBug size="10" />}V 0 . 0 . 1
        </div>
      </div>
    </footer>
  );
}
