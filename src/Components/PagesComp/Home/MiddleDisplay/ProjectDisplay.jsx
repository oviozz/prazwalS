
import {ProjectCard} from "./ProjectCard.jsx";
import {projectDatas} from "../../../../Data/Projects.jsx";


function ProjectDisplay(){

    const projectsItems = projectDatas.slice(0,3).map((project, index) => (
        <ProjectCard key={index} data={project}/>
    ))

    return (
        <div className={"flex flex-wrap justify-center gap-4 lg:p-0 p-4"}>
            {projectsItems}
        </div>
    )

}

export default ProjectDisplay;