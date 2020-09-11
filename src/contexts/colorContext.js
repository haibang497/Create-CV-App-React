import React from 'react'

const colorContext=React.createContext({
    selectedColor:{},
    availableColors:[],
    selectColor:color=>{}
});

export default colorContext;