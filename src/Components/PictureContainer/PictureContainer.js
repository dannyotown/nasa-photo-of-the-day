import React from "react";
import "./PictureContainer.css";


export function Body(props) {
    return (
        <div class="bodyContain">
            <div class="picBox">
                <img id="mainPic" src={props.pic} alt="Random Planet"/>
            </div>
            <div class="infoBox">
                <div class="pictureTitle">
                    <h2>{props.title}</h2>
                </div>
                <hr class="hrWidth">
                </hr>
                <p>
                    {props.body}
                </p>
            </div>
        </div>
    );
}