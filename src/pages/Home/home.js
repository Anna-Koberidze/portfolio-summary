import Carrousel from "../../components/Nav/Nav-components/carrousel/carrousel";
import Header from "./header/header";

import "./header/header.scss";
const Home = () => {
  return (
    <div>
      <Carrousel />
      <section id="--section1"></section>
      <Header />
    </div>
  );
};

export default Home;
