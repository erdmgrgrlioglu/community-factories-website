import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  KardeshevCounter,
  Card,
  Rates,
  Policies,
  Overlay,
} from "../../components";
import { GridStack } from "gridstack";
import { FaPlus, FaMinus } from "react-icons/fa";

import classes from "./Factories.module.scss";
import "gridstack/dist/gridstack.css";
import "gridstack/dist/gridstack.min.css";

export default function FactoriesPage() {
  const [overlay, setOverlay] = useState(null);
  const [zoom, setZoom] = useState(100);
  const gridRef = useRef(null);
  const [cards, setCards] = useState([0, 0, 0]);
  const stemGridRef = useRef(null);
  const [stemCards, setStemCards] = useState([0, 0, 0]);
  const { t, ready } = useTranslation();

  useEffect(() => {
    let options = {
      staticGrid: false,
      cellHeight: "163px",
      minRow: 1,
      acceptWidgets: "card",
      float: true,
      columnOpts: {
        columnMax: 500, //cigarettes
        columnWidth: 300,
        layout: "none",
      },
    };
    GridStack.init(options, gridRef.current);
    GridStack.init(options, stemGridRef.current);
    //const serializedData = [
    //{x: 0, y: 0, w: 2, h: 2},
    //{x: 2, y: 3, w: 3, content: 'item 2'},
    //{x: 1, y: 3}
    //];
    //
    //grid.load(serializedData);
    return () => {};
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
      <div className={classes.factories}>
        <KardeshevCounter />
        <div className={classes.buttons}>
          <FaPlus onClick={() => setZoom(zoom + 5)} color="#00aeef" />
          <FaMinus
            onClick={() => setZoom(zoom - (zoom < 20 ? 0 : 5))}
            color="#00aeef"
          />
        </div>
        <div style={{ zoom: zoom + "%", width: "100%", height: "100%" }}>
          <div ref={gridRef} className="grid-stack">
            <Policies
              policies={["87", "69", "42", "67"]}
              onClick={(o) => setOverlay(o)}
            />
            <Card
              title="Toothbrush"
              communities={["aaa", "bbb", "ccc", "ddd"]}
              onClick={() =>
                setOverlay({ objectPath: "objects/tooth-brush.obj" })
              }
            />
            {cards
              ? cards.map((v, i) => <Card key={i} title={"Factory " + i} />)
              : null}
          </div>
          <div className={classes.stem}>{"STEM"}</div>
          <div ref={stemGridRef} className="grid-stack">
            <Rates />
            {stemCards
              ? stemCards.map((v, i) => (
                  <Card key={i} title={"Factory " + (i + 1)} />
                ))
              : null}
          </div>
        </div>
      </div>
    </>
  );
}
