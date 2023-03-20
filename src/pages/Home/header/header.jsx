import { Link } from "react-router-dom";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { useSelector } from "react-redux";
function Header() {
  let imgSrc;
  let introClassName;
  const theme = useSelector((state) => state.theme.theme);
  switch (theme) {
    case 1:
      imgSrc = "./images/undraw_Blooming_re_2kc4.png";
      introClassName = "initial-intro";
      break;
    case 2:
      imgSrc = "./images/undraw_fall_thyk.png";
      introClassName = "blue-intro";
      break;
    case 3:
      imgSrc = "./images/undraw_learning_sketching_nd4f.png";
      introClassName = "gold-intro";
      break;
    case 4:
      imgSrc = "./images/undraw_Designer_life_re_6ywf.png";
      introClassName = "pink-intro";
      break;
    default:
      imgSrc = "";

      break;
  }
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <header className="header-1">
      <h1
        data-aos="fade-right"
        data-aos-easing="ease-in-sine"
        data-aos-duration="2000"
        className={`greeting ${introClassName}`}
      >
        Hello, I'm Anna,<br></br> I'm a Junior front-end developer. <br></br>
        Nice to meet you.
      </h1>
      <img
        data-aos="fade-left"
        data-aos-duration="3000"
        data-aos-easing="ease-in-sine"
        className="header-photo"
        alt="illustration"
        src={imgSrc}
      />
      <div
        data-aos="fade-right"
        data-aos-easing="ease-in-sine"
        data-aos-duration="2000"
        className={`introduction ${introClassName}`}
      >
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
