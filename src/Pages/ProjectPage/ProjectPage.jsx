
import GridDisplay from "../../Components/PagesComp/GridDisplay.jsx";
import Project from "../../Components/PagesComp/Project/Project.jsx";
import './ProjectPage.css'
import {useEffect} from "react";


function ProjectPage(){

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

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