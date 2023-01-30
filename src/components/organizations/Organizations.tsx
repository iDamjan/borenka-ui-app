import classes from "./organizations.module.scss";
import { useNavigate } from "react-router-dom";
import LogoWhite from "../../static/logo-white.svg";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";
import LogoScouts from "../../static/LogoScouts.png";
import LogoNacionalniShumi from "../../static/LogoNacionalniShumi.png";
import LogoZivotnaSredina from "../../static/LogoZivotnaSredina.png";
import LogoZemjodelstvo from "../../static/LogoZemjodelstvo.png";
import LogoUSA from "../../static/LogoUSA.png";

export const Organizations = () => {
  const navigate = useNavigate();
  return (
    <div className={classes.container}>
      <section className={classes["section-one"]}>
        <img
          src={LogoWhite}
          alt="Logo-white"
          className={classes["logo_organizations"]}
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
          <h1>ЗА ОРГАНИЗАТОРИТЕ</h1>
          <h2>Сојуз на извидници на Македонија</h2>
          <p>
            ИЗВИДНИЦИТЕ СЕ НАЈГОЛЕМОТО И НАЈМОЌНОТО МЛАДИНСКО ДВИЖЕЊЕ ВО СВЕТОТ
            СО НАД 50 МИЛИОНИ ЧЛЕНОВИ <br />
            <br />
            Мисијата на Сојузот на Извидници на Македонија е да придонесе во
            образованието на младите луѓе, низ систем на вредности засновани врз
            Извидничкиот Завет и Закони, да помогне и изгради подобар свет каде
            што луѓето се самоисполнети како индивидуи и имаат конструктивна
            улога во општествотo <br />
            <br />
            СИМ релевантна, атрактивна и самоодржлива организација која
            обединува млади луѓе преку современа прогресивна програма која ги
            исполнува општествените потреби на младите и го гради нивниот
            карактер врз база на позитивните извиднички вредности и приципи.
          </p>
        </div>
      </section>
      <section className={classes["section-two"]}>
        <div className={classes.details}>
          <h1>Јавно претпријатие</h1>
          <h1>НАЦИОНАЛЈИ ШУМИ - во партнерство со природата</h1>
          <h2>
            ПРЕТПРИЈАТИЕ КОЕ СТОПАНИСУВА СО ШУМИ И ШУМСКО ЗЕМЈИШТЕ ВО
            СОПСТВЕНОСТ НА РС МАКЕДОНИЈА
          </h2>
          <p>
            Шумите се природно добро од општ интерес, а стопанисувањето со
            шумите е дејност од јавен интерес. Со Законот за шуми утврдени се
            основните дејности, а тоа се:
            <br />
            - Стопанисување со шумите во државна сопственост, во што спаѓа
            одгледување, заштита и користење на шумите, со чие извршување
            претпријатието треба да обезбеди трајно зачувување и зголемување на
            вредноста на шумите, како и постојано зголемување на нивниот прираст
            и на нивните општокорисни функции.
            <br />- Претпријатието врши и други дејности, кои се во врска со
            основните дејности, а придонесуваат за подобро искористување на
            капацитетите на претпријатието. Такви дејности се: лов, одгледување
            на дивеч, собирање и доработка на други шумски производи, ловен
            туризам и др.
          </p>
        </div>
      </section>
      <section className={classes["section-tree"]}>
        <div className={classes.details}>
          <h1>ПОКРОВИТЕЛИ</h1>
          <h2>Министерство за земјоделство, шумарство и водостопанство</h2>
          <h2>Министерство за животна средина и просторно планирање</h2>
        </div>
      </section>
      <section className={classes["section-four"]}>
        <div className={classes["organizations-logo"]}>
          <h1>Организатори - Покровители</h1>
          <img src={LogoScouts} alt="logo-scoutss" />
          <img src={LogoNacionalniShumi} alt="logo-nacionalni-shumi" />
          <img src={LogoZivotnaSredina} alt="logo-zivotna-sredina" />
          <img src={LogoZemjodelstvo} alt="logo-zemjodelstvo" />
        </div>
      </section>
      <section className={classes["section-five"]}>
        <div className={classes.usaSupport}>
          <h1>Oвој проект е поддржан од Амбасада на САД</h1>
          <h2>
            Мислењата, откритијата и заклучоците или препораките изнесени овде
            се на имплементаторите/ авторите, и не ги одразуваат оние на Владата
            на САД
          </h2>
          <img src={LogoUSA} alt="LogoUSA" />
        </div>
        <h2>
          За сите информации обратете ни се на :{" "}
          <a href="mailto:info@borenka.mk">info@borenka.com</a>
        </h2>
      </section>
    </div>
  );
};