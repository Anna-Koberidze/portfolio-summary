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
import { useState } from "react";

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
    default:
      navContainerClassName = "";
      linkClassName = "";
      break;
  }
  const [hidden, toggleHidden] = useState(false);

  const changeHidden = () => {
    toggleHidden((hidden) => !hidden);
  };

  return (
    <>
      <div
        className={`navigation-bar-container ${
          navContainerClassName ? navContainerClassName : ""
        }`}
      >
        <div className="theme-chooser">
          <button className={`theme-button ${linkClassName}-b`}></button>
          <div className="no-display">
            <div className="dropdown-content">
              <button
                className="initial"
                onClick={() => dispatch(setInitial())}
              >
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
          </div>
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
      <div className="nav-display-override">
        <nav className="mobile-nav">
          <button
            className={`hamburger ${hidden ? "closed" : "open"}`}
            onClick={changeHidden}
          >
            <span className="burger-line"></span>
            <span className="burger-line"></span>
            <span className="burger-line"></span>
          </button>
        </nav>
      </div>
      <div className={`hamburger-sidebar ${hidden ? "hidden-sidebar" : ""}`}>
        <div className="flex-sidebar-override">
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

      <Outlet />
    </>
  );
};

export default Layout;
