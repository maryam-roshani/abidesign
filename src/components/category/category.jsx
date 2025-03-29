import React from 'react'
import Data from '../../assets/homeData'
import './category.css'


const CategoryItem = ({ name, image }) => {
     return(
        <div className={name != '' ? "rounded p-3 bg-blue-400": "rounded p-3"} >
            <img src={image} alt="" className={name != '' ? 'rounded cat-image': 'rounded'} />
            {name != '' ?  <div className='bg-white py-2 rounded mt-3 justify-center text-center flex'>
                <p className='m-0 small cat-text'>{name}</p>
            </div> : <></>}
        </div> 
     )
   }

const Category = () => {
  return (
    <div>
        <div className='p-2 shadow-sm w-full'>
            <ul className="d-block list-none gap-4 text-black text-2xl">
                    {Data.map(cat => (
                    <li 
                        // onClick={()=>{setMenu(item.title)}}
                        key={cat.baseId}
                        className='gap-2 my-8 py-8'
                        id={cat.baseId}
                    >
                        <div className="relative flex p-1 ms-2">
                            {/* <img src={item.image} className='py-0 fs-1 absolute' alt="" /> */}
                            <ul className='flex gap-3 list-none'>
                                {cat.items.map((item, index) => (
                                    <li>
                                        <CategoryItem
                                        key={index}
                                        image={item.image}
                                        name={item.name}
                                        >
                                        </CategoryItem>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </li>
                    ))}
            </ul>
        </div>
    </div>
  )
}

export default Category