
import NavBar from "./NavBar.jsx";
import './NavBarLayout.css'

function NavBarLayout(props){

    return (
        <div className={"max-wrapper"}>
            <NavBar />
            {props.children}
        </div>
    )

}

export default NavBarLayout;