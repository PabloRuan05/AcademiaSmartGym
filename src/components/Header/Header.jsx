import styles from "./styles.module.scss";
import { IoMdMenu } from "react-icons/io";

function Header() {
  function MostrarNavbar() {
    document.getElementsByTagName("nav").style.width = "250px";
  }
  return (
    <header>
      <div className={styles.container}>
        <div className={styles.logo}>
          <a href="index.hmtl">SmartGym</a>
        </div>

        <nav>
          <ul>
            <li>
              <a href="index.html">Início</a>
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
        <button onClick={MostrarNavbar}>
          <IoMdMenu />
        </button>
      </div>
    </header>
  );
}

export default Header;
