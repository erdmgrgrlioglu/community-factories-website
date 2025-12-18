import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  KardeshevCounter,
  Card,
  Rates,
  Policies,
  Overlay,
  Zoom,
} from "../../components";
import { GridStack } from "gridstack";

import { jigglyGoos, units } from "../../Functions";

import classes from "./Factories.module.scss";
import "gridstack/dist/gridstack.min.css";
import "./Factories.css";

export default function FactoriesPage() {
  const [overlay, setOverlay] = useState(null);
  const gridRef = useRef(null);
  const [cards, setCards] = useState([
    {
      title: "toothbrush",
      communities: ["a", "b", "c", "d"],
      energy: "10",
      object: "objects/tooth-brush.obj",
      scale: 0.4,
    },
  ]);
  const stemGridRef = useRef(null);
  const [stemCards, setStemCards] = useState([
    {
      title: "energy",
      communities: ["sun", "SPARC"],
      energy: "4600000000000000",
    },
    {
      title: "elements",
      communities: ["stars"],
      element: (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "auto auto auto auto auto",
          }}
        >
          {jigglyGoos().map((v, i) => (
            <div key={i}>{v.name}</div>
          ))}
        </div>
      ),
    },
    {
      title: "compounds pokedex",
      communities: ["chemistry"],
    },
    {
      title: "units",
      communities: ["physics"],
      element: units.map((v, i) => <div key={i}>{v[0] + " " + v[1]}</div>),
    },
    {
      title: "atom",
      communities: ["physics"],
      object: "objects/atom.obj",
      scale: 4,
    },
  ]);
  const { t, ready } = useTranslation();

  useEffect(() => {
    let options = {
      cellHeight: "163px",
      minRow: 1,
      float: true,
      resizable: { handles: "all" },
      columnOpts: {
        columnMax: 500, //cigarettes
        columnWidth: 300,
        layout: "none",
        acceptWidgets: ".card",
      },
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
      {overlay ? (
        <Overlay value={overlay} onClick={() => setOverlay(null)} />
      ) : null}
      <div className={classes.factories}>
        <KardeshevCounter />
        <Zoom>
          <div ref={gridRef} className="grid-stack">
            <Policies onClick={(policy) => setOverlay(policy)} />
            {cards
              ? cards.map((factory, i) => (
                  <Card
                    value={factory}
                    key={i}
                    onClick={() => setOverlay(factory)}
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
                    value={factory}
                    key={i}
                    onClick={() => setOverlay(factory)}
                  />
                ))
              : null}
          </div>
        </Zoom>
      </div>
    </>
  );
}
