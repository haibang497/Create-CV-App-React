import React, { useState } from "react";
import PropTypes from "prop-types";

import colorContext from "./colorContext";

const defaultColorCV1 = {
  name: "default",
  color: "#007547",
  background:
    "url(https://static.careerbuilder.vn/themes/cv_tool/images/template5-33.png) left bottom no-repeat",
};



const redColor = {
  name: "red",
  color: "#be1e2d",
  background:
    "url(https://static.careerbuilder.vn/themes/cv_tool/images/template5-36.png) left bottom no-repeat",
};

const greenColor = {
  name: "green",
  color: "#8BC53F",
  background:
    "url(https://static.careerbuilder.vn/themes/cv_tool/images/template5-37.png) left bottom no-repeat",
};

const orangeColor = {
  name: "orange",
  color: "orange",
  background:
    "url(https://static.careerbuilder.vn/themes/cv_tool/images/template5-31.png) left bottom no-repeat",
};

const blackColor = {
  name: "black",
  color: "black",
  background:
    "url(https://static.careerbuilder.vn/themes/cv_tool/images/template5-40.png) left bottom no-repeat",
};

const availableColors = [
  defaultColorCV1,
  redColor,
  greenColor,
  orangeColor,
  blackColor,
];

const ColorProvider = (props) => {

  const [selectedColor, setSelectedColor] = useState(defaultColorCV1);
  const selectColor = (name) => {
    const color = availableColors.find((color) => color.name === name);
    if (color) {
      setSelectedColor(color);
    }
  };

  return (
    <colorContext.Provider
      value={{ selectedColor, selectColor, availableColors }}
    >
      {props.children}
    </colorContext.Provider>
  );
};

ColorProvider.propTypes = {
  children: PropTypes.node,
};

export default ColorProvider;
