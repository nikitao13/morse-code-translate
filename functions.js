import { translationKey } from "./translations.js";

const keys = Object.keys(translationKey);
const values = Object.values(translationKey);

export const translateEnglishToMorse = (englishString) => {
  // handle empty string
  if (englishString === "") return "";

  // handle non-alphabetic input
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
  // handle empty string
  if (morseString === "") return "";

  // handle non-morse input
  if (!/^[\.\-\s\/]+$/.test(morseString)) {
    throw new Error("invalid input");
  }

  // handle extra spaces
  const normalizedMorseString = morseString.replace(/\s+/g, " ");

  const morseStringArr = normalizedMorseString.split(" ");

  return morseStringArr
    .map((str) => {
      if (str === "/") return " ";
      if (str === "") return "";
      const index = values.indexOf(str);
      if (index === -1) {
        throw new Error("invalid input");
      }
      return keys[index];
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
