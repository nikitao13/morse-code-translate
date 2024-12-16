import { translationKey } from "./translations.js";

const keys = Object.keys(translationKey);
const values = Object.values(translationKey);

export const translateEnglishToMorse = (englishString) => {
  if (englishString === "") return "";

  if (!/^[a-zA-Z\s]+$/.test(englishString)) {
    throw new Error("invalid input");
  }

  const strArr = englishString.toUpperCase().split("");
  const x = strArr.map((char) => {
    if (char === " ") return "/";
    const index = keys.indexOf(char);
    return index !== -1 ? values[index] : "";
  });
  return x.join(" ").toLowerCase();
};

export const translateMorseToEnglish = (morseString) => {
  if (morseString === "") return "";

  if (!/^[\.\-\s\/]+$/.test(morseString)) {
    throw new Error("invalid input");
  }

  const morseStringArr = morseString.split(" ");
  return morseStringArr
    .map((str) => {
      if (str === "/") return " ";
      const index = values.indexOf(str);
      return index !== -1 ? keys[index] : "";
    })
    .join("")
    .toLowerCase();
};

export const translate = (text, translateTo) => {
  if (translateTo === "morse") {
    return translateEnglishToMorse(text);
  }

  if (translateTo === "english") {
    return translateMorseToEnglish(text);
  }
};
