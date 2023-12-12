
import React from 'react';
import Ticker from "framer-motion-ticker";
import Title from "./Title.jsx";
import './SkillLists.css'

const SkillLists = () => {

    const images = [
        'https://www.devstringx.com/wp-content/uploads/2023/01/React-Development-1-450x400.png',
        'https://www.loopple.com/img/tailwind-logo.png',
        'https://firebase.google.com/static/downloads/brand-guidelines/PNG/logo-knockout.png',
        'https://assets-global.website-files.com/61cc7ec29b0bf84b1bdc4bf7/64d33c6a4c0b4c9be25938ac_MDB_BIG.D-96d632a9.png',
        'https://www.datocms-assets.com/75941/1657702911-vercel-logotype-light_20211228160702_0.png',
        'https://cdn.freebiesupply.com/logos/large/2x/python-5-logo-black-and-white.png',
        'https://cdn.freebiesupply.com/logos/large/2x/django-logo-black-and-white.png',
        'https://cdn.freebiesupply.com/logos/large/2x/nodejs-logo-black-and-white.png',
    ];

    return (

        <div className="">

            <Title title={'SKILLS I\'VE LEARNED'}/>

            <div className={"px-4 mx-auto"} style={{ display: 'flex', width: '100%', height: '100%', maxWidth: '100%', maxHeight: '100%', placeItems: 'center', margin: '0px', padding: '0px', listStyleType: 'none', opacity: 1, WebkitMaskImage: 'linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 25%, rgb(0, 0, 0) 75%, rgba(0, 0, 0, 0) 100%)', overflow: 'hidden' }}>

                <Ticker duration={20}>
                    {images.map((item, index) => (
                        <div key={index} className={"flex items-center"} >
                            <img
                                key={index}
                                className="mr-10"
                                src={item}
                                style={{
                                    maxWidth: '200px',
                                    height: '50px',
                                }}
                            />

                            <h1 className={"text-2xl mr-10  text-white"}>✦</h1>
                        </div>
                    ))}
                </Ticker>
            </div>

        </div>
    );
};

export default SkillLists;
