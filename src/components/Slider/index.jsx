import { useState } from 'react';
// @ts-ignore image path
import sliderLeftArrow from '../../assets/icon/slider-left-arrow.svg';
// @ts-ignore image path
import sliderRightArrow from '../../assets/icon/slider-right-arrow.svg';

function Slider({ accommodationImageList }) {
  const [index, setIndex] = useState(0);

    if (index < 0) {
      setIndex(accommodationImageList.length - 1);
    } else if (index >= accommodationImageList.length) {
      setIndex(0);
    }

  const handlePrevClick = () => {
    setIndex((prev) => prev - 1);
  };

  const handleNextClick = () => {
    setIndex((prev) => prev + 1);
  };

  const accommodationImage = accommodationImageList[index];

  return (
    <div className="slider">
      {accommodationImageList.length > 1 ? (
        <button
          type="button"
          className="slider__btn slider__btn--prev"
          onClick={handlePrevClick}
        >
          <img
            className="slider__btn__icon"
            src={sliderLeftArrow}
            alt="flèche gauche"
          />
        </button>
      ) : (
        <span></span>
      )}
      <img
        className="slider__image"
        src={accommodationImage}
        alt="le logement"
      />
      {accommodationImageList.length > 1 ? (
        <button
          type="button"
          className="slider__btn slider__btn--next"
          onClick={handleNextClick}
        >
          <img
            className="slider__btn__icon"
            src={sliderRightArrow}
            alt="flèche droite"
          />
        </button>
      ) : (
        <span></span>
      )}

      <p className="slider__image--count">
        {index + 1}/{accommodationImageList.length}
      </p>
    </div>
  );
}

export default Slider;
