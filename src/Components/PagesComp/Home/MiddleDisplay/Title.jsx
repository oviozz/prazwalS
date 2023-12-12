
import React from "react";
import './Title.css'

function Title({title}){

    return (
        <h1 className={"text-center text-gray-400 text-sm font-bold titleStyle py-10"}>{title}</h1>
    )

}

export default Title;