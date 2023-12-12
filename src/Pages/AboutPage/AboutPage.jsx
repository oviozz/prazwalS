
import AboutMeComp from "../../Components/PagesComp/About/AboutMeComp.jsx";
import GridDisplay from "../../Components/PagesComp/GridDisplay.jsx";
import './AboutPage.css'
import SkillLists from "../../Components/PagesComp/Home/MiddleDisplay/SkillLists.jsx";

function AboutPage(){

    return (
        <>

            <GridDisplay delay={'400'}/>

            <div className={'page-wrapper'}>
                <AboutMeComp />

            </div>
        </>
    )


}

export default AboutPage;