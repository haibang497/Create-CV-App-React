import React, { useContext } from "react";

import LanguageSelector from "../LanguageSelector";
import "./Tool.scss";
import colorContext from "../../contexts/colorContext";
import fontSizeContext from "../../contexts/fontSizeContext";
import ColorItem from "../color/colorItem";
import ChangeFont from "../fontSize/changeFont";
import { FontSelector } from "../FontSelector";

export const Tool = () => {
  const { selectedColor, availableColors } = useContext(colorContext);
  const { currentFont, changeFont } = useContext(fontSizeContext);
  return (
    <div className="tool">
      <div className="container">
        <h2>Tools</h2>
        <hr></hr>
        <div className="change-template">
          <h3>Template</h3>
          <div className="row">
            <div className="col-md-8">Template 5</div>
            <div className="col-md-4"></div>
          </div>
          <h3>Color</h3>
          <div className="row">
          <div className="col-md-12 text">
              {`Color: ${selectedColor.name}`}
          </div>
          <div className="col-md-12 change-color">
              {availableColors.map((color) => (
                <ColorItem key={color} colorName={color.name} />
              ))}
          </div>
          </div>
          <h3>Language</h3>
          <LanguageSelector />
          <h3>Font Family</h3>
          <FontSelector />
          <h3>Font Size</h3>
          <div className="row">
            <div className="col-md-12 text">
              {`Current font size: ${currentFont.name}`}
            </div>
            <div className="col-md-12">
              {changeFont.map((font) => (
                <ChangeFont key={font} fontSizeName={font.name} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
