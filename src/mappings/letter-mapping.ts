export const getLetterMapping = (): Map<string, string> => {
  const letterMapping = new Map();

  letterMapping.set('a', 'ᛆ');
  letterMapping.set('á', 'ᛆ');
  letterMapping.set('b', 'ᛒ');
  letterMapping.set('c', 'ᚴ');
  letterMapping.set('d', 'ᚦ');
  letterMapping.set('ð', 'ᚦ');
  letterMapping.set('e', 'ᚽ');
  letterMapping.set('é', 'ᚽ');
  letterMapping.set('f', 'ᚠ');
  letterMapping.set('g', 'ᚵ');
  letterMapping.set('h', 'ᚼ');
  letterMapping.set('i', 'ᛁ');
  letterMapping.set('í', 'ᛁ');
  letterMapping.set('j', 'ᛁ');
  letterMapping.set('k', 'ᚴ');
  letterMapping.set('l', 'ᛚ');
  letterMapping.set('m', 'ᛘ');
  letterMapping.set('n', 'ᚿ');
  letterMapping.set('o', 'ᚮ');
  letterMapping.set('ó', 'ᚮ');
  letterMapping.set('ǫ', 'ᚰ');
  letterMapping.set('p', 'ᛕ');
  letterMapping.set('q', 'ᚴ');
  letterMapping.set('r', 'ᚱ');
  letterMapping.set('s', 'ᛋ');
  letterMapping.set('t', 'ᛏ');
  letterMapping.set('u', 'ᚢ');
  letterMapping.set('ú', 'ᚢ');
  letterMapping.set('ü', 'ᚢ');
  letterMapping.set('v', 'ᚠ');
  letterMapping.set('w', 'ᚠ');
  letterMapping.set('x', 'ᛋ');
  letterMapping.set('y', 'ᛦ');
  letterMapping.set('ý', 'ᛦ');
  letterMapping.set('z', 'ᛋ');
  letterMapping.set('å', 'ᚮ');
  letterMapping.set('ä', 'ᛅ');
  letterMapping.set('æ', 'ᛅ');
  letterMapping.set('œ', 'ᚯ');
  letterMapping.set('ö', 'ᚯ');
  letterMapping.set('ø', 'ᚯ');
  letterMapping.set('þ', 'ᚦ');
  letterMapping.set(' ', ':');

  return letterMapping;
};

export default {
  getLetterMapping,
};
