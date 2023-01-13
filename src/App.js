import React from "react";
import Carrousel, { CarrouselItem } from "./components/carrousel/carrousel";
import Header from "./components/header";
import Slider from "./components/slider/Slider";

function App() {
  return (
    <div className="App">
      <Slider />
      <Carrousel>
        <CarrouselItem>item 1</CarrouselItem>
        <CarrouselItem>item 2</CarrouselItem>
        <CarrouselItem>item 3</CarrouselItem>
      </Carrousel>
      <Header />
    </div>
  );
}

export default App;
