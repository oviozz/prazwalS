
import './App.css'
import NavBarLayout from "./Components/NavBar/NavBarLayout.jsx";
import HomePage from "./Pages/HomePage/HomePage.jsx";
import AnimatedCursor from "react-animated-cursor"
import { Route, Routes } from 'react-router-dom';
import AboutPage from "./Pages/AboutPage/AboutPage.jsx";
import ProjectPage from "./Pages/ProjectPage/ProjectPage.jsx";
import ResumePage from "./Pages/ResumePage/ResumePage.jsx";


function App() {

    return (
        <NavBarLayout>

            <div className={"lg:block hidden"}>
                <AnimatedCursor
                    color="255,255,255"
                    trailingSpeed={3}
                    clickables={['span','button', 'a','p', 'img']}
                    innerSize={8}
                    outerSize={40}
                    innerScale={1}
                    outerScale={2}
                    outerAlpha={1}
                    hasBlendMode={true}
                    outerStyle={{
                        mixBlendMode: 'exclusion'
                    }}
                    innerStyle={{
                        backgroundColor: 'var(--cursor-color)',
                        mixBlendMode: 'exclusion'
                    }}
                />

            </div>

            <Routes>
                <Route path={'/'} element={<HomePage />} />
                <Route path={'/about'} element={<AboutPage />} />
                <Route path={'/projects'} element={<ProjectPage />} />
                <Route path={'/resume'} element={<ResumePage />} />
            </Routes>

        </NavBarLayout>
    )

}

export default App
