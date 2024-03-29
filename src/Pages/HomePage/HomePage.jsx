
import GridDisplay from "../../Components/PagesComp/GridDisplay.jsx";
import HomeTopDisplay from "../../Components/PagesComp/Home/TopDisplay/HomeTopDisplay.jsx";
import HomeMiddleDisplay from "../../Components/PagesComp/Home/MiddleDisplay/HomeMiddleDisplay.jsx";

import './HomePage.css'
import Footer from "../../Components/PagesComp/Footer/Footer.jsx";
import {useEffect} from "react";

function HomePage(){

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

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