import { Link } from "react-router-dom";
function Header() {
  return (
    <header className="header-1">
      <h1 className="greeting">Hello, I'm Anna. Nice to meet you.</h1>
      <img
        className="header-photo"
        alt="photo illustration"
        src="/images/undraw_Blooming_re_2kc4.png"
      />
      <div className="introduction">
        Since the beginning of my journey as front-end developer I endeavor to
        learn everything I can get my hands on and become proficient in the
        field of web developement. <br></br>
        <br></br> I am gaining confidence in my abilities and perpetually
        working on improving my skills solving problem at a time. I am ready to
        take part in creating customer oriented new solutions and innovative
        products.
      </div>
      <button className="--next-button">
        <Link className="--next-button-link" to="/Resume">
          next→
        </Link>
      </button>
    </header>
  );
}
export default Header;
