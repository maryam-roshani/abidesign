import React from 'react'
import dropData from '../../assets/dropData'
import './dropDown.css'
import { Link } from "react-router-dom";

const Drop2 = (props) => {
    
    let {number} = props;
    const dropItem = dropData.find((e) =>
    e.parent_id == Number(number)
    )
      
      return (
        <div className=' place'>
            <ul className="list-none mt-4 place rounded-1" aria-labelledby={dropItem.parent_id}>
                <div className="flex">
                {dropItem.items.map(item => (
                <li
                    key={item.id}
                    className=''
                >
                    {item.title !== '' ? <h6 className='text-end py-2'>{item.title}</h6> : <></>}
                    <div className='d-block'>
                        {item.subItem.map(i =><li><Link to={i.link} ><p className='list text-xl pile'>{i.title}</p></Link></li>)}
                    </div>
                </li>
                ))}
                </div>
            </ul>
        </div>
      )
}

export default Drop2