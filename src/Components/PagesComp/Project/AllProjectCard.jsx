

import { useRef, useState } from "react";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import './AllProjectCard.css'
import { FaArrowLeft } from "react-icons/fa6";
import {Link} from "react-router-dom";


export const AllProjectCard = ({data}) => {

    const {title, description, imageUrl, projectUrl} = data
    const divRef = useRef(null);
    const [isFocused, setIsFocused] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [opacity, setOpacity] = useState(0);

    const handleMouseMove = (e) => {
        if (!divRef.current || isFocused) return;

        const div = divRef.current;
        const rect = div.getBoundingClientRect();

        setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };

    const handleFocus = () => {
        setIsFocused(true);
        setOpacity(1);
    };

    const handleBlur = () => {
        setIsFocused(false);
        setOpacity(0);
    };

    const handleMouseEnter = () => {
        setOpacity(1);
    };

    const handleMouseLeave = () => {
        setOpacity(0);
    };

    return (

        <Link
            to={projectUrl}
            target={'_blank'}
            ref={divRef}
            onMouseMove={handleMouseMove}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={`hover:cursor-pointer group animate-fade-down card disableCopying project-card to-slate-950 relative max-w-xl h-[18.5rem] overflow-hidden rounded-xl border-2 border-solid border-gray-700  bg-[rgb(35, 34, 32)] w-full opacity-100 rounded-8 pt-7 pr-7 pl-7 shadow-2xl flex flex-col justify-between`}
        >
            <div
                className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
                style={{
                    opacity,
                    background: `radial-gradient(500px circle at ${position.x}px ${position.y}px, rgba(255,255,255,.2), transparent 40%)`,
                }}
            />

            <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

            <h3 className="mb-2 text-2xl font-semibold tracking-tight text-white">{title}</h3>
            <p className="text-sm font-semibold text-gray-500 mb-7">
                {description}
            </p>

            <button className="group-hover:-rotate-45 -rotate-180 lg:block hidden absolute top-2 right-2 w-fit rounded-full bg-black p-2 transform transition-transform bg-[rgba(35, 34, 32, 0)] p-1 rounded-full border-2 border-gray-500 transform transition duration-300 ease-in-out">
                <FaArrowLeft size={20} />
            </button>

            <div className={'lg:pr-5 lg:pl-5 hover-move-up'}>
                <LazyLoadImage
                    effect={'blur'}
                    loading={'lazy'}
                    className={"rounded-b-none rounded-lg h-full shadow-black shadow-sm"}
                    src={imageUrl}
                />

            </div>

        </Link>
    );
};
