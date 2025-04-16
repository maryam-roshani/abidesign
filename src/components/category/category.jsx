import {React, useState, useEffect} from 'react'
import Data from '../../assets/homeData'
import './category.css'


const CategoryItem = ({ name, image }) => {
     return(
        <div className={name != '' ? "rounded p-3 bg-blue-400": "hidden md:flex md:p-3 md:items-center md:justify-center md:w-40 lg:w-48 xl:w-64"} >
            <img src={image} alt="" className={`${name != '' ? 'rounded cat-image': 'rounded'} mx-auto`} />
            {name != '' && (  <div className='bg-white py-2 rounded mt-3 justify-center text-center flex'>
                <p className='m-0 small cat-text cursor-pointer hover:text-amber-300'>{name}</p>
            </div> )}
        </div> 
     )
   }

const Category = () => {
    const [screenSize, setScreenSize] = useState(window.innerWidth);

    useEffect(() => {
      const handleResize = () => setScreenSize(window.innerWidth);
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);  
    
        const isSmallScreen = screenSize < 640; // sm
        const isMediumScreen = screenSize >= 640 && screenSize < 1024; // sm to lg

        const displayData = isSmallScreen ? Data.slice(0, 2) : Data;

  return (
    <div className='mx-auto flex items-center justify-center w-full'>
        <div className='p-2 shadow-sm w-full'>
            <ul className="flex flex-col gap-4 text-black text-2xl list-none w-max mx-auto">
                {displayData.map((cat) => {
                let visibleItems = cat.items;

                if (isSmallScreen) {
                  visibleItems = visibleItems.filter(item => item.name !== '').slice(0, 2);
                } else if (isMediumScreen) {
                  visibleItems = visibleItems.filter(item => item.name !== '').slice(0, 4);
                }
                
                

                return (
                    <li 
                        // onClick={()=>{setMenu(item.title)}}
                        key={cat.baseId}
                        className='flex flex-row gap-2 my-auto py-auto min-w-[150px]'
                        id={cat.baseId}
                    >
                        <div className="relative flex p-1">
                            {/* <img src={item.image} className='py-0 fs-1 absolute' alt="" /> */}
                            <ul className='block sm:flex sm:flex-row gap-3 list-none w-full'>
                                {visibleItems.map((item, index) => (
                                    <li className='my-auto py-auto' key={index}>
                                    <CategoryItem image={item.image} name={item.name} />
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </li>
                )
                })}
            </ul>
        </div>
    </div>
  )
}

export default Category