
import React from 'react';
import './HomeTopDisplay.css'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { HiOutlineArrowDown } from "react-icons/hi2";
import Badge from '@mui/joy/Badge';


function HomeTopDisplay() {

    return (
        <div className="animate-fade-up">

            <div className="flex flex-col items-center pt-24 pb-10 px-4 sm:px-6 lg:px-8">

                <div className={"relative inline-block"}>

                    <img src={"src/Components/Assests/profilePic.jpg"} className={'rounded-full border-[4px] border-white drop-shadow-2xl  animate-fade-up'} width={'100'}/>

                    <span
                        className="absolute translate-x-1/2 left-auto top-0 right-0 inline-flex items-center bg-purple-100 text-purple-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                        <span className="absolute inline-flex  w-2 h-2 animate-pulse me-1 bg-green-500 rounded-full"></span>
                        <span className="relative w-2 h-2 animate-ping me-1 bg-green-500 rounded-full"></span>
                        Available
                    </span>
                </div>

                <div className="mt-5 max-w-3xl text-center mx-auto animate-fade-up animate-delay-[200ms]">
                    <h1 className="text-3xl md:text-4xl lg:text-4xl">
                        <span className={'font-semibold myName '}>I'm Prajwal — </span>
                        a Full Stack developer passionate about creating memorable digital experiences.
                    </h1>
                </div>

                <div className="mt-5 max-w-3xl text-center mx-auto animate-fade-up animate-delay-[400ms]">
                    <p className="lg:text-2xl text-xl font-light ">
                        I'm a <span className={"font-semibold bg-gradient-to-tl from-slate-700 via-violet-700 to-zinc-100 bg-clip-text text-transparent font-bold"}>CSULB</span> student passionate about software development and eager to become a professional developer.
                    </p>
                </div>

                <div className="mt-7 gap-3 flex justify-center animate-fade-up animate-delay-[550ms]">
                    <a
                        className="text-md hover:cursor-none inline-flex justify-center items-center gap-x-3 text-center bg-gradient-to-tl from-blue-600 to-violet-600 hover:from-violet-600 hover:to-blue-600 border border-transparent text-white text-md font-medium rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white py-2 px-4 dark:focus:ring-offset-gray-800"
                        href="#">
                        <svg
                            className="flex-shrink-0 w-4.5 h-4.5"
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            fill="currentColor"
                            viewBox="0 0 16 16"
                        >
                            <path

                                d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"
                            ></path>
                        </svg>
                        View Projects
                    </a>
                </div>

                <div className="lg:mt-16 mt-10 text-center relative flex items-center justify-center animate-fade-up animate-delay-[900ms]">
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
