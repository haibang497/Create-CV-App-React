import React from 'react'

import fontSizeContext from './fontSizeContext';
import PropTypes from "prop-types";

const small={
    name: "small",
    fontSize: "12px"
}

const medium={
    name: "medium",
    fontSize: "14px"
}

const large={
    name: "big",
    fontSize: "16px"
}

const changeFont=[small, medium, large];

const FontSizeProvider=(props)=>{
    const[currentFont, setNewFontSize]=React.useState(medium);

    const selectFont=(name)=>{
        const font=changeFont.find((font)=>font.name===name);
        if(font){
            setNewFontSize(font);
        }
    }

    return (
        <fontSizeContext.Provider value={{currentFont, changeFont, selectFont}}>
            {props.children}
        </fontSizeContext.Provider>
    )
}

FontSizeProvider.propTypes={
    children: PropTypes.node,
}

export default FontSizeProvider;