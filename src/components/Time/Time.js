import { useEffect, useState } from "react";

export default function Time(props) {
  const [clock, setClock] = useState("");

  function getTime() {
    var date = new Date();

    var diff = date - new Date(date.getFullYear(), 0, 0);
    var oneDay = 1000 * 60 * 60 * 24;
    var day = Math.floor(diff / oneDay);

    return [
      date.getFullYear().toString().padStart(5, "1"),
      ":",
      day,
      ":",
      Math.round((date.getHours() / 24) * 100),
      ":",
      Math.round((date.getMinutes() / 60) * 100),
      ":",
      date.getSeconds(),
    ].join("");
  }

  useEffect(() => {
    setClock(getTime()); // set on load
    setInterval(() => setClock(getTime()), 500); // update every half second
  }, []);

  return <div className={props.className}>{clock}</div>;
}
