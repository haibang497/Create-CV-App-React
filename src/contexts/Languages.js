import React, { createContext, useState, useContext } from "react";

import { languageOptions, dictionaryList } from "../components/languages/index";

//create the language context
export const LanguageContext = createContext({
  userLanguage: "en",
  dictionary: dictionaryList.en,
});

//provides context to the app
export function LanguageProvider({ children }) {
  const [userLanguage, setUserLanguage] = useState("en");

  const provider = {
    userLanguage,
    dictionary: dictionaryList[userLanguage],
    userLanguageChange: (selected) => {
      const newLanguage = languageOptions[selected] ? selected : "en";
      setUserLanguage(newLanguage);
      window.localStorage.setItem("Language", newLanguage);
    },
  };

  return (
    <LanguageContext.Provider value={provider}>
      {children}
    </LanguageContext.Provider>
  );
}

export function deepFind(obj, path) {
  var paths = path.split("."),
    current = obj,
    i;

  for (i = 0; i < paths.length; ++i) {
    if (current[paths[i]] === undefined) {
      return undefined;
    } else {
      current = current[paths[i]];
    }
  }
  return current;
}

//get text according to id & current Language
export function Text(key1) {
  const languageContext = useContext(LanguageContext);
  return deepFind(languageContext.dictionary, key1);
}



