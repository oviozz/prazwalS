
import AboutMeComp from "../../Components/PagesComp/About/AboutMeComp.jsx";
import GridDisplay from "../../Components/PagesComp/GridDisplay.jsx";
import './AboutPage.css'
import {useEffect} from "react";

function AboutPage(){

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

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