import { Outlet, Link } from "react-router-dom";
import "./layouts.scss";
import "../Contacts/Contacts.scss";
import { useSelector, useDispatch } from "react-redux";
import {
  setInitial,
  setBlue,
  setGold,
  setPink,
} from "../../store/reducers/themeSlice";
const Layout = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.theme);
  let navContainerClassName;
  let linkClassName;
  switch (theme) {
    case 1:
      navContainerClassName = "initial";
      linkClassName = "initial";
      break;
    case 2:
      navContainerClassName = "blueTheme";
      linkClassName = "blueTheme";
      break;
    case 3:
      navContainerClassName = "goldTheme";
      linkClassName = "goldTheme";
      break;
    case 4:
      navContainerClassName = "pinkTheme";
      linkClassName = "pinkTheme";
      break;
  }
  return (
    <>
      <div
        className={`navigation-bar-container ${
          navContainerClassName ? navContainerClassName : ""
        }`}
      >
        <div className="theme-chooser">
          <button className="initial" onClick={() => dispatch(setInitial())}>
            initial
          </button>
          <button className="blue" onClick={() => dispatch(setBlue())}>
            blue
          </button>
          <button className="gold" onClick={() => dispatch(setGold())}>
            gold
          </button>
          <button className="pink" onClick={() => dispatch(setPink())}>
            pink
          </button>
        </div>
        <nav>
          <div>
            <Link to="/" className={`layout-link-${linkClassName} indHover`}>
              Home
            </Link>
          </div>

          <div>
            <Link
              to="/Resume"
              className={`layout-link-${linkClassName} indHover`}
            >
              Resume
            </Link>
          </div>
          <div>
            <Link
              to="/Projects"
              className={`layout-link-${linkClassName} indHover`}
            >
              Projects
            </Link>
          </div>

          <div>
            <Link
              to="/Contact"
              className={`layout-link-${linkClassName} indHover`}
            >
              Contact
            </Link>
          </div>
        </nav>
      </div>

      <Outlet />
    </>
  );
};

export default Layout;
