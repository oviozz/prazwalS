
import React, {useEffect} from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Tooltip from '@mui/joy/Tooltip';
import { useState } from 'react';
import aboutMePic from '/src/Components/Assests/myself.jpg'
import {Blurhash} from "react-blurhash";

function AboutMeSocials() {

    const [isCopied, setIsCopied] = useState(false);
    const emailAddress = 'itspraz81@gmail.com';

    const handleCopyEmail = async () => {
        try {
            await navigator.clipboard.writeText(emailAddress);
            setIsCopied(true);

            setTimeout(() => {
                setIsCopied(false);
            }, 1000); // Change back after 1 second
        } catch (error) {
            console.error('Unable to copy email to clipboard', error);
        }
    };

    const socialsData = [
        { name: 'Github', icon: FaGithub, path: 'https://github.com/oviozz' },
        { name: 'LinkedIn', icon: FaLinkedin, path: 'https://www.linkedin.com/in/prajwal-sharma-b99b31221/' },
    ];

    const socialComponents = socialsData.map((social, index) => (
        <li key={index}>
            <Tooltip
                sx={{
                    backgroundColor: 'rgba(13, 13, 18, 0.70)',
                    color: 'white',
                    border: 'none',
                    fontWeight: '400',
                }}
                title={social.name}
                placement="top"
                size="sm"
                variant="outlined"
            >
                <Link target={'_blank'} to={social.path}>
                    <button className="relative rounded-full bg-black p-2 transform transition-transform hover:scale-110 bg-[rgb(35, 34, 32)] p-1 rounded-full border-2 border-gray-500 transform transition duration-300 ease-in-out hover:rotate-45">
                        <social.icon size={30} />
                    </button>
                </Link>

            </Tooltip>
        </li>
    ));

    return (
        <div className={"flex gap-3 items-center"}>
            <ul className={'flex gap-2'}>
                {socialComponents}
            </ul>

            <button
                onClick={handleCopyEmail}
                className="flex items-center gap-3 titleLabel text-[1rem] relative h-fit bg-black px-3 py-1 rounded-full transform transition-transform hover:scale-110 bg-[rgb(35, 34, 32)] border-2 border-gray-500 "
            >
                <FaEnvelope size={20}/>
                {isCopied ? 'Copied Email' : 'Copy Email'}
            </button>
        </div>
    );
}

function AboutMeComp() {

    const blurHash = 'L4Av@3~p^z01KBR-D*-n0002M|?a';
    const [ImageLoaded, setImageLoaded] = useState(false)

    useEffect(() => {
        const img = new Image();
        img.onload = () => {
            setImageLoaded(true);
        }
        img.src = aboutMePic
    }, [])

    return (
        <section>
            <div className="animate-fade-down mx-auto max-w-screen-xl px-7 py-10 sm:px-6 sm:py-17 lg:px-8">
                <div className="max-w-3xl">
                    <h2 className="text-4xl font-semibold sm:text-5xl aboutTitle animate-fade-right">✦ About Me.</h2>
                </div>

                <div className="mt-7 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16 animate-fade-down">
                    <div className="relative h-64 overflow-hidden sm:h-80 lg:h-full">

                        { !ImageLoaded && (
                            <div className={"rounded-lg absolute inset-0 h-full w-full object-cover "}>
                                <Blurhash
                                    hash={blurHash}
                                    width={800}
                                    height={600}
                                    resolutionX={32}
                                    resolutionY={32}
                                    punch={1}
                                    style={{ width: '100%', height: '100%', borderRadius: '10px' }}
                                />
                            </div>

                        )}

                        {
                            ImageLoaded && (
                                <img
                                    alt="Prajwal Sharma"
                                    src={aboutMePic}
                                    className="rounded-lg absolute inset-0 h-full w-full object-cover "
                                />
                            )
                        }

                    </div>

                    <div className="lg:py-14">
                        <article className="space-y-4 text-2xl ">

                            <AboutMeSocials />

                            <p >
                                Hello there! I'm <span className={'bg-gradient-to-tl from-slate-100 via-violet-500 to-zinc-400 bg-clip-text text-transparent font-bold'}>Prajwal Sharma</span>, a passionate full-stack developer based in the beautiful state of California. Currently, I'm pursuing my studies at Cal State University, where I'm diving deep into the fascinating world of technology.
                            </p>

                            <p>
                                My journey in the realm of web development has been nothing short of exhilarating. From crafting elegant front-end interfaces to architecting robust back-end systems, I thrive on bringing ideas to life in the digital space. My dedication to learning and staying at the forefront of industry trends fuels my desire to create meaningful and impactful solutions.
                            </p>


                        </article>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutMeComp;
