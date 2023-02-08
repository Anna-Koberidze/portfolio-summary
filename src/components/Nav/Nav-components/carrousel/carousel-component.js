import {
  CCarousel,
  CCarouselCaption,
  CCarouselItem,
  CImage,
} from "@coreui/react";
import "@coreui/coreui/dist/css/coreui.min.css";
import { sliderData } from "./Data";
import "./Carousel.scss";
import { Link } from "react-router-dom";
const Carousel = () => {
  return (
    <CCarousel controls indicators interval="true" pause="true">
      <CCarouselItem interval="3000" className="--carousel-item">
        <CImage
          className="d-block w-100"
          src={sliderData[0].image}
          alt="slide 1"
        />
        <CCarouselCaption className="background-class">
          <h5>{sliderData[0].heading}</h5>
          <p>{sliderData[0].desc}</p>
          <button className="--btn">
            <a className="-btn-link" href={sliderData[0].insideLink}>
              {sliderData[0].button}
            </a>
          </button>
        </CCarouselCaption>
      </CCarouselItem>
      <CCarouselItem interval="3000" className="--carousel-item">
        <CImage
          className="d-block w-100"
          src={sliderData[1].image}
          alt="slide 2"
        />
        <CCarouselCaption className="background-class">
          <h5>{sliderData[1].heading}</h5>
          <p>{sliderData[1].desc}</p>
          <button className="--btn">
            <Link className="-btn-link" to={sliderData[1].link}>
              {sliderData[1].button}
            </Link>
          </button>
        </CCarouselCaption>
      </CCarouselItem>
      <CCarouselItem interval="3000" className="--carousel-item">
        <CImage
          className="d-block w-100"
          src={sliderData[2].image}
          alt="slide 3"
        />
        <CCarouselCaption className="background-class">
          <h5>{sliderData[2].heading}</h5>
          <p>{sliderData[2].desc}</p>
          <button className="--btn">
            <Link className="-btn-link" to={sliderData[2].link}>
              {sliderData[2].button}
            </Link>
          </button>
        </CCarouselCaption>
      </CCarouselItem>
      <CCarouselItem interval="3000" className="--carousel-item">
        <CImage
          className="d-block w-100"
          src={sliderData[3].image}
          alt="slide 4"
        />
        <CCarouselCaption className="background-class">
          <h5>{sliderData[3].heading}</h5>
          <p>{sliderData[3].desc}</p>
          <button className="--btn">
            <Link className="-btn-link" to={sliderData[3].link}>
              {sliderData[3].button}
            </Link>
          </button>
        </CCarouselCaption>
      </CCarouselItem>
    </CCarousel>
  );
};
export default Carousel;
