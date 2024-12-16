import { translate } from "./functions.js";

let mode = "morse";

const inputArea = document.querySelector(".inputField__textarea");
const outputArea = document.querySelector(".outputField__result");
const translateBtn = document.querySelector(".buttons__translate");
const switchBtn = document.querySelector(".buttons__switch");
const modeTitle = document.querySelector(".mode-title");

translateBtn.addEventListener("click", () => {
  const inputText = inputArea.value.trim();

  if (inputText !== "") {
    try {
      const result = translate(inputText, mode);
      outputArea.value = result;
    } catch (error) {
      outputArea.value = error.message;
    }
  } else {
    outputArea.value = "enter a word";
  }
});

switchBtn.addEventListener("click", () => {
  mode === "morse" ? (mode = "english") : (mode = "morse");
  mode === "morse"
    ? (modeTitle.textContent = "english to morse code")
    : (modeTitle.textContent = "morse code to english");
  const inputVal = inputArea.value;
  const outputVal = outputArea.value;
  outputArea.value = inputVal;
  inputArea.value = outputVal;
});

inputArea.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    translateBtn.click();
  }
});
