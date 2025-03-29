import React from 'react'
import data from '../assets/detailData.js'
import Detail from '../components/detail/detail'


const Catalog = () => {
    let wTitle = 'کاتالوگ'
    const iteem = data.filter((data) => data.title == wTitle)
    const item = iteem[0]    
    return (
        <Detail title={item.title} image={item.image} text1={item.text1} text2={item.text2} />
    )
}

export default Catalog