import React from "react";
import "./TopComponent.css"
import LeftComponent from "./Left/LeftComponent"
import RightComponent from "./Right/RightComponent"

const TopComponent = () => {
    return(
        <div className="container">
            <LeftComponent />
            <RightComponent />
        </div>
    )
}

export default TopComponent;