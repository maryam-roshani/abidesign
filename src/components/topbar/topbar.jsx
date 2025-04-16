import React from 'react'
import { Link } from 'react-router-dom';
import person from '../../assets/person.svg'
import './topbar.css'
import bag from '../../assets/bag.svg'

const Topbar = () => {
  return (
    <div className=''>
        <div className='h-15 block lg:flex lg:justify-between shadow-sm w-full lg:px-32 lg:py-2 bg-stone-400'>
            <div className="nav-logo flex items-center justify-center p-2 lg:p-3">
                <Link to='/' className='no-underline my-auto text-base font-bold lg:text-lg'><h4 >آبی استودیو</h4></Link>
            </div>
            <div className='flex lg:p-2 rounded-sm md:rounded-md bg-stone-100 gap-1 lg:w-1/3 w-full'>
                <div className="text-gray-600 my-auto">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                    </svg>
                </div>
                <input type="text" placeholder="جستجوی محصول..." className='text-sm rounded-3 border-0 bg-stone-100 p-2 grow text-gray-600'/>
            </div>
            <div className='flex gap-0.5 justify-between mx-1'>
                <div className="flex items-center gap-3">
                    <Link to='/login'>
                        <button className='h-9 px-2 border-0 rounded-md items-center flex text-center bg-stone-500 my-auto'>
                            <img src={person} className='bg-stone-500 h-5' alt="" />
                            <p className='text-sm pr-2'>ورود/عضویت</p>
                        </button>
                    </Link>
                    {/* <Link to='/cart' ><i className="bi bi-cart3 relative h3"> */}
                        {/* <span className="absolute top-20 start-80 translate-middle px-2 py-1 bg-amber-500 rounded-circle text-center">
                            <span className="text-white text-xl flex fst-normal"><p className='m-0 small'>{getTotalCartItems()}</p></span>
                        </span> */}
                    {/* </i></Link>    */}
                </div>
                <div className="rounded-2 p-2 my-auto text-white bg-green-600 rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-bag" viewBox="0 0 16 16">
                        <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z"/>
                    </svg>
                    <div className="rounded-full"></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Topbar