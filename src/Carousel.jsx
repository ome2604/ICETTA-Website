import React, { useState } from "react";
import CarouselItem from "./CarouselItem";
import img1 from './assets/images/img1Mam.jpg';
import img2 from './assets/images/img2Bulding1.jpg';
import img3 from './assets/images/img3Bulding2.jpg';
import img4 from './assets/images/img4Student1.jpg';
import img5 from './assets/images/img5Student2.jpg';

import "./App.css";

export const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const items = [
    {
      images: img1,
    },
    {
      images: img2,
    },
    {
      images: img3,
    },
    {
      images: img4,
    },
    {
      images: img5,
    },
  ];

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= items.length) {
      newIndex = items.length - 1;
    }
    setActiveIndex(newIndex);
  };

  return (
    <div className="Carousel">
      <div
        className="inner"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {items.map((item, index) => (
          <CarouselItem key={index} item={item} />
        ))}
      </div>
      <div className="Carousel-button">
        <button
          onClick={() => {
            updateIndex(activeIndex - 1);
          }}
          className="button-arrow"
        >
          <span className="material-symbols-outlined">arrow_back_ios</span>
        </button>
        <div className="indicators">
          {items.map((item, index) => (
            <button
              key={index}
              onClick={() => {
                updateIndex(index);
              }}
              className={`indicators-button ${index === activeIndex ? "active" : ""}`}
            ></button>
          ))}
        </div>
        <button
          onClick={() => {
            updateIndex(activeIndex + 1);
          }}
          className="button-arrow"
        >
          <span className="material-symbols-outlined">arrow_forward_ios</span>
        </button>
      </div>
    </div>
  );
};
