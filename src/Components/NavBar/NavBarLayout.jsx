
import NavBar from "./NavBar.jsx";
import './NavBarLayout.css'

function NavBarLayout({children}){

    return (
        <div className={"max-wrapper"}>
            <NavBar />
            {children}
        </div>
    )

}

export default NavBarLayout;