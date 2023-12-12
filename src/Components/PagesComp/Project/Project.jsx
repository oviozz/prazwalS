
import {projectDatas} from "../../../Data/Projects.jsx";
import {AllProjectCard} from "./AllProjectCard.jsx";


function ProjectCards(){


    const projectsItems = projectDatas.map((project, index) => (
        <AllProjectCard key={index} data={project} />
    ))

    return (
        <div className={'flex flex-wrap gap-5 justify-center items-center'}>
            {projectsItems}
        </div>
    )

}


function Project(){

    return (
        <div className={"animate-fade-down mx-auto max-w-screen-xl px-7 py-10 sm:px-6 sm:py-17 lg:px-8"}>

            <div className="max-w-3xl ml-5">
                <h2 className="text-4xl font-semibold sm:text-5xl aboutTitle animate-fade-right">✦ My Projects.</h2>
            </div>


            <div className={"mt-7"}>
                <ProjectCards />
            </div>

        </div>
    )



}

export default Project;