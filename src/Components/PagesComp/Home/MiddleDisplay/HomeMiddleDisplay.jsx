
import SkillLists from "./SkillLists.jsx";
import ProjectDisplay from "./ProjectDisplay.jsx";
import Title from "./Title.jsx";

function HomeMiddleDisplay(){

    return (
        <div className={"mt-[5rem]"}>
            <SkillLists />

            <div className={"mt-[7rem]"}>
                <Title title={'SOME OF MY WORK'}/>
                <ProjectDisplay />
            </div>

            <Title title={' ✦ ━━━━━━━━━━━━━━ ✦ ━━━━━━━━━━━━━━ ✦ '} />

        </div>
    )

}


export default HomeMiddleDisplay;