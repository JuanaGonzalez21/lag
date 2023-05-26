import React, {useState} from 'react'
import bg1 from '../components/img/bg1.jpg'
import bg2 from '../components/img/bg2.jpg'
import bg3 from '../components/img/bg3.jpg'
import bg4 from '../components/img/bg4.jpg'
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
const CarouselBack = () => {

  const slides = [
    {
      url: bg1 
    },
    {
      url:  bg2 
    },
    {
      url: bg3 
    }, 
    {
      url:  bg4 ,
    }]
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
      const isFirstSlide = currentIndex === 0;
      const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
      setCurrentIndex(newIndex);
    };
  
    const nextSlide = () => {
      const isLastSlide = currentIndex === slides.length - 1;
      const newIndex = isLastSlide ? 0 : currentIndex + 1;
      setCurrentIndex(newIndex);
    };
  
    const goToSlide = (slideIndex) => {
      setCurrentIndex(slideIndex);
    };
  
    return (
      <div className=' h-[700px] w-full m-auto py-8 relative group'>
        <a class="uppercase tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl " href="#">
                                Promociones
                            </a>
        <div
          style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
          className='w-full h-full  bg-center bg-cover duration-500'
        ></div>
        
        {/* Left Arrow */}
        <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
          <BsChevronCompactLeft onClick={prevSlide} size={30} />
        </div>
        {/* Right Arrow */}
        <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
          <BsChevronCompactRight onClick={nextSlide} size={30} />
        </div>
        <div className='flex top-4 justify-center py-2'>
          {slides.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className='text-2xl cursor-pointer'
            >
           
            </div>
          ))}
        </div>
      </div>
    );
}

export default CarouselBack