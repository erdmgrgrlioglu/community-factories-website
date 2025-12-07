import { useEffect, useRef } from "react";
import { GridStack } from "gridstack";

import "gridstack/dist/gridstack.css";
import "gridstack/dist/gridstack.min.css";

import classes from "./Policies.module.scss";

export default function Policies(props) {
  const gridRef = useRef(null);
  useEffect(() => {
    GridStack.init(
      {
        cellHeight: "163px",
        staticGrid: false,
        minRow: 1,
        float: false,
        columnOpts: {
          columnMax: 500, //cigarettes
          columnWidth: 300,
          layout: "none",
        },
      },
      gridRef.current
    );
    return () => {};
  });

  return (
    <div className={"grid-stack-item"} gs-h="3" gs-w="2">
      <div className={`${"grid-stack-item-content"} ${classes.policies}`}>
        <div className={classes.title}>{"policies"}</div>
        <div ref={gridRef} className="grid-stack">
          {props.policies
            ? props.policies.map((v, i) => (
                <div key={i} className={"grid-stack-item"}>
                  <div
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
    </div>
  );
}
