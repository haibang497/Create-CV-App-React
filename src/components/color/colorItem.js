import React from "react";
import PropTypes from "prop-types";

import "./colortItem.scss";

import colorContext from "../../contexts/colorContext";

const ColorItem = (props) => {
  const { selectColor } = React.useContext(colorContext);
  return (
    <button onClick={() => selectColor(props.colorName)}>
      {props.colorName}
    </button>
  );
};

ColorItem.propTypes = {
  colorName: PropTypes.string.isRequired,
};

export default ColorItem;
