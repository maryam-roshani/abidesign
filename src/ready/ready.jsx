import React, { useState } from 'react';
import Data from '../assets/readyData';

const ReadyItem = ({ name, image, hover }) => {
  const [ishover, sethover] = useState(false);

  function MouseOver() {
    sethover(true);
  }

  function MouseOut() {
    sethover(false);
  }

  return (
    <div
      className="bg-amber-500"
      onMouseEnter={MouseOver}
      onMouseLeave={MouseOut}
    >
      <div className="relative z-0 w-full">
        {ishover && (
          <div className="absolute bg-amber-500 w-full h-full z-10 px-6">
            <p className="text-sm my-8 text-justify">{hover}</p>
            <button className="text-amber-500 bg-white text-small">
              مشاهده طرح ها
            </button>
          </div>
        )}
        <img src={image} alt="" className="w-full" />
      </div>
      <div className="bg-black py-2 justify-center text-center flex">
        <p className="text-white m-0">{name}</p>
      </div>
    </div>
  );
};

const Ready = () => {
  return (
    <div className="p-4 mx-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {Data.map((item) => (
          <ReadyItem
            key={item.id}
            image={item.poster}
            name={item.title}
            hover={item.hover}
          />
        ))}
      </div>
    </div>
  );
};

export default Ready;
