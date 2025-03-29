import React from 'react'



const Detail = (props) => {
  // console.log(props)
  return (
    <div className='flex bg-white rounded-2 my-2 mx-5 text-black p-5 rounded-md'>
        <div className='block text-right w-3/5'>
            <p className='mb-3 text-lg !font-bold'>چاپ {props.title} | قیمت {props.title} 1000 عدد |  a آبی استودیو </p>
            <p className='text-sm leading-6'>{props.text1}</p>
            <p className='text-sm leading-6'>{props.text2}</p>
            <div className='mt-16 w-1/2 justify-between flex'>
                <button className='py-2 px-4 rounded-md !bg-green-500 text-white'>ثبت سفارش در واتساپ</button>
                <button className='py-2 px-4 rounded-md !bg-red-400 text-white'>سفارش طراحی</button>
            </div>
        </div>
        <div className='w-2/5 mb-3'>
            <img src={props.image} alt="" className='rounded-md w-full' />
        </div>
    </div>
  )
}

export default Detail