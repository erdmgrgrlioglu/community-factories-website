import { GridStack } from "gridstack";

import "gridstack/dist/gridstack.css";
import "gridstack/dist/gridstack.min.css";

import classes from "./Policies.module.scss";
import { useEffect } from "react";

export default function Policies(props) {
  let grid = document.querySelector("id");

  useEffect(() => {
    //init all fires first fix this
    grid = GridStack.init({
      //cellHeight: "163px",
      minRow: 1,
      acceptWidgets: true,
      float: true,
      columnOpts: {
        breakpointForWindow: false,
        breakpoints: [
          { w: 300, c: 1 },
          { w: 600, c: 2 },
          { w: 900, c: 3 },
          { w: 1200, c: 4 },
          { w: 1500, c: 5 },
          { w: 1800, c: 6 },
          { w: 2400, c: 8 },
          { w: 3600, c: 12 },
          { w: 6000, c: 20 },
        ],
        layout: "none",
      },
    });
  });

  return (
    <div className={`${props.className} ${classes.policies}`}>
      <div className={classes.title}>{"policies"}</div>
      <div className="grid-stack">
        {props.policies
          ? props.policies.map((v, i) => (
              <div className={"grid-stack-item"}>
                <div
                  key={i}
                  className={`${"grid-stack-item-content"} ${classes.box}`}
                  onClick={() =>
                    props.onClick({
                      title: v,
                    })
                  }
                >
                  {v}
                </div>
              </div>
            ))
          : null}
      </div>
    </div>
  );
}
