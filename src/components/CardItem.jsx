import React from 'react'
import Data from '../Assets/Data'

const CardItem = () => {

    return (
        Data.map((item, i) => {
            return <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                <img className='w-20 mx-auto mt-[-3rem] bg-white' src={item.image} alt="/" />
                <h2 className='text-2xl font-bold text-center py-8'>{item.title}</h2>
                <p className='text-center text-4xl font-bold'>{item.price}</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>500 GB Storage</p>
                    <p className='py-2 border-b mx-8'>{item.user} Granted User</p>
                    <p className='py-2 border-b mx-8'>Send up to {item.storage} GB</p>
                </div>
                <button style={
                    {
                        margin: "40px 30px",
                        padding: "10px",
                        borderRadius:"25px",
                        color: item.btnTextColor,
                        background: item.btnBgColor
                    }
                }>Start Trial </button>
            </div>
        })
    )
}

export default CardItem