import React, { useState, createContext } from "react";
import cx from "classnames";

import SliderContext from "./Context";
import Content from "./Content";
import SlideButton from "./SlideButton";
import SliderWrapper from "./SliderWrapper";

import useSizeElement from "./UseSizeElement";
import useSliding from "./UseSliding";

import "./Scss/TopMovieList.scss";

function TopMovieList({ children, activeSlide }) {
  const [currentSlide, setCurrentSlide] = useState(activeSlide);
  const { width, elementRef } = useSizeElement();
  const { handlePrev, handleNext, slideProps, containerRef, hasNext, hasPrev } =
    useSliding(width, React.Children.count(children));

  const handleSelect = (movie: any) => {
    setCurrentSlide(movie);
  };

  const handleClose = () => {
    setCurrentSlide(null);
  };

  const contextValue = {
    onSelectSlide: handleSelect,
    onCloseSlide: handleClose,
    elementRef,
    currentSlide,
  };

  return (
    <SliderContext.Provider value={contextValue}>
      <SliderWrapper>
        <div className={cx("slider", { "slider--open": currentSlide != null })}>
          <div ref={containerRef} className="slider__container" {...slideProps}>
            {children}
          </div>
        </div>
        {hasPrev && <SlideButton onClick={handlePrev} type="prev" />}
        {hasNext && <SlideButton onClick={handleNext} type="next" />}
      </SliderWrapper>
      {currentSlide && <Content movie={currentSlide} onClose={handleClose} />}
    </SliderContext.Provider>
  );
}

export default TopMovieList;
