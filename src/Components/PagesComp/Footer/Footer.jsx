
import './Footer.css'
import {FiArrowRight} from "react-icons/fi";
import React from "react";
import {Link} from "react-router-dom";

function Footer(){

    return (
        <div className="relative text-center flex justify-center items-center lg:gap-5 gap-3 mt-[5rem]">

            <div className="who-display-background absolute inset-0 z-[-10] h-full w-full items-center px-5 py-24 bg-radial-gradient"></div>

            <div className="">
                <h1 className="whoTitle lg:text-5xl text-4xl">Who even is <span>Prajwal?</span></h1>
                <h1 className="lg:text-2xl text-xl mt-2">I’m glad you asked.</h1>
            </div>

            <Link to={'/about'} className="mt-7 bg-[rgb(35, 34, 32)] p-1 rounded-full border-2 border-gray-500 transform transition duration-300 ease-in-out hover:-rotate-180">
                <FiArrowRight size={30} />
            </Link>
        </div>
    )



}

export default Footer;