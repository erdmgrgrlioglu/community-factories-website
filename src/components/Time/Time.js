import { useEffect, useState } from "react";

export default function Time(props) {
  const [clock, setClock] = useState(getTime());

  function getTime() {
    var date = new Date();

    var diff = date - new Date(date.getFullYear(), 0, 0);
    var oneDay = 1000 * 60 * 60 * 24;
    var day = Math.floor(diff / oneDay);

    return [
      date.getFullYear().toString().padStart(5, "1"),
      ":",
      date.valueOf().toString().substring(0, 10),
    ].join("");
  }

  useEffect(() => {
    setInterval(() => setClock(getTime()), 100);
    return () => {};
  }, []);

  return <div className={props.className}>{clock}</div>;
}
