import React from 'react';

const Spacer = ({left,right,top,bottom,size}) => {
    var style = {};
    const getSize = () =>{
        switch (size) {
            case "tiny" :
                return "0.5rem";
            case "small" :
                return "1rem";
            case "medium" :
                return "2rem";
            case "big" :
                return "3rem";
            default :
                return "1rem"
        }
    };
    if(left)
        style.marginLeft = getSize(size);
    if(right)
        style.marginRight = getSize(size);
    if(top)
        style.marginTop = getSize(size);
    if(bottom)
        style.marginBottom = getSize(size);
    return (
        <div style={style}>

        </div>
    );
};

export default Spacer;