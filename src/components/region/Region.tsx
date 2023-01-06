import classes from "./region.module.scss";
import { data } from "../../region-data";
import { useParams } from "react-router-dom";
import UploadModal from "../modal/UploadModal";
import { useNavigate } from "react-router-dom";
import Logo from "../../static/Logo.svg";
import { UploadModalMobile } from "../modal/UploadModalMobile";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";

export const Region = () => {
  const { regionId } = useParams();
  const navigate = useNavigate();

  const region = data.find((region) => region.id === regionId);
  const regionImage = region?.image;

  return (
    <div className={classes.container}>
      <img
        className={classes.logo}
        src={Logo}
        alt="Region"
        onClick={() => navigate("/home")}
      />
      <KeyboardReturnIcon
        className={classes.backNavigation}
        onClick={() => navigate("/map")}
      />
      <UploadModalMobile />
      <div className={classes.desktopModal}>
        <UploadModal />
      </div>
      <img className={classes.region} src={regionImage} alt={region?.id} />
    </div>
  );
};
