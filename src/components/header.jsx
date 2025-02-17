import React from 'react'
import { FaArrowLeft } from "react-icons/fa";
import { Link } from 'react-router';


function Header() {
    return (
        <div className=' h-24 text-white flex justify-around '>
            <Link to={"/"}>
            <h2 className="bg-gradient-to-r from-slate-400  to-white text-transparent bg-clip-text hover:scale-110 transition-all text-4xl mt-3 font-bold">TicketHub</h2>
            </Link>
        </div>
    )
}

export default Header