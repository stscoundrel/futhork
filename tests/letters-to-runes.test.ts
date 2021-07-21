import futhork from '../src';

describe('Letters to runes transformation tests', () => {
  test('Transforms letters to runes', () => {
    const commonLetters = 'aábcdðeéfghiíjklmnoóǫpqrstuúvwxyýzåäæœöøþ';
    const expected = 'ᛆᛆᛒᚴᚦᚦᚽᚽᚠᚵᚼᛁᛁᛁᚴᛚᛘᚿᚮᚮᚰᛕᚴᚱᛋᛏᚢᚢᚠᚠᛋᛦᛦᛋᚮᛅᛅᚯᚯᚯᚦ';

    const result = futhork.lettersToRunes(commonLetters);

    expect(result).toBe(expected);
  });

  test('Transforms full sentence', () => {
    // From Lord's Prayer.
    const content = 'Faðer uor som ast i himlüm, halgað warðe þit nama';
    const expected = 'ᚠᛆᚦᚽᚱ:ᚢᚮᚱ:ᛋᚮᛘ:ᛆᛋᛏ:ᛁ:ᚼᛁᛘᛚᚢᛘ,:ᚼᛆᛚᚵᛆᚦ:ᚠᛆᚱᚦᚽ:ᚦᛁᛏ:ᚿᛆᛘᛆ';

    const result = futhork.lettersToRunes(content);

    expect(result).toBe(expected);
  });
});
