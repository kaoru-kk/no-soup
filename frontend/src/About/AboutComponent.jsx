import React from "react";
import "./AboutComponent.css";

const AboutComponent = () => {
    return(
        <div>

            <h2 className="japanText">このサイトについて</h2>
            <p className="japanText">汁なしラーメン（まぜそば、油そば）の検索サイトです。</p>
            <p className="japanText">汁なしラーメンが大好きなあなた、こんな経験はありませんか？</p>
            <ul>
                <li className="japanText">「汁なしラーメンが食べたいのに専門のサイトがない！」</li>
                <li className="japanText">「この店って汁なしラーメンあったっけ？</li>
                <li className="japanText">「近くに何店舗かあるけど、何処が一番美味しいの？」</li>
            </ul>
            <p className="japanText">このサイトでは、今いる場所を検索すると、近くの汁なしラーメンがある店舗を紹介してくれます。</p>
            <p className="japanText">また、口コミ・感想を投稿できるのでお店選びの参考にしてみてください</p>
        </div>
    )
}

export default AboutComponent;