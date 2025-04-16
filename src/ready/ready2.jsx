import React, {useState} from 'react'
import Data from '../assets/readyData'


const ReadyItem = ({name, image, hover}) => {

    const [ishover,sethover]= useState(false);

    function MouseOver() {
        sethover(true)
        console.log(ishover)
    }

    function MouseOut() {
        sethover(false)
        console.log(ishover)
    }
    return(
       <div className="bg-amber-500" 
            onMouseEnter={MouseOver}
            onMouseLeave={MouseOut}
        >
            <div className='relative z-0 w-64'>
                {ishover==true?<div className='absolute bg-amber-500 w-full h-full z-1 px-6'>
                    <p className='text-sm my-8 text-justify'>{hover}</p>
                    <button className='text-amber-500 bg-white text-small' >مشاهده طرح ها</button>
                </div>:<></>}
                <img src={image} alt="" className='' />
            </div>
           <div className='bg-black py-2 justify-center text-center flex'>
               <p className='text-white m-0'>{name}</p>
           </div>
       </div> 
    )
}
  

const Ready = () => {

  return (
    <div className="flex p-1 my-2 mx-8">
    <ul className='flex justify-around w-full list-none mx-8'>
        {Data.map(item => (
            <li>
                <ReadyItem
                key={item.id}
                image={item.poster}
                name={item.title}
                hover={item.hover}
                >
                </ReadyItem>
            </li>
        ))}
    </ul>
</div>
  )
}

export default Ready