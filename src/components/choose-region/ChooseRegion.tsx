import { useState } from "react";
import Map from "./map/Map";
import Logo from "../../static/Logo.svg";
import classes from "./choose-region.module.scss";
import { useNavigate } from "react-router-dom";

export const ChooseRegion = () => {
  const [currentHoveredRegion, setCurrentHoveredRegion] = useState<string>(
    "Избери регион и посади виртуелно дрво"
  );
  const navigate = useNavigate();

  return (
    <div className={classes.container}>
      <div className={classes["container__header"]}>
        <img src={Logo} alt="logo" onClick={() => navigate("/home")} />
        <h1>{currentHoveredRegion}</h1>
      </div>
      <Map setCurrentHoveredRegion = {setCurrentHoveredRegion}/>
      <h1 className={classes.mobileHeading}>Избери регион и посади виртуелно дрво</h1>
    </div>
  );
};
