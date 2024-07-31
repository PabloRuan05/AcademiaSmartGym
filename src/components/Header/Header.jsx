import styles from "./styles.module.scss";
import logosmartgym from "../../assets/img/logosmartgym.jpg";
function Header() {
  return (
    <header>
      <div className={styles.container}>
        <div className={styles.logo}>
          <a href="">SmartGym</a>
        </div>
        <nav>
          <ul>
            <li>
              <a href="">Início</a>
            </li>
            <li>
              <a href="#Sobre">Sobre</a>
            </li>
            <li>
              <a href="#Treinadores">Trainers</a>
            </li>
            <li>
              <a href="#Planos">Planos</a>
            </li>
            <li>
              <a href="#Contatos">Contatos</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
