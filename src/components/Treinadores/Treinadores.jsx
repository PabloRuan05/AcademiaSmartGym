import style from "./styles.module.scss";
import daniel from "../../assets/img/daiel.jpg";
import victor from "../../assets/img/victor.jpg";
import { FaInstagram, FaWhatsapp } from "react-icons/fa6";

function Treinadores() {
  return (
    <section id="Treinadores" className={style.treinadores}>
      <h1 className={style.title}>Personal Trainers</h1>
      <div className={style.container}>
        <div className={style.card}>
          <img src={daniel} alt="" />
          <h1 className={style.cardtitle}>Daniel Coelho</h1>
          <div className={style.linkwrapper}>
            <a
              className={style.insta}
              target="blank"
              href="https://www.instagram.com/danielcoelho_16/"
            >
              <FaInstagram />
            </a>
            <a
              className={style.whats}
              target="blank"
              href="https://api.whatsapp.com/send/?phone=5598986109987&text=Ol%C3%A1%2C+gostaria+de+falar+com+o+professor+Daniel%21&type=phone_number&app_absent=0"
            >
              {" "}
              <FaWhatsapp />
            </a>
          </div>
        </div>
        <div className={style.card}>
          <img src={victor} alt="" />
          <h1 className={style.cardtitle}>Victor Valadares</h1>
          <div className={style.linkwrapper}>
            <a
              className={style.insta}
              target="blank"
              href="https://www.instagram.com/victorpersonaltrainer10/"
            >
              <FaInstagram />
            </a>
            <a
              className={style.whats}
              target="blank"
              href="https://api.whatsapp.com/send/?phone=5598986109987&text=Ol%C3%A1%2C+gostaria+de+falar+com+o+professor+Victor%21&type=phone_number&app_absent=0"
            >
              {" "}
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Treinadores;
