
import ResumeComp from "../../Components/PagesComp/Resume/ResumeComp.jsx";
import './ResumePage.css'
import GridDisplay from "../../Components/PagesComp/GridDisplay.jsx";
import {useEffect} from "react";

function ResumePage(){

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>

            <GridDisplay delay={'400'}/>

            <div className={"resume-wrapper"}>
                <ResumeComp />
            </div>

        </>
    )


}

export default ResumePage;