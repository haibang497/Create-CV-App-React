import React, { useContext, useEffect } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { languageOptions } from "./languages";
import { LanguageContext } from "../contexts/Languages";

export default function LanguageSelector() {
  const { userLanguageChange } = useContext(LanguageContext);

  //set selected language by calling context method
  const handleLanguageChange = (e) => {
    userLanguageChange(e);
  };

  useEffect(() => {
    let defaultLanguage = window.localStorage.getItem("Language");
    if (!defaultLanguage) {
      defaultLanguage = window.navigator.language.substring(0, 2);
    }
    userLanguageChange(defaultLanguage);
  }, [userLanguageChange]);

  return (
    <Dropdown>
      <Dropdown.Toggle variant="" id="dropdown-basic">
        <strong>{localStorage.getItem("Language") === "en" ? "English" : "Tiếng Việt"}</strong>
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {Object.entries(languageOptions).map(([id, name]) => {
          return (
            <Dropdown.Item
              onSelect={handleLanguageChange}
              eventKey={id}
              key={id}
            >
              {name}
            </Dropdown.Item>
          );
        })}
      </Dropdown.Menu>
    </Dropdown>
  );
}

