import CircularProgress from "@mui/material/CircularProgress";
import classes from "./loader.module.scss";

const Loader = () => {
  return (
    <div className={classes.laoder}>
      <CircularProgress />
    </div>
  );
};

export default Loader;
