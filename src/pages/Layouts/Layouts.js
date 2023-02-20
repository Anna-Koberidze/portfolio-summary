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
import { useEffect, useState } from "react";

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
  const [hidden, toggleHidden] = useState(true);

  const changeHidden = () => {
    toggleHidden((hidden) => !hidden);
  };

  return (
    <>
      <div className="navigation">
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
          <nav className="big-screen">
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
        <div className="small-screen">
          <div className="hamburger" onCLick={changeHidden}>
            hamburger menue coming soon
          </div>
          <div
            className={`hamburger-sidebar ${hidden ? "hidden-sidebar" : ""}`}
          >
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
          </div>
        </div>
      </div>

      <Outlet />
    </>
  );
};

export default Layout;
