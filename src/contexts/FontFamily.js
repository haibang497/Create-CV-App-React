import React, { createContext, useState } from "react";

export const FontContext = createContext({
  fontFamily: "Roboto",
});

export const fontLib = {
  Roboto: "Roboto",
  Arial: "Arial",
  TimesNewRoman: "Times New Roman",
  Helvetica: "Helvetica",
  OpenSans: "OpenSans",
};

export function FontProvider({ children }) {
  const [fontFamily, setFont] = useState("Roboto");

  const provider = {
    fontFamily,
    userLanguageChange: (selected) => {
      const newLanguage = fontLib[selected];
      setFont(newLanguage);
    },
  };
  return (
    <FontContext.Provider value={provider}>{children}</FontContext.Provider>
  );
}
