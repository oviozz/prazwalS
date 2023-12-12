
import GridDisplay from "../../Components/PagesComp/GridDisplay.jsx";
import HomeTopDisplay from "../../Components/PagesComp/Home/TopDisplay/HomeTopDisplay.jsx";
import HomeMiddleDisplay from "../../Components/PagesComp/Home/MiddleDisplay/HomeMiddleDisplay.jsx";

import './HomePage.css'
import {ProjectCard} from "../../Components/PagesComp/Home/MiddleDisplay/ProjectCard.jsx";
import Footer from "../../Components/PagesComp/Footer/Footer.jsx";

function HomePage(){

    return (
        <>
            <div className={'top-wrapper'}>
                <GridDisplay delay={'900'}/>
                <HomeTopDisplay />
            </div>

            <div className={'middle-wrapper'}>
                <HomeMiddleDisplay />
            </div>

            <Footer />

        </>
    )

}

export default HomePage;