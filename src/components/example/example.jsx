import React from 'react'

const Example = (props) => {
  return (
    <div className='w-84 rounded-lg bg-amber-100 p-4 text-gray-900'>
         
        <img src={props.image} class="img-responsive rounded-md w-72" alt="Image"/>
        <p className="!font-bold text-xs p-3">{props.title}</p>
        <p className="text-sm border-t border-gray-300 p-3">{props.chap}</p>
        <p className="text-sm border-t border-gray-300 p-3">{props.design}</p>
        <p className="text-sm border-t border-gray-300 p-3">{props.paper}</p>
        <p className="text-sm border-t border-gray-300 p-3">{props.tiraj}</p>
        <button className="w-64 rounded-md bg-amber-400 px-auto">مشاهده قیمت و ثبت سفارش</button>
    </div>
  )
}

export default Example