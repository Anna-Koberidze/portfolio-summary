// import Carrousel from "../../components/Nav/Nav-components/carrousel/carrousel";

import Carousel from "../../components/Nav/Nav-components/carrousel/carousel-component";
import Header from "./header/header";

import "./header/header.scss";
const Home = () => {
  return (
    <div>
      {/* <Carrousel /> */}
      <Carousel />
      <section id="--section1"></section>
      <Header />
    </div>
  );
};

export default Home;
