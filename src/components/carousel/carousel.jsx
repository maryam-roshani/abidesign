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
    <div className='container-slider my-4 mx-15 relative overflow-hidden rounded-lg'>
        {carouselData.map((obj, index) => {
            return (
                <div
                key={index}
                className={slideIndex === index + 1 ? 'slide w-full h-full absolute active-anim' : 'slide w-full h-full absolute opacity-0' }
                >
                    <img src={obj.image} alt="" className='w-full h-full object-cover'/>
                </div>
            )
        })}
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