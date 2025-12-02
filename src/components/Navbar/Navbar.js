import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import Time from "../Time/Time";

import classes from "./Navbar.module.scss";

export default function Navbar() {
  let navigate = useNavigate();

  const { t } = useTranslation();

  return (
    <header className={classes.header}>
      <div className={classes.logo} onClick={() => navigate("")}>
        {t("page.name")}
      </div>
      <Time className={classes.time} />
      <div></div>
    </header>
  );
}
