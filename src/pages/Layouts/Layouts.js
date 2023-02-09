import { Outlet, Link } from "react-router-dom";
import "./layouts.scss";
import "../Contacts/Contacts.scss";
const Layout = () => {
  return (
    <>
      <div className="navigation-bar-container">
        <nav>
          <div className="first-layout-div">
            <Link to="/" className="layout-link">
              Home
            </Link>
          </div>

          <div>
            <Link to="/Resume" className="layout-link">
              Resume
            </Link>
          </div>
          <div>
            <Link to="/Projects" className="layout-link">
              Projects
            </Link>
          </div>

          <div>
            <Link to="/Contact" className="layout-link">
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
