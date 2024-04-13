import { useEffect, useState } from 'react';
// @ts-ignore image path
import sliderLeftArrow from '../../assets/icon/sliderLeftArrow.svg';
// @ts-ignore image path
import sliderRightArrow from '../../assets/icon/sliderRightArrow.svg';

function Slider({ accommodationImageList }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < 0) {
      setIndex(accommodationImageList.length - 1);
    } else if (index >= accommodationImageList.length) {
      setIndex(0);
    }
  }, [index]);

  const handlePrevClick = () => {
    setIndex((prev) => prev - 1);
  };

  const handleNextClick = () => {
    setIndex((prev) => prev + 1);
  };

  const accommodationImage = accommodationImageList[index];

  return (
    <div className="slider">
      <button
        type="button"
        className="slider__btn slider__btn--prev"
        onClick={handlePrevClick}
      >
        <img
          className="slider__btn__icon"
          src={sliderLeftArrow}
          alt="icon left arrow"
        />
      </button>
      <img
        className="slider__image"
        src={accommodationImage}
        alt="accommodation"
      />
      <button
        type="button"
        className="slider__btn slider__btn--next"
        onClick={handleNextClick}
      >
        <img
          className="slider__btn__icon"
          src={sliderRightArrow}
          alt="icon right arrow"
        />
      </button>
      <p className="slider__image--count">
        {index + 1}/{accommodationImageList.length}
      </p>
    </div>
  );
}

export default Slider;
