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
    <div>
      <button type="button" onClick={handlePrevClick}>
        <img src={sliderLeftArrow} alt="icon left arrow" />
      </button>
      <img src={accommodationImage} alt="accommodation" />
      <button type="button" onClick={handleNextClick}>
        <img src={sliderRightArrow} alt="icon right arrow" />
      </button>
    </div>
  );
}

export default Slider;
