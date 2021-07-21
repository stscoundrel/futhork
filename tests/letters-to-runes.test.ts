import futhork from '../src';

describe('Letters to runes transformation tests', () => {
  test('Transforms letters to runes', () => {
    const commonLetters = 'aábcdðeéfghiíjklmnoóǫpqrstuúvwxyýzåäæœöøþ';
    const expected = 'ᛆᛆᛒᚴᚦᚦᚽᚽᚠᚵᚼᛁᛁᛁᚴᛚᛘᚿᚮᚮᚰᛕᚴᚱᛋᛏᚢᚢᚠᚠᛋᛦᛦᛋᚮᛅᛅᚯᚯᚯᚦ';

    const result = futhork.lettersToRunes(commonLetters);

    expect(result).toBe(expected);
  });
});
