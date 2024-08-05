import styles from "./styles.module.scss";

function Planos() {
  return (
    <section id="Planos" className={styles.preco}>
      <h1 className={styles.title}>Planos</h1>
      <div className={styles.container}>
        <div className={styles.card}>
          <h1>Mensal</h1>
          <h2>R$ 65,00</h2>
          <a href="https://api.whatsapp.com/send/?phone=5598986109987&text=Ol%C3%A1%2C+gostaria+de+me+matricular+%21&type=phone_number&app_absent=0">
            <button>Matricule-se já</button>
          </a>
        </div>
        <div className={styles.card}>
          <h1>Trimestral</h1>
          <h2>R$ 179,90</h2>
          <h3>até 3x</h3>
          <a href="https://api.whatsapp.com/send/?phone=5598986109987&text=Ol%C3%A1%2C+gostaria+de+me+matricular+%21&type=phone_number&app_absent=0">
            <button>Matricule-se já</button>
          </a>
        </div>
        <div className={styles.card}>
          <h1>Semestral</h1>
          <h2>R$ 329,90</h2>
          <h3>até 6x</h3>
          <a href="https://api.whatsapp.com/send/?phone=5598986109987&text=Ol%C3%A1%2C+gostaria+de+me+matricular+%21&type=phone_number&app_absent=0">
            <button>Matricule-se já</button>
          </a>
        </div>
        <div className={styles.card}>
          <h1>Anual</h1>
          <h2>R$ 599,90</h2>
          <h3>até 12x</h3>
          <a href="https://api.whatsapp.com/send/?phone=5598986109987&text=Ol%C3%A1%2C+gostaria+de+me+matricular+%21&type=phone_number&app_absent=0">
            <button>Matricule-se já</button>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Planos;
