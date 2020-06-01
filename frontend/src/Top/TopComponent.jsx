import React from "react";
import ReactDom from "react-dom";
import LeftComponent from "./Left/LeftComponent"
import RightComponent from "./Right/RightComponent"

const TopComponent = () => {
    return(
        <div>
            <LeftComponent />
            <RightComponent />
        </div>
    )
}

export default TopComponent;