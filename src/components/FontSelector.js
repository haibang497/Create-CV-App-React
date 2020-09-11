import React, { useEffect, useContext } from "react";
import Dropdown from "react-bootstrap/Dropdown";

import { FontContext, fontLib } from "../contexts/FontFamily";

export function FontSelector() {
  const { userLanguageChange } = useContext(FontContext);
  const currentFont = (e) => {
    localStorage.setItem("fontTest", e);
    userLanguageChange(e);
  };
  useEffect(() => {
    let defaultFont = localStorage.getItem("fontTest");
    if (!defaultFont) {
      console.log("123");
      defaultFont = localStorage.setItem("fontTest", fontLib.Roboto);
    }
    userLanguageChange(defaultFont);
  }, [userLanguageChange]);

  return (
    <Dropdown>
      <Dropdown.Toggle variant="" id="dropdown-basic">
        <strong>
          {localStorage.getItem("fontTest") === "TimesNewRoman"
            ? "Times New Roman"
            : localStorage.getItem("fontTest")}
        </strong>
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {Object.entries(fontLib).map(([id, name]) => {
          return (
            <Dropdown.Item onSelect={currentFont} eventKey={id} key={id}>
              {name}
            </Dropdown.Item>
          );
        })}
      </Dropdown.Menu>
    </Dropdown>
  );
}
