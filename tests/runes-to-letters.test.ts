import futhork from '../src';

describe('Runes to letters transformation tests', () => {
  test('Transforms runes to letters', () => {
    const runes = 'ᚠᚢᚦᚮᚱᚴᚼᚿᛁᛆᛌᛋᛐᛏᛒᛘᛚᛦᚯᛅᚰᛕ';
    const expected = 'fuþorkhniassttbmlyøæǫᴘ';

    const result = futhork.runesToLetters(runes);

    expect(result).toBe(expected);
  });
});
