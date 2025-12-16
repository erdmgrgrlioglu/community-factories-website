import { useEffect, useRef, useState } from "react";
import { GridStack } from "gridstack";

import "gridstack/dist/gridstack.css";
import "gridstack/dist/gridstack.min.css";

import classes from "./Policies.module.scss";

export default function Policies(props) {
  const gridRef = useRef(null);
  const [policies, setPolicies] = useState([
    { title: "87" },
    { title: "69" },
    { title: "42" },
    { title: "67" },
  ]);
  const [debate, setDebate] = useState(0);

  useEffect(() => {
    GridStack.init(
      {
        cellHeight: "163px",
        staticGrid: false,
        minRow: 1,
        float: false,
        resizable: { handles: "all" },
        columnOpts: {
          columnMax: 500, //cigarettes
          columnWidth: 300,
          layout: "none",
        },
        alwaysShowResizeHandle: false,
      },
      gridRef.current
    );
    return () => {};
  });

  return (
    <div className={"grid-stack-item"} gs-h="3" gs-w="2">
      <div className={`${"grid-stack-item-content"} ${classes.policies}`}>
        <div className={classes.title}>{"policies"}</div>
        <div className={classes.debate}>
          <div style={{ width: "100px" }}>{"heads up debate:"}</div>
          <div
            className={classes.box}
            onClick={() => props.onClick(policies[debate])}
          >
            {policies[debate].title}
          </div>
        </div>
        <div ref={gridRef} className="grid-stack">
          {policies
            ? policies.map((policy, i) => (
                <div key={i} className={"grid-stack-item"}>
                  <div
                    className={`${"grid-stack-item-content"} ${classes.box}`}
                    onClick={() => props.onClick(policy)}
                  >
                    {policy.title}
                  </div>
                </div>
              ))
            : null}
        </div>
      </div>
    </div>
  );
}
