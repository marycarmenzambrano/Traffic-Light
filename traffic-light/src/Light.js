import React from "react";

const Light = ({color, lit, setLit }) => {
    return (
        <div>
            <div 
            className="Light" style={{backgroundColor: color === lit? color : "black"}} 
            onClick = {()=>setLit(color)}>

            </div>
        </div>
    );
};

export default Light;