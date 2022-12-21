import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { useState,useEffect } from 'react';
import img1 from '../assets/carousel-1.jpg';
import img2 from '../assets/carousel-2.jpg';
import img3 from '../assets/carousel-1.jpg';
import img4 from '../assets/carousel-2.jpg';

function Slider2() {
  const images = [img1, img2, img3, img4];
  const [activeSlide, setActiveSlide] = useState(1);

  const prevSliderHandler = (index) => {
    if (index === 0) {
      setActiveSlide(images.length - 1);
    } else if (index > 1) {
      setActiveSlide(activeSlide - 1);
    } else {
      setActiveSlide(images.length - 1);
    }
  };

  const nextSliderHandler = (index) => {
    if (index === images.length - 1) {
      setActiveSlide(1);
    } else if (index < images.length - 1) {
      setActiveSlide(activeSlide + 1);
    } else {
      setActiveSlide(images.length - 1);
    }
  };
  useEffect(() => {
  const timer = setTimeout(() => {
    nextSliderHandler(activeSlide)
  }, 4000);
  return () => clearTimeout(timer);
  }, [activeSlide]);

  return (
    <div className='m-5'>
      {images.map((item, index) => {
        return (
          <div
            key={index}
            className={
              activeSlide === index
                ? 'flex justify-between items-center'
                : 'hidden'
            }
          >
            <button
              className='text-6xl border-2 border-black'
              onClick={() => prevSliderHandler(index)}
            >
              <FiChevronLeft />
            </button>
            <div className=' w-full h-[500px]'>
              <img
                src={item}
                alt='landscape'
                className=' object-cover w-full h-[500px] px-6'
              />
            </div>
            <button
              className='text-6xl border-2 border-black'
              onClick={() => nextSliderHandler(index)}
            >
              <FiChevronRight />
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default Slider2;