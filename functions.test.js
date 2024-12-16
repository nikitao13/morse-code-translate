import {
  translateEnglishToMorse,
  translateMorseToEnglish,
  translate,
} from "./functions.js";

describe("Morse Code Translator", () => {
  describe("translateEnglishToMorse", () => {
    it("should translate a letter", () => {
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
  });

  describe("translate", () => {
    it("should translate English to Morse", () => {
      expect(translate("hello", "morse")).toBe(".... . .-.. .-.. ---");
    });

    it("should translate Morse to English", () => {
      expect(translate(".... . .-.. .-.. ---", "english")).toBe("hello");
    });

    it("should throw an error for invalid English input", () => {
      expect(() => translate("123", "morse")).toThrow("invalid input");
    });

    it("should throw an error for invalid Morse input", () => {
      expect(() => translate("123", "english")).toThrow("invalid input");
    });
  });
});
