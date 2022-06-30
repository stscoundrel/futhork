# Futhork (Medieval Runes)

Transform latin letters to Futhork runes & vice versa

Other runic alphabets:
- [Younger Futhark](https://github.com/stscoundrel/younger-futhark)
- [Elder Futhark](https://github.com/stscoundrel/elder-futhark)
- [Futhorc (Anglo-Saxon runes)](https://github.com/stscoundrel/futhorc)
- [Staveless Futhark](https://github.com/stscoundrel/staveless-futhark)

### Install

`yarn add futhork`

#### Usage

You can either transform runes to text, or text to runes.

Latin text to runes:

```javascript
import { lettersToRunes } from 'futhork'

const result = lettersToRunes('lorem ipsum dolor sit amet')

console.log(result) // "ᛚᚮᚱᛁᛘ:ᛁᛕᛋᚢᛘ:ᚦᚮᛚᚮᚱ:ᛋᛁᛏ:ᛆᛘᛁᛏ
```

Runes to latin text:

```javascript
import { runesToLetters } from 'futhork'

const result = runesToLetters('ᛚᚮᚱᛁᛘ:ᛁᛕᛋᚢᛘ:ᚦᚮᛚᚮᚱ:ᛋᛁᛏ:ᛆᛘᛁᛏ')

console.log(result) // lorem ipsum dolor sit amet
```

### About Futhorc

The futhork, or the medieval runes, was a Scandinavian runic alphabet that evolved from the Younger Futhark at the end of the Viking Age. Used roughly from 12th to 17th centuries.
