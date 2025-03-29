import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import './navbar.css'
import data from '../../assets/navData.js'
import { Link } from 'react-router-dom';
import arrow from '../../assets/chevron-down.svg'
import arrow2 from '../../assets/chevron-down2.svg'
import DropDown from '../dropdown/dropDown.jsx';


const Navbar = () => {

const [isOpen, setIsOpen] = useState(false);
console.log(data)

  return (
    <div className=''>
        <div className='flex justify-center shadow-sm w-full px-8 bg-stone-600 whitespace-nowrap navbar'>
            <ul className="navbar-menu w-full flex items-center justify-around list-none gap-4 text-black">
                    {data.map(item => 
                    {item.drop ? (
                    <li 
                        onClick={()=>{setMenu(item.title)}}
                        key={item.id}
                        className='gap-3 flex relative navbar-item'
                        id={item.id}
                        data-bs-toggle="dropdown" 
                        aria-expanded="false"
                        onMouseEnter={() => setIsOpen(true)}
                        onMouseLeave={() => setIsOpen(false)}
                    >
                        <div className="block">
                            <div className="relative flex p-1 ms-2 size-4 my-auto">
                                <img src={item.image} className='py-0 navitem1 absolute size-4' alt="" />
                                <img src={item.image2} className='py-0 navitem2 absolute size-4' alt="" />
                            </div>
                            <p className='text-center text-xs !important'>{item.title}</p>
                            <div className='mt-3'>
                                <div className="flex relative bg-amber-800 w-4">
                                    <img src={arrow} className='text-lg navitem1 absolute size-4' alt="" /> 
                                    <img src={arrow2} className='text-lg navitem2 absolute size-4' alt="" /> 
                                </div>
                            </div>
                        </div>
                        {isOpen && (
                            <div className='dropdown-menu absolute m-0 top-full left-0 p-0'>
                                <DropDown number={item.id} open={isOpen} setOpen={setIsOpen} />
                            </div>
                        )}
                    </li>
                    ) : (
                    <li 
                        onClick={()=>{setMenu(item.title)}}
                        key={item.id}
                        className='gap-3 flex relative'
                        id={item.id}
                        data-bs-toggle="dropdown" 
                        aria-expanded="false"
                        onMouseEnter={() => setIsOpen(true)}
                        onMouseLeave={() => setIsOpen(false)}
                    >
                        <div className="block">
                            <div className="relative flex p-1 ms-2 size-4 my-auto">
                                <img src={item.image} className='py-0 navitem1 absolute size-4' alt="" />
                                <img src={item.image2} className='py-0 navitem2 absolute size-4' alt="" />
                            </div>
                            <p className='text-center text-xs !important'>{item.title}</p>
                        </div>
                        {isOpen && (
                            <div className='dropdown-menu absolute m-0 top-full left-0 p-0'>
                                <DropDown number={item.id} open={isOpen} setOpen={setIsOpen} />
                            </div>
                        )}
                    </li>
                    )}
                )}
            </ul>
        </div>
    </div>
  )
}

export default Navbar