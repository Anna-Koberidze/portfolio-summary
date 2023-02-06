import Carrousel from "../../components/Nav/Nav-components/carrousel/carrousel";
import Header from "./header/header";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div>
      <Carrousel />
      <Header />
      <section id="--section1"></section>
      <button>
        <Link to="/Resume">next→</Link>
      </button>
    </div>
  );
};

export default Home;
