import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Renderer, Circle } from "../../components";

import classes from "./Communities.module.scss";

export default function CommunitiesPage() {
  const { t, ready } = useTranslation();
  const [communities, setCommunities] = useState([]);

  return !ready ? (
    <div>Loading...</div>
  ) : (
    <>
      <div className={classes.overlay}>
        <button
          onClick={() =>
            setCommunities([
              ...communities,
              {
                id: communities.length + 1,
                radius: (communities.length + 1) * 0.01,
              },
            ])
          }
        >
          add item
        </button>
      </div>
      <Renderer
        objects={communities.map((c) => (
          <Circle
            key={c.id}
            args={[c.radius, c.radius > 0.5 ? Math.round(c.radius * 40) : 20]}
            mass={c.id / 5}
            position={[
              (c.id * (Math.random() > 0.5 ? -1 : 1) * Math.random()) / 5,
              (c.id * (Math.random() > 0.5 ? -1 : 1) * Math.random()) / 5,
              0,
            ]}
          />
        ))}
      />
    </>
  );
}
