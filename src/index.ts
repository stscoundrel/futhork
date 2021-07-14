import { getRuneMapping } from './mappings/rune-mapping';

const transform = (content: string, dictionary: Map<string, string>) : string => {
  let result = '';
  const parts: string[] = content.split('');

  parts.forEach((part) => {
    const partKey = part.toLocaleLowerCase();

    if (dictionary.has(partKey)) {
      result += dictionary.get(partKey);
    } else {
      result += part;
    }
  });

  return result;
};

export const runesToLetters = (content: string) : string => {
  const runeMapping = getRuneMapping();
  const result = transform(content, runeMapping);

  return result;
};

export default {
  runesToLetters,
};
