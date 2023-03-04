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
import { useState, useEffect, useRef } from "react";

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
  const [hidden, toggleHidden] = useState(true);
  const [disabled, setDisabled] = useState(false);
  const [visible, setVisible] = useState(false);
  const [disabledTheme, setDisabledTheme] = useState(false);
  const themeRef = useRef(null);
  const themeRefMob = useRef(null);
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("mouseup", handleClickOutsideMob);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("mouseup", handleClickOutsideMob);
    };
  }, []);

  const changeVisible = () => {
    if (visible === false) {
      setVisible(true);
      setDisabledTheme(true);
    }
  };
  function handleClickOutsideMob(event) {
    console.log(themeRefMob.current, event.target);
    if (themeRefMob.current && !themeRefMob.current.contains(event.target)) {
      setDisabledTheme(false);
      setVisible(false);
    }
  }
  function handleClickOutside(event) {
    if (themeRef.current && !themeRef.current.contains(event.target)) {
      setDisabledTheme(false);
      setVisible(false);
    }
  }
  const sideNavRef = useRef(null);
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOut);
    return () => {
      document.removeEventListener("mousedown", handleClickOut);
    };
  }, [sideNavRef]);
  const changeHidden = () => {
    if (hidden === true) {
      toggleHidden(false);
      setDisabled(true);
    }
  };
  function handleClickOut(event) {
    if (sideNavRef.current && !sideNavRef.current.contains(event.target)) {
      setDisabled(false);
      toggleHidden(true);
    }
  }
  return (
    <>
      <div
        className={`navigation-bar-container ${
          navContainerClassName ? navContainerClassName : ""
        }`}
      >
        <div
          className={`theme-chooser ${disabledTheme ? "hidden" : ""}`}
          onClick={changeVisible}
        >
          <button className={`theme-button ${linkClassName}-b`}></button>

          <div
            ref={themeRef}
            className={`dropdown-content ${
              visible ? "visible" : "not-visible"
            }`}
          >
            <button
              className="initial-btn"
              onClick={() => dispatch(setInitial())}
            ></button>
            <button
              className="blue"
              onClick={() => dispatch(setBlue())}
            ></button>
            <button
              className="gold"
              onClick={() => dispatch(setGold())}
            ></button>
            <button
              className="pink"
              onClick={() => dispatch(setPink())}
            ></button>
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
          <div
            className={`theme-chooser-mob ${disabledTheme ? "hidden" : ""}`}
            onClick={changeVisible}
          >
            <button className={`theme-button-mob ${linkClassName}-b`}></button>

            <div
              ref={themeRefMob}
              className={`dropdown-content-mob ${
                visible ? "visible" : "not-visible"
              }`}
            >
              <button
                className="initial-btn"
                onClick={() => dispatch(setInitial())}
              ></button>
              <button
                className="blue"
                onClick={() => dispatch(setBlue())}
              ></button>
              <button
                className="gold"
                onClick={() => dispatch(setGold())}
              ></button>
              <button
                className="pink"
                onClick={() => dispatch(setPink())}
              ></button>
            </div>
          </div>
          <button
            disabled={disabled}
            className={`hamburger ${hidden ? "closed" : "open"}`}
            // disabled={disabled}
            onClick={changeHidden}
          >
            <span className="burger-line"></span>
            <span className="burger-line"></span>
            <span className="burger-line"></span>
          </button>
        </nav>
      </div>
      <div
        ref={sideNavRef}
        className={`hamburger-sidebar ${hidden ? "hidden-sidebar" : ""}`}
      >
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
