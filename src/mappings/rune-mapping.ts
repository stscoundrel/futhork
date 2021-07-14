export const getRuneMapping = (): Map<string, string> => {
  const runeMapping = new Map();
  runeMapping.set('ᚠ', 'f');
  runeMapping.set('ᚢ', 'u');
  runeMapping.set('ᚦ', 'þ');
  runeMapping.set('ᚮ', 'o');
  runeMapping.set('ᚱ', 'r');
  runeMapping.set('ᚴ', 'k');
  runeMapping.set('ᚼ', 'h');
  runeMapping.set('ᚿ', 'n');
  runeMapping.set('ᛁ', 'i');
  runeMapping.set('ᛆ', 'a');
  runeMapping.set('ᛌ', 's');
  runeMapping.set('ᛋ', 's');
  runeMapping.set('ᛐ', 't');
  runeMapping.set('ᛏ', 't');
  runeMapping.set('ᛒ', 'b');
  runeMapping.set('ᛘ', 'm');
  runeMapping.set('ᛚ', 'l');
  runeMapping.set('ᛦ', 'y');
  runeMapping.set(':', '');

  // Sting diacritic secondary sounds.
  runeMapping.set('ᚯ', 'ø');
  runeMapping.set('ᛅ', 'æ');
  runeMapping.set('ᚰ', 'ǫ');
  runeMapping.set('ᛕ', 'ᴘ');
  return runeMapping;
};

export default {
  getRuneMapping,
};
