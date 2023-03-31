import {
  CCarousel,
  CCarouselCaption,
  CCarouselItem,
  CImage,
} from "@coreui/react";
import "@coreui/coreui/dist/css/coreui.min.css";
import { initialData } from "../Data/Data";
import blueData from "../Data/blue";
import goldData from "../Data/gold";
import pinkData from "../Data/pink";
import "./Carousel.scss";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Carousel = () => {
  let sliderData;
  let btnClassName;
  const theme = useSelector((state) => state.theme.theme);
  switch (theme) {
    case 1:
      sliderData = initialData;
      btnClassName = "initial-btn-car";
      break;
    case 2:
      sliderData = blueData;
      btnClassName = "blue-btn";
      break;
    case 3:
      sliderData = goldData;
      btnClassName = "gold-btn";
      break;
    case 4:
      sliderData = pinkData;
      btnClassName = "pink-btn";
      break;
    default:
      sliderData = "";
      btnClassName = "";
      break;
  }
  return (
    <CCarousel controls indicators interval={6000} pause="hover" touch>
      <CCarouselItem className="--carousel-item" interval={6000}>
        <CImage
          className="d-block w-100 carouselImage"
          src={sliderData[0].image}
          alt="slide 1"
        />
        <CCarouselCaption className="background-class">
          <h5>{sliderData[0].heading}</h5>
          <p>{sliderData[0].desc}</p>
          <button className={`--btn ${btnClassName}`}>
            <a className="-btn-link" href={sliderData[0].insideLink}>
              {sliderData[0].button}
            </a>
          </button>
        </CCarouselCaption>
      </CCarouselItem>
      <CCarouselItem className="--carousel-item" interval={4000}>
        <CImage
          className="d-block w-100 carouselImage"
          src={sliderData[1].image}
          alt="slide 2"
        />
        <CCarouselCaption className="background-class">
          <h5>{sliderData[1].heading}</h5>
          <p>{sliderData[1].desc}</p>
          <button className={`--btn ${btnClassName}`}>
            <Link className="-btn-link" to={sliderData[1].link}>
              {sliderData[1].button}
            </Link>
          </button>
        </CCarouselCaption>
      </CCarouselItem>
      <CCarouselItem className="--carousel-item" interval={4000}>
        <CImage
          className="d-block w-100 carouselImage"
          src={sliderData[2].image}
          alt="slide 3"
        />
        <CCarouselCaption className="background-class">
          <h5>{sliderData[2].heading}</h5>
          <p>{sliderData[2].desc}</p>
          <button className={`--btn ${btnClassName}`}>
            <Link className="-btn-link" to={sliderData[2].link}>
              {sliderData[2].button}
            </Link>
          </button>
        </CCarouselCaption>
      </CCarouselItem>
    </CCarousel>
  );
};
export default Carousel;
