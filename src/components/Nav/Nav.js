import sliderData from "../carrousel/Data";
const Nav = () => {
  return (
    <nav className="first-nav">
      {sliderData.map((slide, index) => {
        return (
          <button key={index} className={`nav ${slide.btnClassName}`}>
            {slide.button}
          </button>
        );
      })}
    </nav>
  );
};
export default Nav;
