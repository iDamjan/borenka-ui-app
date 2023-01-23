import classes from "./home.module.scss";
import tree from "../../static/tree.png";
import { useNavigate, useLocation } from "react-router-dom";
import Logo from "../../static/Logo.svg";
import { MobileDrawer } from "./HomeMobileDrawerMenu";
import ParkIcon from "@mui/icons-material/Park";

const pages = [
  { label: "Дома", path: "/home" },
  { label: "За нас", path: "/about" },
  { label: "Организатори", path: "/organizations" },
  { label: "Засади дрво", path: "/map" },
];

export const Home = () => {
  
  const navigate = useNavigate();
  const location = useLocation();
  const { pathname } = location;

  const animation = (
    <div className={classes.treeCircle} onClick={() => navigate("/map")}>
      <ParkIcon />
      <div className={`${classes.circle} ${classes.circle1}`}></div>
      <div className={`${classes.circle} ${classes.circle2}`}></div>
      <div className={`${classes.circle} ${classes.circle3}`}>Засади дрво</div>
    </div>
  );

  return (
    <div className={classes.container}>
      <div className={classes.navbar}>
        <div className={classes.navigations}>
          <>
            {pages.map((page) => (
              <span
                key={page.path}
                className={page.path === pathname ? classes.active : ""}
                onClick={() => navigate(page.path)}
              >
                {page.label}
              </span>
            ))}
          </>
        </div>
        <img src={Logo} alt="Logo" className={classes.navbar__logo} />
        <MobileDrawer />
      </div>
      <img className = {classes.tree} src={tree} alt="tree" />
      <h2>
        Нацртај дрво, засади го во виртуелната шума и стани дел од БОРЕНКА -
        иницијатива за пошумување на опожарени подрачја во РС Македонија
      </h2>
      {animation}
    </div>
  );
};
