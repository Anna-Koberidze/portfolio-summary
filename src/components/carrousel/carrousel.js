import React, { useEffect, useState } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import "./carrousel.scss";
import { sliderData } from "./Data";
export const CarrouselItem = ({ children, width }) => {
  const slideLength = sliderData.length;
  return (
    <div className="carrousel-item" style={{ width: width }}>
      {children}
    </div>
  );
};

const Carrousel = ({ children }) => {
  const slideLength = sliderData.length;
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = React.Children.count(children) - 1;
    } else if (newIndex >= React.Children.count(children)) {
      newIndex = 0;
    }
    setActiveIndex(newIndex);
  };
  useEffect(() => {
    const interval = setInterval(() => {
      if (!paused) {
        updateIndex(activeIndex + 1);
      }
    }, 10000);
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  });

  return (
    <div
      className="carrousel"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        className="inner"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {React.Children.map(children, (child, index) => {
          return React.cloneElement(child, { width: "100%" });
        })}
      </div>
      <div className="indicators">
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
        {React.Children.map(children, (child, index) => {
          return (
            <button
              className={`${index === activeIndex ? "active" : ""}`}
              onClick={() => {
                updateIndex(index);
              }}
            >
              {index + 1}
            </button>
          );
        })}
      </div>
    </div>
  );
};
export default Carrousel;
