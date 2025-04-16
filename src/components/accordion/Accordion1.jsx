import React, { useRef, useState } from 'react'
import { RiArrowDropDownLine } from 'react-icons/ri'
import data from './AccordionData.js'
import './Accordion.css'


//  accordionitem component
const AccordionItem = ({ question, answer1, answer2, answer3, isOpen, onClick }) => {
    const contentHeight = useRef()
     return(
       <div className="wrapper" >
       <button className={`question-container ${isOpen ? 'active' : ''}`} onClick={onClick} >
        <p className='question-content'>{question}</p>
        <RiArrowDropDownLine className={`arrow ${isOpen ? 'active' : ''}`} /> 
       </button>
   
        <div ref={contentHeight} className="answer-container" style={
             isOpen
             ? { height: contentHeight.current.scrollHeight }
             : { height: "0px" }
            }>
         <p className="answer-content inline-flex"><p className='text-nowrap pr-3 font-weight-bold'>{answer1.title}</p>{answer1.text}</p>
         <p className="answer-content flex"><p className='text-nowrap pr-3'>{answer2.title}</p>{answer2.text}</p>
         <p className="answer-content flex"><p>{answer3.title}</p>{answer3.text}</p>
        </div>
      </div>
     )
   }

// main Accordion component
const Accordion = () => {
    const [activeIndex, setActiveIndex] = useState(null);
   
    const handleItemClick = (index) => {
     setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    };
   
    return (
     <div className='container mx-8'>
       {data.map((item, index) => (
       <AccordionItem
        key={index}
        question={item.question}
        answer1={item.answer_1}
        answer2={item.answer_2}
        answer3={item.answer_3}
        isOpen={activeIndex === index}
        onClick={() => handleItemClick(index)}
       />
      ))}
     </div>
    )
   };
   
   export default Accordion;