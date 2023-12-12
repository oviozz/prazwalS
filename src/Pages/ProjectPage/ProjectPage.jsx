
import GridDisplay from "../../Components/PagesComp/GridDisplay.jsx";
import Project from "../../Components/PagesComp/Project/Project.jsx";
import './ProjectPage.css'


function ProjectPage(){

    return (
        <>
            <GridDisplay delay={'400'}/>

            <div className={"projectPage-wrapper"}>
                <Project />
            </div>

        </>
    )


}

export default ProjectPage;