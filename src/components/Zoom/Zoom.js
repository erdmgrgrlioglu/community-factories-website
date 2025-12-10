import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

export default function Zoom(props) {
  const [zoom, setZoom] = useState(100);

  return (
    <>
      <div style={{ paddingLeft: "20px", width: "100%" }}>
        <FaPlus onClick={() => setZoom(zoom + 5)} color="#00aeef" />
        <FaMinus
          onClick={() => setZoom(zoom - (zoom < 20 ? 0 : 5))}
          color="#00aeef"
        />
      </div>
      <div style={{ zoom: zoom + "%", width: "100%", height: "100%" }}>
        {props.children}
      </div>
    </>
  );
}
