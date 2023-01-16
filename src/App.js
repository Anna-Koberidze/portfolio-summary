import React from "react";
import Carrousel from "./components/carrousel/carrousel";
import Header from "./components/header";
import Nav from "./components/Nav/Nav";

function App() {
  return (
    <div className="App">
      <Nav />
      <Carrousel />
      <Header />
    </div>
  );
}

export default App;
