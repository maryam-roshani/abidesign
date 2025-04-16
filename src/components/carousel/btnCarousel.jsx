import React from 'react'
import rightArrow from '../../assets/arrowRight.svg'
import leftArrow from '../../assets/arrowLeft.svg'



const BtnCarousel = ({direction, moveSlide}) => {
  return (
    <button
          onClick={moveSlide}
          className="absolute top-1/2 -translate-y-1/2 z-50 bg-opacity-50 text-white p-2 rounded-full"
          style={direction === 'next' ? { right: '10px' } : { left: '10px' }}
        >
                <img src={direction === "next" ? rightArrow : leftArrow} alt="" className='w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 aspect-square'/>
    </button>
  )
}

export default BtnCarousel
