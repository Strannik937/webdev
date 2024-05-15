import React from "react";

function mainBlock(props) {
    return (
        <div className="blocks">
            <img  src={props.image} alt="Image" className="block_image"/>
            <h3>{props.title}</h3>
            <p className="block_text">Lorem ipsum, dolor sit amet consectetur adipisicing elit</p>
        </div>
    );
}

export default mainBlock;