import React, { useState, useEffect } from 'react';
import { IoMenuOutline, IoCloseOutline, IoChevronDownOutline } from 'react-icons/io5';
import './navbar.css';
import data from '../../assets/navData.js';
import { Link } from 'react-router-dom';
import DropDown from '../dropdown/dropDown.jsx';

const Navbar = () => {
  const [dropdown, setDropdown] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div>
      <div className='py-1 lg:flex justify-start shadow-sm w-72 lg:w-full bg-stone-300 whitespace-nowrap lg:pr-30'>
        <button 
          className={`lg:hidden w-72 text-black bg-amber-50 font-bold  ${mobileMenuOpen ? 'fixed bg-amber-400 right-0 top-20' : ''} z-50`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <IoCloseOutline size={30} />
          ) : (
            <IoMenuOutline size={30} />
          )}
        </button>
          <div className={isMobile && mobileMenuOpen ?'fixed top-40 right-0 h-full w-72 bg-white z-40 transform transition-transform duration-300 ease-in-out shadow-lg lg:static lg:transform-none':''}>
            <ul className={`navbar-menu flex-col lg:flex-row 
                lg:flex 
                ${mobileMenuOpen ? 'flex' : 'hidden'} 
                transition-all duration-300 ease-in-out
                w-full lg:w-2/3 items-start lg:items-center 
                justify-start lg:justify-between 
                list-none gap-4 text-black text-xs`}
                >
                {data.map(item => (
                    <li
                    key={item.id}
                    className='flex flex-col w-full relative overflow-visible navbar-item cursor-pointer hover:text-red-500'
                    onClick={() => {
                        if (isMobile) {
                        setDropdown(dropdown === item.id ? null : item.id);
                        }
                    }}
                    onMouseEnter={() => {
                        if (!isMobile) {
                        setHoveredIndex(item.id);
                        if (item.drop) setDropdown(item.id);
                        }
                    }}
                    onMouseLeave={() => {
                        if (!isMobile) {
                        setDropdown(null);
                        setHoveredIndex(null);
                        }
                    }}
                    >
                    <div className="flex justify-between items-center w-full px-2 py-2">
                        <p className="text-center text-sm">{item.title}</p>
                        {item.drop && (
                        <div className="transition-transform duration-300 ease-in-out">
                            <IoChevronDownOutline
                            className={`transform ${dropdown === item.id ? 'rotate-180' : ''}`}
                            size={16}
                            />
                        </div>
                        )}
                    </div>

                    {item.drop && (
                        <>
                        {isMobile ? (
                            <div className={`overflow-hidden transition-[max-height] duration-300 ease-in-out ${
                            dropdown === item.id ? 'max-h-screen' : 'max-h-0'
                            }`}>
                            <DropDown number={item.id} isMobile={true} />
                            </div>
                        ) : (
                            hoveredIndex === item.id && (
                                <div className="absolute w-max z-50" style={{ top: '100%' }}>
                                    <DropDown number={item.id} isMobile={false} />
                                </div>
                            )
                        )}
                        </>
                    )}
                    </li>
                ))}
            </ul>
          </div>
      </div>
    </div>
  );
};

export default Navbar;
