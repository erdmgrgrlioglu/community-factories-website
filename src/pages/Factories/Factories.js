import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  KardeshevCounter,
  Card,
  Rates,
  Policies,
  Overlay,
} from "../../components";
import { GridStack } from "gridstack";

import classes from "./Factories.module.scss";
import "gridstack/dist/gridstack.css";
import "gridstack/dist/gridstack.min.css";

export default function FactoriesPage() {
  const [cards, setCards] = useState([
    0,
    0,
    0, //0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    //0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  ]);
  const [stemCards, setStemCards] = useState([
    0,
    0,
    0, //0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    //0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  ]);
  const [overlay, setOverlay] = useState(null);
  const { t, ready } = useTranslation();

  let grids;

  let scaleX = 1;
  let scaleY = 1;

  const updateScaleCssVariable = () => {
    document
      .getElementById("scale")
      .setProperty("--global-scale-x", `${scaleX}`);
    document
      .getElementById("scale")
      .setProperty("--global-scale-y", `${scaleY}`);
  };

  const zoomIn = () => {
    const scaleStep = scaleX < 1 ? 0.05 : 0.1;
    scaleX += scaleStep;
    scaleY += scaleStep;
    updateScaleCssVariable();
  };

  const zoomOut = () => {
    if (scaleX >= 0.2 && scaleY >= 0.2) {
      const scaleStep = scaleX < 1 ? 0.05 : 0.1;
      scaleX -= scaleStep;
      scaleY -= scaleStep;
      updateScaleCssVariable();
    }
  };

  useEffect(() => {
    grids = GridStack.initAll({
      cellHeight: "163px",
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

    console.log(grids);
    //const serializedData = [
    //{x: 0, y: 0, w: 2, h: 2},
    //{x: 2, y: 3, w: 3, content: 'item 2'},
    //{x: 1, y: 3}
    //];
    //
    //grid.load(serializedData);
  }, []);
  //<svg className={classes.line} width="500" height="500">
  //  <line x1="50" y1="50" x2="350" y2="350" stroke="black" />
  //</svg>
  return !ready ? (
    <div>Loading...</div>
  ) : (
    <>
      {overlay == null ? null : (
        <Overlay overlay={overlay} onClick={() => setOverlay(null)} />
      )}
      <div className={classes.page}>
        <KardeshevCounter />
        <div id="scale" className={classes.scale}>
          <button onClick={() => zoomIn()}>in</button>
          <button onClick={() => zoomOut()}>out</button>
          <div className="grid-stack">
            <div className={"grid-stack-item"} gs-h="3" gs-w="2">
              <Policies
                className={"grid-stack-item-content"}
                policies={["87", "69", "42", "67"]}
                onClick={(o) => setOverlay(o)}
              />
            </div>
            <div className={"grid-stack-item"}>
              <Card
                className={"grid-stack-item-content"}
                communities={[
                  "aaa",
                  "bbbasdsas",
                  "ccc",
                  "ddd",
                  "bbbasdsas",
                  "ccc",
                  "ddd",
                  "bbbasdsas",
                  "ccc",
                  "ddd",
                  "bbbasdsas",
                  "ccc",
                  "ddd",
                  "bbbasdsas",
                  "ccc",
                  "ddd",
                  "bbbasdsas",
                  "ccc",
                  "ddd",
                ]}
                title="Factory Test"
              />
            </div>
            {cards
              ? cards.map((v, i) => (
                  <div key={i} className={"grid-stack-item"}>
                    <Card
                      className={"grid-stack-item-content"}
                      title={"Factory " + i}
                    />
                  </div>
                ))
              : null}
          </div>
          <div className={classes.stem}>{"STEM"}</div>
          <div className="grid-stack">
            <div className={"grid-stack-item"} gs-h="3" gs-w="2">
              <Rates className={"grid-stack-item-content"} />
            </div>
            {stemCards
              ? stemCards.map((v, i) => (
                  <div key={i} className={"grid-stack-item"}>
                    <Card
                      className={"grid-stack-item-content"}
                      title={"Factory " + (i + 1)}
                    />
                  </div>
                ))
              : null}
          </div>
        </div>
      </div>
    </>
  );
}
