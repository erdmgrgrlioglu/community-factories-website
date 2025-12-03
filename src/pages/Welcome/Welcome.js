import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Button, Renderer, Globe } from "../../components/index";

import classes from "./Welcome.module.scss";

export default function WelcomePage() {
  const navigate = useNavigate();
  const { t, ready } = useTranslation();

  return !ready ? (
    <div>Loading...</div>
  ) : (
    <>
      <div className={classes.overlay}>
        <div className={classes.bold}>{t("page.welcome.title")}</div>
        <div className={classes.buttons}>
          <Button
            text="Connect to a Factory"
            onClick={() => navigate("/factories")}
          />
          <div />
          <Button
            text="Find your community"
            onClick={() => navigate("/communities")}
          />
        </div>
      </div>
      <Renderer objects={<Globe />} />
    </>
  );
}
