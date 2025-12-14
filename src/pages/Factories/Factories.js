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

import classes from "./Factories.module.scss";
import "gridstack/dist/gridstack.css";
import "gridstack/dist/gridstack.min.css";
import Zoom from "../../components/Zoom/Zoom";

export default function FactoriesPage() {
  const [overlay, setOverlay] = useState(null);
  const gridRef = useRef(null);
  const [cards, setCards] = useState([
    {
      title: "toothbrush",
      communities: ["a", "b", "c", "d"],
      energy: "10",
      object: "objects/tooth-brush.obj",
    },
  ]);
  const stemGridRef = useRef(null);
  const [stemCards, setStemCards] = useState([
    {
      title: "energy",
      communities: ["sun"],
      energy: "4600000000000000",
      text: "a",
    },
    {
      title: "elements",
      communities: ["stars"],
    },
    {
      title: "compounds pokedex",
      communities: ["chemistry"],
    },
    {
      title: "units",
      communities: ["physics"],
    },
  ]);
  const { t, ready } = useTranslation();

  useEffect(() => {
    let options = {
      staticGrid: false,
      cellHeight: "163px",
      minRow: 1,
      acceptWidgets: ".card",
      float: true,
      columnOpts: {
        columnMax: 500, //cigarettes
        columnWidth: 300,
        layout: "none",
      },
      alwaysShowResizeHandle: false,
    };
    const grid = GridStack.init(options, gridRef.current);
    const stemGrid = GridStack.init(options, stemGridRef.current);
    //const serializedData = [
    //{x: 0, y: 0, w: 2, h: 2},
    //{x: 2, y: 3, w: 3, content: 'item 2'},
    //{x: 1, y: 3}
    //];
    console.log(grid.save());
    //grid.load(serializedData);
    return () => {};
  }, []);

  return !ready ? (
    <div>Loading...</div>
  ) : (
    <>
      {overlay == null ? null : (
        <Overlay overlay={overlay} onClick={() => setOverlay(null)} />
      )}
      <div className={classes.factories}>
        <KardeshevCounter />
        <Zoom>
          <div ref={gridRef} className="grid-stack">
            <Policies onClick={(policy) => setOverlay(policy)} />
            {cards
              ? cards.map((factory, i) => (
                  <Card
                    key={i}
                    title={factory.title ? factory.title : "Factory " + i}
                    communities={factory.communities}
                    onClick={() => setOverlay(factory)}
                    energy={factory.energy}
                  />
                ))
              : null}
          </div>
          <div className={classes.stem}>{"STEM"}</div>
          <div ref={stemGridRef} className="grid-stack">
            <Rates />
            {stemCards
              ? stemCards.map((factory, i) => (
                  <Card
                    key={i}
                    title={factory.title ? factory.title : "Factory " + i}
                    communities={factory.communities}
                    onClick={() => setOverlay(factory)}
                    energy={factory.energy}
                  />
                ))
              : null}
          </div>
        </Zoom>
      </div>
    </>
  );
}
