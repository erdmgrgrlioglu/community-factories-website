import { useTranslation } from "react-i18next";

import { Button, Renderer } from "../../components/index";

import classes from "./Welcome.module.scss";
import { useNavigate } from "react-router-dom";
import Globe from "../../components/meshes/Globe/Globe";

export default function WelcomePage() {
  const { t, ready } = useTranslation();
  const navigate = useNavigate();

  if (!ready) {
    return <div>Loading...</div>;
  }

  return (
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
