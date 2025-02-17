import React from 'react'
import { FaArrowLeft } from "react-icons/fa";


function Header() {
    return (
        <div className=' h-24 text-white flex justify-around '>
         <a className='uppercase' href="">home</a>
         <a className='uppercase' href="">about</a>
         <a className='uppercase' href="">Contact</a>
         <a className='uppercase' href="">services</a>
        </div>
    )
}

export default Header