import style from "./styles.module.scss";
import logo from "../../assets/img/logosmartgym.jpg";
import comece from "../../assets/img/insta/comece.jpg";
import beneficios from "../../assets/img/insta/beneficios.jpg";
import avaliacao from "../../assets/img/insta/avaliacao.jpg";
import melhorar from "../../assets/img/insta/melhorar.jpg";
import { FaWhatsapp } from "react-icons/fa6";

function Contatos() {
  return (
    <section id="Contatos" className={style.contatos}>
      <h1>Já segue a gente no Instagram ?</h1>
      <div className={style.container}>
        <div className={style.perfil}>
          <img src={logo} alt="" />
          <a href="https://www.instagram.com/acad.smartgym/">
            <h4>acad.smartgym</h4>
          </a>
        </div>
        <div className={style.container2}>
          <a
            target="blank"
            href="https://www.instagram.com/p/CwiQVDyLxWs/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
          >
            <img src={comece} alt="" />
          </a>
          <a
            target="blank"
            href="https://www.instagram.com/p/C7W0raCA_Yo/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
          >
            <img src={beneficios} alt="" />
          </a>
          <a
            target="blank"
            href="https://www.instagram.com/p/Cyy4lyPPluc/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
          >
            <img src={avaliacao} alt="" />
          </a>
          <a
            target="blank"
            href="https://www.instagram.com/p/CzEydZ6P264/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
          >
            <img src={melhorar} alt="" />
          </a>
        </div>
      </div>
      <div className={style.whats}>
        <h3>Chame-nos no Whatsapp:</h3>
        <a href="https://api.whatsapp.com/send?phone=55989886109987">
          <button>
            <FaWhatsapp />
            Whatsapp
          </button>
        </a>
      </div>
    </section>
  );
}

export default Contatos;
