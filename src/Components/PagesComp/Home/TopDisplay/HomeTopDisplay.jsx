
import React from 'react';
import './HomeTopDisplay.css'
import 'react-lazy-load-image-component/src/effects/blur.css';
import { HiOutlineArrowDown } from "react-icons/hi2";
import profilePic from '/src/Components/Assests/profilePic.jpg'
import imageResize from "/src/Components/Assests/imageResize.jpeg";


function HomeTopDisplay() {

    return (
        <div className="animate-fade-up">

            <div className="flex flex-col items-center pt-24 pb-10 px-4 sm:px-6 lg:px-8">

                <div className={"relative inline-block"}>

                    <img src={profilePic} className={'rounded-full border-[4px] border-white drop-shadow-2xl  animate-fade-up'} width={'100'} height={'100'} alt='profile pic face'/>

                    <span
                        className="absolute translate-x-1/2 left-auto top-0 right-0 inline-flex items-center bg-purple-100 border-2 border-purple-300  text-purple-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                        <span className="absolute inline-flex  w-2 h-2 animate-pulse me-1 bg-green-500 rounded-full"></span>
                        <span className="relative w-2 h-2 animate-ping me-1 bg-green-500 rounded-full"></span>
                        Available
                    </span>
                </div>

                <div className="mt-5 max-w-3xl text-center mx-auto animate-fade-up animate-delay-[200ms]">
                    <h1 className="text-3xl md:text-4xl lg:text-4xl">
                        <span className={'font-semibold myName '}>I&apos;m Prajwal — </span>
                        a Full Stack developer passionate about creating memorable digital experiences.
                    </h1>
                </div>

                <div className="mt-5 max-w-3xl text-center mx-auto animate-fade-up animate-delay-[400ms]">
                    <p className="lg:text-2xl text-xl font-light ">
                        I&apos;m a <span className={"font-semibold bg-gradient-to-tl from-slate-700 via-violet-700 to-zinc-100 bg-clip-text text-transparent font-bold"}>CSULB</span> student passionate about software development and eager to become a professional developer.
                    </p>
                </div>



                <div className="lg:mt-20 mt-10 text-center relative flex items-center justify-center animate-fade-up animate-delay-[900ms]">
                    <HiOutlineArrowDown size={55} className="absolute top-1/2 -translate-y-1/2 left-1/2 transform -translate-x-1/2" />

                    <svg width="130" height="130" viewBox="0 0 500 500" className="rotating-text">
                        <path id="curve" d="M250 22.5C124.4 22.5 22.5 124.4 22.5 250S124.4 477.5 250 477.5 477.5 375.6 477.5 250c0-125.1-101-226.7-226-227.5H250" fill="none" stroke="none" strokeMiterlimit="10"/>
                        <text width="500" fontSize="7rem" className="svg-text">
                            <textPath xlinkHref="#curve"> scroll down ✦ scroll down ✦ </textPath>
                        </text>
                    </svg>
                </div>

            </div>

        </div>
    );
}

export default HomeTopDisplay;
