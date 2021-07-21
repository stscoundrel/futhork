import futhork from '../src';

describe('Runes to letters transformation tests', () => {
  test('Transforms runes to letters', () => {
    const runes = 'ᚠᚢᚦᚮᚱᚴᚼᚿᛁᛆᛌᛋᛐᛏᛒᛘᛚᛦᚯᛅᚰᛕᚽ';
    const expected = 'fuþorkhniassttbmlyøæǫᴘe';

    const result = futhork.runesToLetters(runes);

    expect(result).toBe(expected);
  });

  test('Does not transform non-matched characters', () => {
    const notRunes = '12345-6789';
    const result = futhork.runesToLetters(notRunes);

    expect(result).toBe(notRunes);
  });
});
