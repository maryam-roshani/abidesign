import React, { useState, useEffect } from 'react';
import dropData from '../../assets/dropData';
import { IoChevronDownOutline } from 'react-icons/io5';
import './dropDown.css';
import { Link } from "react-router-dom";

const DropDown = ({ number, isMobile }) => {
  const [dropdown, setDropdown] = useState(null);
  const [nestedDropdown, setNestedDropdown] = useState(null);

  const dropItem = dropData.find((e) => e.parent_id === Number(number));
  if (!dropItem) return null;

  return (
    <div className="transition-all duration-300 ease-in-out w-full bg-amber-50 p-2 rounded-lg">
      <div className={`w-full ${!isMobile ? 'top-full right-0' : ''} p-0 rounded-lg`}>
        {isMobile ? (
          <ul className="list-none mt-4" aria-labelledby={dropItem.parent_id}>
            {dropItem.items.map(item => (
              <li key={item.id} className="dropdown-item border-b border-gray-200 py-2">
                <div className="flex justify-between items-center">
                  <h6 className="text-start text-sm font-medium">{item.title}</h6>
                  {item.subItem && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setNestedDropdown(prev => prev === item.id ? null : item.id);
                      }}
                      className="ml-2 transition-transform duration-300 ease-in-out"
                    >
                      <IoChevronDownOutline
                        className={`transform ${nestedDropdown === item.id ? 'rotate-180' : ''}`}
                        size={16}
                      />
                    </button>
                  )}
                </div>

                <div className={`overflow-hidden transition-[max-height] duration-300 ease-in-out ${
                  nestedDropdown === item.id ? 'max-h-screen' : 'max-h-0'
                }`}>
                  <ul className="mt-2 ml-2">
                    {item.subItem.map(i => (
                      <li key={i.link}>
                        <div className="flex justify-between items-center">
                          <Link to={i.link}>
                            <p className="text-xs py-1.5 text-black">{i.title}</p>
                          </Link>
                          {i.subSubItem && (
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                setNestedDropdown(prev => prev === i.link ? null : i.link);
                              }}
                              className="ml-2 transition-transform duration-300 ease-in-out"
                            >
                              <IoChevronDownOutline
                                className={`transform ${nestedDropdown === i.link ? 'rotate-180' : ''}`}
                                size={14}
                              />
                            </button>
                          )}
                        </div>

                        {i.subSubItem && (
                          <div className={`overflow-hidden transition-[max-height] duration-300 ease-in-out ${
                            nestedDropdown === i.link ? 'max-h-screen' : 'max-h-0'
                          }`}>
                            <ul className="ml-4 mt-1">
                              {i.subSubItem.map(sub => (
                                <li key={sub.link}>
                                  <Link to={sub.link}>
                                    <p className="text-xs py-1 text-black">{sub.title}</p>
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <ul className="list-none flex gap-8 p-2" aria-labelledby={dropItem.parent_id}>
              {dropItem.items.map(item => (
                <li key={item.id}>
                  {item.title && <h6 className="py-2 text-base font-semibold">{item.title}</h6>}
                  <div className="block">
                    <ul>
                      {item.subItem.map(i => (
                        <li key={i.link}>
                          <Link to={i.link}>
                            <p className="list text-sm py-1 text-black hover:text-blue-500">{i.title}</p>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default DropDown;
