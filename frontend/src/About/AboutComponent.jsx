import React from "react";

function Welcome(props){
    return <h1>hello ,{ props.intro }</h1>
}

const AboutComponent = () => {
    return(
        <div>
            this is about page
            背景に「汁なしそば、ラーメンとは」という男らしい文字で書く（理想は習字のようなもの）
            <br></br>
            背景画像は固定で、
            縦書きで文字を書きたい
            <Welcome intro="jas" />
            <Welcome intro="taro" />
            <Welcome intro="miki" />
        </div>
    )
}

export default AboutComponent;