import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { GridStack } from "gridstack";
import Card from "../../components/Card/Card";

import classes from "./Factories.module.scss";
import "gridstack/dist/gridstack.css";
import "gridstack/dist/gridstack.min.css";

export default function FactoriesPage() {
  const { t, ready } = useTranslation();
  const grids = document.querySelector("#grid-stack");

  useEffect(() => {
    // Initialize Gridstack inside useEffect so that DOM is rendered when its initialized
    console.log(grids);
    GridStack.initAll({
      cellHeight: "20vh",
      minRow: 1,
      acceptWidgets: true,
      float: true,
      columnOpts: {
        breakpointForWindow: false,
        breakpoints: [
          { w: 200, c: 1 },
          { w: 600, c: 3 },
          { w: 1200, c: 6 },
          { w: 1600, c: 8 },
          { w: 2000, c: 10 },
          { w: 2400, c: 12 },
          { w: 4000, c: 20 },
          { w: 6000, c: 30 },
        ],
        layout: "scale",
      },
    }).forEach((grid) =>
      grid.getGridItems().forEach((item) => {
        console.log(item);
      })
    );
    //console.log(grids);
    //const serializedData = [
    //{x: 0, y: 0, w: 2, h: 2},
    //{x: 2, y: 3, w: 3, content: 'item 2'},
    //{x: 1, y: 3}
    //];
    //
    //grid.load(serializedData);
  });

  if (!ready) return <div>Loading...</div>;

  return (
    <div className={classes.page}>
      <div className={classes.expand}>
        <svg className={classes.line} width="500" height="500">
          <line x1="50" y1="50" x2="350" y2="350" stroke="black" />
        </svg>
        <div className="grid-stack">
          <div className={"grid-stack-item"}>
            <Card className={"grid-stack-item-content"} title="Factory1" />
          </div>
          <div className={"grid-stack-item"}>
            <Card className={"grid-stack-item-content"} title="Factory1" />
          </div>
          <div className={"grid-stack-item"}>
            <Card className={"grid-stack-item-content"} title="Factory1" />
          </div>
          <div className={"grid-stack-item"}>
            <Card className={"grid-stack-item-content"} title="Factory2" />
          </div>
          <div className={"grid-stack-item"}>
            <Card className={"grid-stack-item-content"} title="Factory3" />
          </div>
        </div>
        <div className={classes.stem}>STEM</div>
        <div className={classes.expand}>
          <div className="grid-stack">
            <div className={"grid-stack-item"}>
              <Card
                className={"grid-stack-item-content"}
                title="Factory1"
              ></Card>
            </div>
            <div className={"grid-stack-item"}>
              <Card
                className={"grid-stack-item-content"}
                title="Factory2"
              ></Card>
            </div>
            <div className={"grid-stack-item"}>
              <Card
                className={"grid-stack-item-content"}
                title="Factory3"
              ></Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
