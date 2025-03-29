import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import './navbar.css'
import data from '../../assets/navData.js'
import { Link } from 'react-router-dom';
import { IoChevronUpOutline } from "react-icons/io5";
import { IoChevronDownOutline } from "react-icons/io5";
import DropDown from '../dropdown/dropDown.jsx';

const Navbar = () => {
    const [dropdown, setDropdown] = useState(null);
    const [hoveredIndex, setHoveredIndex] = useState(null);

    return (
    <div>
        <div className='py-1 flex justify-start shadow-sm w-full bg-stone-300 whitespace-nowrap navbar pr-30'>
            <ul className="navbar-menu w-2/3 flex items-center justify-between list-none gap-4 text-black text-xs">
                {data.map(item => 
                    <li 
                        key={item.id}
                        className='flex relative navbar-item cursor-pointer hover:text-red-500'
                        id={item.id}
                        data-bs-toggle="dropdown" 
                        aria-expanded="false"
                        onMouseEnter={() => {
                            setHoveredIndex(item.id);
                            if (item.drop) setDropdown(item.id);
                        }}

                        onMouseLeave={() => {
                            setDropdown(null);
                            setHoveredIndex(null);
                        }}
                    >
                        <div className="relative my-auto text-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className={item.class} viewBox="0 0 16 16">
                                <path d={item.path}/>
                                {item.path1 ? <path d={item.path1}/>:<></>}
                                {item.path2 ? <path d={item.path2} fill-rule = {item.fill_rule? item.fill_rule :""}/>:<></>}
                                {item.path3 ? <path d={item.path3}/>:<></>}
                                {item.path4 ? <path d={item.path4}/>:<></>}
                            </svg>                        
                        </div>
                        <p className='py-0 text-center my-2 pr-2 pl-1'>{item.title}</p>
                        {item.drop?(
                        <div className='my-auto'>
                            <div className="flex relative w-4">
                                {hoveredIndex === item.id ? <IoChevronUpOutline size={16} /> : <IoChevronDownOutline size={16} />} 
                            </div>
                        </div>)
                        :(<></>)}
                        {item.drop && dropdown === item.id && 
                            <DropDown number={item.id}  />
                        }
                    </li>
                )}
            </ul>
        </div>
    </div>
    )
}

export default Navbar