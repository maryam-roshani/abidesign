import React from 'react'
import data from '../assets/detailData.js'
import data2 from '../assets/exampleData.jsx'
import Detail from '../components/detail/detail'
import Example from '../components/example/example.jsx'



const Business = () => {
    console.log(data)
    console.log(data2)
    let wTitle = 'کارت ویزیت'
    let eTitle = 'business-card'
    const iteem = data.filter((data) => data.title == wTitle)
    const item = iteem[0]

    const iteem2 = data2.filter((item) => item.type == eTitle)
    const item2 = data2[0].items
    console.log(item2)

    return (
        <div>
            <Detail title={item.title} image={item.image} text1={item.text1} text2={item.text2} />
            <div className="flex flex-wrap gap-4">
                {item2.map((item) => (
                    <Example title={item.title} image={item.image} chap={item.chap} design={item.design} paper={item.paper} tiraj={item.tiraj} />
                ))}
            </div>
        </div>
    )
}

export default Business