import classes from "./about.module.scss";
import Logo from "../../static/Logo.svg";
import { useNavigate } from "react-router-dom";
import ParkIcon from "@mui/icons-material/Park";
import ReplyAllIcon from "@mui/icons-material/ReplyAll";
import { motion as m } from "framer-motion";

const About = () => {
  const navigate = useNavigate();
  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
      className={classes.container}
    >
      <section className={classes["section-one"]}>
        <img
          className={classes["logo_about-us"]}
          src={Logo}
          alt="logo"
          onClick={() => navigate("/home")}
        />
        <ReplyAllIcon
          sx={{ fontSize: "60px" }}
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
          <div className={classes.sectionOneContent}>
            <div className={classes.partOne}>
              <h1>За ЈП „НАЦИОНАЛНИ ШУМИ“</h1>
              <m.p
                initial={{ opacity: 0, x: -200 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                ЈП „Национални шуми“ е јавно претпријатие основано со oдлука на
                Владата на РМ во 1997 год. чие примарна деј-ност е да
                стопанисува со површина од 935.000ха шуми, од кои 817.000ха или
                90% од вкупниот шумски фонд што се во државна сопственост. Под
                стопанисување на шуми-те се подразбира одгледување, заштита и
                користење на шумите, со чие извршување претпријатието треба да
                обезбеди трајно зачувување и зголемување на вредноста на шумите,
                како и постојано зголемување на нивниот прираст и на нивните
                општокорисни функции.
              </m.p>
            </div>
            <div className={classes.partTwo}>
              <h1>ЗA СОЈУЗ НА ИЗВИДНИЦИ НА МАКЕДОНИЈА</h1>
              <m.p
                initial={{ opacity: 0, x: 200 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                Сојузот на извидници на Македонија е национална извидничка
                организација и најголемата организација за деца и млади во РС.
                Македонија. Здружението е основано во 1953 година и има
                70-годишно искуство во работа на неформално образование за деца
                и млади и е наследник на 115-годишната традиција на Извидничкото
                движење во земјата.
              </m.p>
              <h1>МИСИЈА</h1>
              <m.p
                initial={{ opacity: 0, x: 200 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                Мисијата на извидништвото треба да придонесе за едукација на
                младите луѓе, преку систем на вредности заснован на извидничкиот
                завет и законот, да помогне во изградбата на подобар свет во кој
                луѓето ќе се реализираат како поединци и ќе имаат конструктивна
                улога во општеството
              </m.p>
            </div>
          </div>
        </div>
      </section>
      <section className={classes["section-tree"]}>
        <m.div
          initial={{ opacity: 0, y: -200 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className={classes.details}
        >
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
          <a href="https://www.facebook.com/borenkamk">Следи не на фејсбук</a>
        </m.div>
      </section>
      <section className={classes["section-four"]}>
        <m.div
          initial={{ opacity: 0, y: -200 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className={classes.details}
        >
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
            Засади дрво
          </button>
        </m.div>
      </section>
    </m.div>
  );
};

export default About;