import React, { useRef, useState } from 'react';
import { RiArrowDropDownLine } from 'react-icons/ri';
import data from './AccordionData.js';

const AccordionItem = ({ question, answer1, answer2, answer3, isOpen, onClick }) => {
  const contentRef = useRef(null);

  return (
    <div className="border-b border-black overflow-hidden">
      <button
        onClick={onClick}
        className={`w-full text-right py-4 px-3 flex items-center justify-between text-[17px] font-medium transition-colors ${
          isOpen ? 'text-green-500 bg-black/5' : 'text-white'
        } hover:bg-black/5`}
      >
        <p className="">{question}</p>
        <RiArrowDropDownLine
          className={`text-3xl transition-transform duration-300 ${
            isOpen ? 'rotate-180 text-green-500' : ''
          }`}
        />
      </button>

      <div
        ref={contentRef}
        className="px-4 transition-all duration-700 ease-in-out overflow-hidden"
        style={{
          height: isOpen ? `${contentRef.current?.scrollHeight}px` : '0px',
        }}
      >
        <div className="py-2 text-sm italic text-white font-medium text-right leading-7">
          <p className="flex gap-2">
            <span className="whitespace-nowrap font-bold pr-2">{answer1.title}</span>
            {answer1.text}
          </p>
          <p className="flex gap-2">
            <span className="whitespace-nowrap pr-2">{answer2.title}</span>
            {answer2.text}
          </p>
          <p className="flex gap-2">
            <span className="">{answer3.title}</span>
            {answer3.text}
          </p>
        </div>
      </div>
    </div>
  );
};

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleItemClick = (index) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="max-w-[1100px] bg-neutral-900 rounded-xl mt-4 mx-8">
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
  );
};

export default Accordion;
