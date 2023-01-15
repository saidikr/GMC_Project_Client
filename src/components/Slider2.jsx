import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { useState,useEffect } from 'react';
import img1 from '../assets/berthold.jpg';
import img2 from '../assets/felin.jpg';
import img3 from '../assets/denimm.jpg';
import img9 from '../assets/jeans.jpg';
import img4 from '../assets/only.png';
import img10 from '../assets/san.png';
import img7 from '../assets/really.jpg';
import img8 from '../assets/backdenim.jpg';
import img5 from '../assets/Cap.png';
import img6 from '../assets/bl.jpg';





function Slider2() {
  const images = [img1, img2, img3, img4,img5,img6,img7,img8,img9,img10];
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
      setActiveSlide(0);
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
                ? 'flex md:justify-between items-center relative'
                : 'hidden'
            }
          >
            <button
              className='absolute left-10 md:text-6xl'
              onClick={() => prevSliderHandler(index)}
            >
              <FiChevronLeft className='text-white' />
            </button>
            <div className=' w-full h-[500px]'>
              <img
                src={item}
                alt='landscape'
                className=' object-cover w-full h-[500px] px-6'
              />
            </div>
            <button
              className='absolute right-10 md:text-6xl'
              onClick={() => nextSliderHandler(index)}
            >
              <FiChevronRight className='text-white' />
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default Slider2;