import classes from "./about.module.scss";
import Logo from "../../static/Logo.svg";
import { useNavigate } from "react-router-dom";
import ParkIcon from "@mui/icons-material/Park";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";


export const About = () => {
  const navigate = useNavigate();
  return (
    <div className={classes.container}>
      <section className={classes["section-one"]}>
        <img
          className={classes["logo_about-us"]}
          src={Logo}
          alt="logo"
          onClick={() => navigate("/home")}
        />
        <KeyboardReturnIcon
        className={classes.backNavigation}
        onClick={() => navigate("/home")}
      />
        <div className={classes.details}>
          <button
            onClick={() => navigate("/home")}
            className={classes["back-button__mobile"]}
          >
            Оди назад
          </button>
          <h1>ЗA СОЈУЗ НА ИЗВИДНИЦИ НА МАКЕДОНИЈА</h1>
          <p>
            Сојузот на извидници на Македонија е национална извидничка
            организација и најголемата организација за деца и млади во РС.
            Македонија. Здружението е основано во 1953 година и има 70-годишно
            искуство во работа на неформално образование за деца и млади и е
            наследник на 115-годишната традиција на Извидничкото движење во
            земјата.
          </p>
        </div>
      </section>
      <section className={classes["section-two"]}>
        <div className={classes.details}>
          <h1>ЦЕЛИ</h1>

          <p>
            Целта на Сојузот на извидници на Македонија е да ги собере и поддржи
            активностите на здруженијата во однос на физичкиот, менталниот,
            духовниот, социјалниот и емоционалниот правилен развој и потенцијал
            на младите, согласно целта на Извидничкото движење.
          </p>
          <ul>
            <li>Целосен назив: Сојуз на извидници на Македонија</li>
            <li>ЕМБС: 4070305</li>
            <li>Адреса: Кукушка 4а, 1000 Скопје</li>
            <li>Телефон: +389 (0)2 ХХХ - ХХХ</li>
            <a href="mailto:info@borenka.mk">info@borenka.com</a>
          </ul>
        </div>
      </section>
      <section className={classes["section-tree"]}>
        <div className={classes.details}>
          <h1>ЗА БОРЕНКА</h1>
          <h2>
            НАЈГОЛЕМАТА ВОЛОНТЕРСКА ИНИЦИЈАТИВА ЗА ПОШУМУВАЊЕ НА ОПОЖАРЕНИ
            ПОДРАЧЈА
          </h2>
          <p>
            Во последните <b>2</b> години, РС. Македонија беше зафатена од
            повеќе од <b>500</b> шумски пожари со огромна финансиска штета.
            Пожарот е под влијание на многу фактори, вклучувајќи географија,
            клима, временски услови, топографија и човек. Во големите пожари се
            уништуваат екстремно големи површини шума. <br />
            <br />
            Во <b>2022</b> година, Сојузот на извидници на Македонија ја
            започнува најголемата волонтерска иницијатива за пошумување на
            опожарени подрачја. <br />
            <br />
            Проектот за пошумување се спроведува во партнерство со ЈП Национални
            шуми кои обезбедуваат подготовка на теренот, стручна помош,
            експертиза и надзор во дејствијата за садење.
          </p>
          <a target='_blank' href="https://www.facebook.com/borenkamk">Следи не на фејсбук</a>
        </div>
      </section>
      <section className={classes["section-four"]}>
        <div className={classes.details}>
          <h1>Секој може да биде дел од БОРЕНКА</h1>
          <h2>
            Помогни да се обојат местата на црните шумски пожари во зелени шуми
          </h2>
          <p>
            Како дел од акцијата БОРЕНКА, се користат т.н боренки - јаглени
            моливи направени од изгорени дрвја. <br />
            <br />
            Покрај волонтирањето, граѓаните можат да се вклучат во акциите за
            пошумување на уникатен начин користејќи ги овие БОРЕНКИ, можат да
            нацртаат сопствено дрво, да му дадат име и да го засадат во
            виртуелна шума. За секое засадено дрво на страницата, волонтерите на
            Борeнка ќе посадат вистински расад на опожарена земја. Симболички,
            нов живот произлегува од изгорено црно-бело дрво и се раѓа нова шума
            во боја. <br />
            <br />
            Доколку се брзате и немате време да цртате, можете да направите
            донација со уплата на 300000001203709 и со тоа да помогнете во
            пошумувањето.
          </p>
          <button onClick={() => navigate("/map")}>
            <ParkIcon />
            Посади дрво
          </button>
        </div>
      </section>
    </div>
  );
};
