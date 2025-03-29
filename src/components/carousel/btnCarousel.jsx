import React from 'react'
import rightArrow from '../../assets/arrowRight.svg'
import leftArrow from '../../assets/arrowLeft.svg'



const BtnCarousel = ({direction, moveSlide}) => {
  return (
    <button
    onClick={moveSlide}
    className={direction === "next" ? 'btn-slide next' :
        "btn-slide prev"}>
            <img src={direction === "next" ? rightArrow : leftArrow} alt=""/>
    </button>
  )
}

export default BtnCarousel