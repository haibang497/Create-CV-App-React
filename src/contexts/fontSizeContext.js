import React from 'react'

const fontSizeContext = React.createContext({
    currentFont: {},
    changeFont: [],
    selectFont: font => {}
});

export default fontSizeContext;