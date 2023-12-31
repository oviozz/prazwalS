
import NavBarButton from "./NavBarButton.jsx";
import './NavBar.css'

import { CiHeart, CiMap, CiChat1, CiAt, CiExport } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import './NavBar.css'

function NavBar(){

    return (
        <div className={"flex justify-center"}>
            <div className={"fixed bottom-0 glassCard w-fit flex gap-3 px-3 py-2 rounded-full mb-5 animate-fade-up z-50"}>

                <NavBarButton icon={CiAt} title={'Home'}/>

                <NavBarButton icon={CiHeart} title={'About me'} path={'/about'}/>

                <NavBarButton icon={CiMap} title={'Projects'} path={'/projects'}/>

                <NavBarButton icon={CiExport} title={"Resume"} path={'/resume'}/>

                <div className="separator"></div>

                <NavBarButton icon={CiLinkedin} title={"linkedin/prajwal"} path={'https://www.linkedin.com/in/prajwal-sharma-b99b31221/'} target={'_blank'}/>

            </div>
        </div>
    )


}


export default NavBar;