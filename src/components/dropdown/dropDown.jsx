import React from 'react'
import dropData from '../../assets/dropData'
import './dropDown.css'
import { Link } from "react-router-dom";


const DropDown = (props) => {
  let {number} = props;
  const dropItem = dropData.find((e) =>
    e.parent_id == Number(number)
  )  
  return (
    <div className='absolute m-0 right-0 top-8 p-0 z-20 rounded-lg bg-blue-50'>
        <ul className="list-none mt-4 rounded-1" aria-labelledby={dropItem.parent_id}>
            <div className="flex">
            {dropItem.items.map(item => (
            <li
                key={item.id}
                className='dropdown-item'
            >
                {item.title !== '' ? <h6 className='text-start text-sm py-2 font-medium'>{item.title}</h6> : <></>}
                <div className='block'>
                    {item.subItem.map(i =><li><Link to={i.link} ><p className='list text-xs pile py-1.5 text-black'>{i.title}</p></Link></li>)}
                </div>
            </li>
            ))}
            </div>
        </ul>
    </div>
)
  // return (
    
  // )
}

export default DropDown