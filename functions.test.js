import {
  translateEnglishToMorse,
  translateMorseToEnglish,
  translate,
} from "./functions.js";

describe("Morse Code Translator", () => {
  describe("translateEnglishToMorse", () => {
    it("should translate a letter from ", () => {
      expect(translateEnglishToMorse("a")).toBe(".-");
    });

    it("should translate a word with spaces as slashes", () => {
      expect(translateEnglishToMorse("my cat")).toBe("-- -.-- / -.-. .- -");
    });

    it("should treat uppercase and lowercase equally", () => {
      expect(translateEnglishToMorse("My Cat")).toBe("-- -.-- / -.-. .- -");
    });

    it("should return an empty string if input is empty", () => {
      expect(translateEnglishToMorse("")).toBe("");
    });

    it("should throw an error for invalid input", () => {
      expect(() => translateEnglishToMorse("123")).toThrow("invalid input");
    });

    it("should translate a string with multiple spaces", () => {
      expect(translateEnglishToMorse("hello   world")).toBe(
        ".... . .-.. .-.. --- / / / .-- --- .-. .-.. -.."
      );
    });

    it("should throw an error for punctuation or special characters", () => {
      expect(() => translateEnglishToMorse("hello!")).toThrow("invalid input");
    });

    it("should handle only spaces", () => {
      expect(translateEnglishToMorse("     ")).toBe("/ / / / /");
    });
  });

  describe("translateMorseToEnglish", () => {
    it("should translate a morse code letter", () => {
      expect(translateMorseToEnglish(".-")).toBe("a");
    });

    it("should translate a word with slashes as spaces", () => {
      expect(translateMorseToEnglish("-- -.-- / -.-. .- -")).toBe("my cat");
    });

    it("should return an empty string if input is empty", () => {
      expect(translateMorseToEnglish("")).toBe("");
    });

    it("should throw an error for invalid input", () => {
      expect(() => translateMorseToEnglish("123")).toThrow("invalid input");
    });

    it("should translate morse with extra spaces between letters", () => {
      expect(translateMorseToEnglish("....  .")).toBe("he");
    });

    it("should throw an error for invalid morse patterns", () => {
      expect(() => translateMorseToEnglish("....--")).toThrow("invalid input");
    });

    it("should handle a single slash as a space", () => {
      expect(translateMorseToEnglish("/")).toBe(" ");
    });
  });

  describe("translate", () => {
    it("should translate english to morse", () => {
      expect(translate("hello", "morse")).toBe(".... . .-.. .-.. ---");
    });

    it("should translate morse to english", () => {
      expect(translate(".... . .-.. .-.. ---", "english")).toBe("hello");
    });

    it("should throw an error for invalid english input", () => {
      expect(() => translate("123", "morse")).toThrow("invalid input");
    });

    it("should throw an error for invalid morse input", () => {
      expect(() => translate("123", "english")).toThrow("invalid input");
    });
  });
});
