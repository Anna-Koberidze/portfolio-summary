import React, { useEffect, useState } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import "./carrousel.scss";
import { sliderData } from "./Data";
const Carrousel = () => {
  const slideLength = sliderData.length;
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = slideLength - 1;
    } else if (newIndex >= slideLength) {
      newIndex = 0;
    }
    setActiveIndex(newIndex);
  };
  useEffect(() => {
    const interval = setInterval(() => {
      if (!paused) {
        updateIndex(activeIndex + 1);
      }
    }, 3000);
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  });
  let active = false;
  const timeOut = setTimeout((active = true), 3000);

  return (
    <div
      className="carrousel-container"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="carrousel">
        <div
          className="inner"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {sliderData.map((slide, index) => {
            return (
              <div
                className={"carrousel-item"}
                key={index}
                // style={{ display: "inline-flex" }}
              >
                <div className="image">
                  <img
                    src={slide.image}
                    alt="slide"
                    style={{ width: "100%" }}
                  />
                </div>
                <div
                  className={`content ${slide.cntClassName} ${
                    active ? "activated" : ""
                  }`}
                >
                  <h2>{slide.heading}</h2>
                  <p>{slide.desc}</p>
                  <hr />
                  <button className={`--btn ${slide.btnClassName}`}>
                    {slide.button}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <div className="arrows-container">
          <AiOutlineArrowLeft
            className="arrow prev"
            onClick={() => {
              updateIndex(activeIndex - 1);
            }}
          />
          <AiOutlineArrowRight
            className="arrow next"
            onClick={() => {
              updateIndex(activeIndex + 1);
            }}
          />
        </div>
        <div className="indicators">
          {sliderData.map((slide, index) => {
            return (
              <div
                className={`dots ${index === activeIndex ? "active" : ""}`}
                onClick={() => {
                  updateIndex(index);
                }}
              >
                .
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Carrousel;
