
import './ResumeComp.css'
import { MdOutlineFileDownload } from "react-icons/md";
import {prajwalResume} from "../../../Data/ResumeData.jsx";

import {useState} from "react";


function ResumeComp(){

    const [resumeBtnText, setresumeBtnText] = useState("Download Resume");

    const downloadResume = () => {

        setresumeBtnText("Downloaded");

        fetch("PrajwalSharmaResume.pdf").then((response) => {
            response.blob().then((blob) => {
                const fileURL = window.URL.createObjectURL(blob);
                let downloadLink = document.createElement("a");
                downloadLink.href = fileURL;
                downloadLink.download = "PrajwalResume.pdf";
                document.body.appendChild(downloadLink);
                downloadLink.click();
                document.body.removeChild(downloadLink);
            });
        });

        setTimeout(() => {
            setresumeBtnText("Download Resume");
        }, 2000);
    };

    const resumeData = prajwalResume;

    return (

        <div className="animate-fade-down px-4 mt-4 ">
            <main className="">

                    <div className=" p-3 mx-auto my-auto print:border-0 page print:max-w-letter print:max-h-letter print:mx-0 print:my-o lg:h-letter md:max-w-letter md:h-letter rounded-2xl print:bg-white">

                    <header className="inline-flex items-baseline justify-between w-full mb-3 align-top border-b-4 ">

                        <div className={"flex flex-col w-full"}>
                            <div className="block">
                                <h1 className="animate-fade-right personTitle mb-0 lg:text-5xl text-4xl font-extrabold">
                                    <span className={'text-white'}>✦</span> {resumeData.name}
                                </h1>

                                <h2 className="animate-fade-right mt-1 ml-2 text-xl font-semibold leading-snugish">
                                    Full Stack Developer
                                </h2>

                            </div>

                            <div className={"flex justify-between items-center"}>

                                <h3 className="animate-fade-right m-0 mt-2 ml-2 mb-2 font-semibold text-md leading-snugish">
                                    Cerritos, California
                                </h3>

                                <button onClick={downloadResume} className={'cursor-pointer animate-fade-left lg:text-sm text-xs flex items-center gap-1 -mr-2 bg-black px-2 py-1 mb-2 rounded-full transform transition-transform hover:scale-110 bg-[rgb(35, 34, 32)] border-2 border-gray-500'}>
                                    {resumeBtnText} <MdOutlineFileDownload size={18} color={'white'}/>
                                </button>
                            </div>
                        </div>

                        <div className="animate-fade-left justify-between px-3 mt-0 mb-5 -ml-7 text-3xl font-bold leading-none  initials-container bg-gray-750 print:bg-black" style={{
                            paddingBottom: '1.5rem',
                            paddingTop: '1.5rem',
                        }}>
                            <div className="text-center initial">P</div>
                            <div className="text-center initial">S</div>

                        </div>

                    </header>

                    <div className="animate-fade-down col-gap-16 md:col-count-2 print:col-count-2 md:h-letter-col-full print:h-letter-col-full col-fill-balance">
                        <section className="pb-2 mt-4 first:mt-0">
                            <div className="break-inside-avoid">

                                <section className="pb-2 mb-2 border-b-4 break-inside-avoid">

                                    <ul className="list-inside pr-7">

                                        <li className="mt-1 leading-normal transition duration-100 ease-in ">

                                            <a href="mailto:itspraz81@gmail.com" className="group relative">

                                                <span className="lg:mr-8 mr-1 lg:text-xl text-xl font-semibold leading-snugish">
                                                    Email:
                                                </span>

                                                {resumeData.email}

                                                <span className="lg:inline-block hidden ml-2 group-hover:rotate-45 font-normal transition duration-100 ease-in  print:text-black ">
                                                    ↗
                                                </span>
                                            </a>
                                        </li>
                                        <li className="mt-1 leading-normal transition duration-100 ease-in ">
                                            <a>
                                        <span className="lg:mr-8 mr-1 lg:text-xl text-xl font-semibold text-white leading-snugish">
                                            School:
                                        </span>
                                                {resumeData.education.school}
                                            </a>
                                        </li>
                                    </ul>
                                </section>
                            </div>
                        </section>

                        <section className="pb-2 mt-4 first:mt-0">

                            <div className="break-inside-avoid">
                                <h2 className="mb-2 text-xl font-bold tracking-widest text-white print:font-normal">
                                    EDUCATION
                                </h2>

                                <ol className="relative border-s border-white">

                                    <li className="mb-5 ms-4">
                                        <div className="absolute w-3 h-3 bg-violet-700 shadow-2xl rounded-full mt-1.5 -start-1.5 border-2 border-white"></div>
                                        <time className="mb-1 lg:text-xl text-sm font-normal leading-none text-white ">
                                            {resumeData.education.degree}. {resumeData.education.gpa}
                                        </time>
                                        <h3 className="lg:text-xl text-1xl font-semibold text-white ">{resumeData.education.school}</h3>

                                        <div className={"flex gap-2"}>
                                            <h1 className={"font-bold lg:text-xl text-xl"}>Courses:</h1>
                                            <ul className="lg:flex lg:gap-3 mb-4 text-base font-normal text-white">
                                                {
                                                    resumeData.education.courses.map((courses,index) => (
                                                        <li className={'underline lg:text-xl text-md'} key={index}>{`${courses},`}</li>
                                                    ))
                                                }
                                            </ul>
                                        </div>

                                    </li>


                                </ol>


                            </div>

                        </section>

                        <section className="pb-2  border-b-4 first:mt-0">

                            <div className="break-inside-avoid">
                                <h2 className="mb-2 text-xl font-bold tracking-widest text-white print:font-normal">
                                    PROJECTS
                                </h2>

                                <ol className="relative border-s ">
                                    {
                                        resumeData.projects.map((project, index) => (
                                            <li key={index} className="mb-10 ms-4">
                                                <div className="bg-violet-700 shadow-2xl absolute w-3 h-3 rounded-full mt-1.5 -start-1.5 border-2 border-white"></div>
                                                <h3 className="lg:text-2xl text-xl font-semibold text-white">{project.name}</h3>
                                                <p className="mb-4  font-normal text-white  text-xl">{project.description}</p>


                                                <div className={"flex gap-2"}>
                                                    <h1 className={"font-bold lg:text-xl text-xl"}>Technologies:</h1>

                                                    <ul className={"flex flex-wrap gap-2"}>
                                                        {project.technologies.map((technologies, index) => (
                                                            <li className={'underline lg:text-xl text-1xl'} key={index}>{`${technologies},`}</li>
                                                        ))}
                                                    </ul>
                                                </div>


                                                <div className={"flex gap-2 lg:mt-0 mt-5"}>
                                                    <h1 className={"font-bold lg:text-xl text-xl"}>Framework:</h1>

                                                    <ul className={"flex flex-wrap gap-2 "}>
                                                        {project.frameworks.map((framework, index) => (
                                                            <li className={'underline lg:text-xl text-1xl'} key={index}>{`${framework},`}</li>
                                                        ))}
                                                    </ul>
                                                </div>

                                            </li>
                                        ))
                                    }
                                </ol>

                            </div>
                        </section>

                        <section className="pb-4 mt-4 first:mt-0 mb-20">
                            <div className="break-inside-avoid">
                                <h2 className="mb-2 text-xl font-bold tracking-widest text-white print:font-normal">
                                    SKILLS
                                </h2>

                                <section className="mb-2 break-inside-avoid">
                                    <header>

                                        <div className="absolute w-3 h-3 bg-violet-700 shadow-2xl rounded-full mt-1.5 -start-1.5 border-2 border-white "></div>
                                        <h3 className=" lg:text-xl text-xl font-semibold leading-snugish ml-5">
                                            Front-End Developer
                                        </h3>
                                    </header>

                                    <div className="my-1 last:pb-1 ml-5">
                                        <ul className="flex flex-col gap-2 text-sm2  -mr-1.6 -mb-1 mt-2.1">

                                            <div className={"flex gap-2 "}>
                                                <h1 className={"font-bold lg:text-xl text-xl"}>Languages:</h1>

                                                <ul className={"flex flex-wrap gap-2"}>
                                                    {resumeData.technicalSkills.languages.map((technologies, index) => (
                                                        <li className={'underline lg:text-xl text-1xl'} key={index}>{`${technologies},`}</li>
                                                    ))}
                                                </ul>
                                            </div>


                                            <div className={"flex gap-2 lg:mt-0 mt-5"}>
                                                <h1 className={"font-bold lg:text-xl text-xl"}>Frameworks:</h1>

                                                <ul className={"flex flex-wrap gap-2 "}>
                                                    {resumeData.technicalSkills.frameworks.map((framework, index) => (
                                                        <li className={'underline lg:text-xl text-1xl'} key={index}>{`${framework},`}</li>
                                                    ))}
                                                </ul>
                                            </div>

                                            <div className={"flex gap-2 lg:mt-0 mt-5"}>
                                                <h1 className={"font-bold lg:text-xl text-xl"}>Libraries:</h1>

                                                <ul className={"flex flex-wrap gap-2"}>
                                                    {resumeData.technicalSkills.libraries.map((technologies, index) => (
                                                        <li className={'underline lg:text-xl text-1xl'} key={index}>{`${technologies},`}</li>
                                                    ))}
                                                </ul>
                                            </div>


                                            <div className={"flex gap-2 lg:mt-0 mt-5 "}>
                                                <h1 className={"font-bold lg:text-xl text-xl"}>DeveloperTools:</h1>

                                                <ul className={"flex flex-wrap gap-2 "}>
                                                    {resumeData.technicalSkills.developerTools.map((framework, index) => (
                                                        <li className={'underline lg:text-xl text-1xl'} key={index}>{`${framework},`}</li>
                                                    ))}
                                                </ul>
                                            </div>


                                        </ul>
                                    </div>
                                </section>
                            </div>
                        </section>
                    </div>
                </div>
            </main>
        </div>


    )


}

export default ResumeComp;
