import styles from "./styles.module.scss";
import imgsobre from "../../assets/img/sobreimg.jpg";
function Sobre() {
  return (
    <section id="Sobre" className={styles.sobre}>
      <h1>Sobre</h1>
      <div className={styles.container}>
        <div className={styles.card}>
          <p>
            Quer alcançar seus objetivos fitness e transformar seu corpo de
            maneira incrível? Você está no lugar certo !
          </p>
        </div>
        <div className={styles.cardhf}>
          <h2>Horário de Funcionamento</h2>
          <div className={styles.list}>
            <h4>Segunda a Sexta</h4>
            <h6>5:30 ás 22:30</h6>
            <h4>Sábado</h4>
            <h6>5:30 ás 16:30</h6>
            <h4>Domingo</h4>
            <h6>Fechado</h6>
          </div>
        </div>
        <div className={styles.cardloc}>
          <h2>Localização</h2>
          <div className={styles.mapbox}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3985.705255900066!2d-44.18733292426823!3d-2.6018433384807116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7f69be3013b560f%3A0xb2c2e64d9cb7f1ba!2sAcademia%20Smart%20Gym!5e0!3m2!1spt-BR!2sbr!4v1722048074891!5m2!1spt-BR!2sbr"
              width="450"
              height="200"
              // style="border:0;"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Sobre;
