import React from "react";
import PropTypes from "prop-types";

import fontSizeContext from "../../contexts/fontSizeContext";
// import "../color/colortItem.scss";
import "./changeFont.scss";

const ChangeFont = (props) => {
  const { selectFont } = React.useContext(fontSizeContext);
  return (
    <button className="changeFont" onClick={() => selectFont(props.fontSizeName)}>
      {props.fontSizeName}
    </button>
  );
};

ChangeFont.propTypes = {
  fontSizeName: PropTypes.string.isRequired,
};

export default ChangeFont;
