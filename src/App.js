import { } from './GlobalStyles/styles.module.scss'
import Banner from './components/Banner/Banner';
import Contatos from './components/Contatos/Contatos';
import Header from "./components/Header/Header";
import Planos from './components/Planos/Planos';
import Sobre from './components/Sobre/Sobre'
import Treinadores from './components/Treinadores/Treinadores';
import Footer from './components/Footer/Footer'
function App() {
  return (
    <>
      <Header />
      <Banner />
      <Sobre />
      <Treinadores />
      <Planos />
      <Contatos />
      <Footer />
    </>
  );
}

export default App;
