import React, {useState} from 'react'
import carouselData from './carouselData.js'
import './carousel.css'
import BtnCarousel from './btnCarousel';



const Carousel = () => {
    const [slideIndex, setSlideIndex] = useState(1)

    const nextSlide = () => {
        console.log(slideIndex)
        if(slideIndex !== carouselData.length){
            setSlideIndex(slideIndex + 1)
        }
        else if (slideIndex === carouselData.length){
            setSlideIndex(1)
        }
    }

    const prevSlide = () => {
        if(slideIndex !== 1){
            setSlideIndex(slideIndex - 1)
        }
        else if (slideIndex === 1){
            setSlideIndex(carouselData.length)
        }
    }

    const moveDot = index =>{
        setSlideIndex(index)
    }

  return (
    <div className='mx-auto relative my-2 lg:my-4 max-w-[1200px] w-full'>
        <div className="relative pt-[32.65%] w-full overflow-hidden rounded-lg">
            {carouselData.map((obj, index) => {
                return (
                    <div
                        key={index}
                        className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${
                        slideIndex === index + 1 ? 'opacity-100 z-10' : 'opacity-0 z-0'
                        }`}
                    >
                        <img src={obj.image} alt="" className='w-full h-full object-cover rounded-lg'/>
                    </div>
                )
            })}
        </div>
        <BtnCarousel moveSlide={nextSlide} direction={"next"} />
        <BtnCarousel moveSlide={prevSlide} direction={"prev"} />

        <div className='container-dots'>
            {Array.from({length: 3}).map((item, index) => (
                <div 
                onClick={() => moveDot(index + 1)}
                className={slideIndex === index + 1 ? "dot active" : "dot"}>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Carousel