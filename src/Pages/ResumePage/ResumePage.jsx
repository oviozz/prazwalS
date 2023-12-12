
import ResumeComp from "../../Components/PagesComp/Resume/ResumeComp.jsx";
import './ResumePage.css'
import GridDisplay from "../../Components/PagesComp/GridDisplay.jsx";
import Title from "../../Components/PagesComp/Home/MiddleDisplay/Title.jsx";

function ResumePage(){

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