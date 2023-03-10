import Map from "./map/Map";
import Logo from "../../static/Logo.svg";
import { useState } from "react";
import classes from "./choose-region.module.scss";
import { useNavigate } from "react-router-dom";
import ReplyAllIcon from "@mui/icons-material/ReplyAll";
import { MobileDrawer } from "../home/HomeMobileDrawerMenu";
import { motion as m } from "framer-motion";
import { ModalInstructions } from "./modal-instructions/ModalInstructions";
import backgroundTrees from "../../static/background-trees.jpg";
import { WrongRegionModal } from "./wrong-region-modal/WrongRegionModal";

const ChooseRegion = () => {
  const [currentHoveredRegion, setCurrentHoveredRegion] = useState<string>(
    "Избери регион и посади виртуелно дрво"
  );
  const navigate = useNavigate();

  const myStyle = {
    backgroundImage: `url(${backgroundTrees})`,
  };
  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className={classes.container}
      style={myStyle}
    >
      <ModalInstructions />
      <WrongRegionModal />
      <div className={classes["container__header"]}>
        <img src={Logo} alt="logo" onClick={() => navigate("/home")} />
        <MobileDrawer />

        <ReplyAllIcon
          sx={{ fontSize: "60px" }}
          className={classes.backNavigation}
          onClick={() => navigate("/home")}
        />
        <h1>{currentHoveredRegion}</h1>
      </div>
      <Map setCurrentHoveredRegion={setCurrentHoveredRegion} />
      <h1 className={classes.mobileHeading}>
        Избери регион и посади виртуелно дрво
      </h1>
    </m.div>
  );
};

export default ChooseRegion;
