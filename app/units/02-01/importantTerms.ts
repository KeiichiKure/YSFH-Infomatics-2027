export const learningSections = [
  { id: 'signal', number: 1, label: '波を区切る', worksheet: '1・2' },
  { id: 'media', number: 2, label: '0と1の世界', worksheet: '3・4' },
  { id: 'bits', number: 3, label: 'ビットとバイト', worksheet: '5・6・7' },
  { id: 'bases', number: 4, label: '進数変換', worksheet: '9〜12' },
  { id: 'characters', number: 5, label: '文字コード', worksheet: '25〜29' },
] as const;

export const importantTerms = [
  { id: 'continuous', sectionNumber: 1, term: '連続的', definition: '切れ目なく変化する。' },
  { id: 'discrete', sectionNumber: 1, term: '離散的', definition: '飛び飛びの値として表す。' },
  { id: 'binary-system', sectionNumber: 2, term: '2進法', definition: '0と1で数を表す方法。' },
  { id: 'binary-number', sectionNumber: 2, term: '2進数', definition: '2進法で表した数値。' },
  { id: 'bit', sectionNumber: 3, term: 'ビット', definition: '情報量の最小単位。' },
  { id: 'eight-bits', sectionNumber: 3, term: '8ビット', definition: '8個のビットをまとめる。' },
  { id: 'byte', sectionNumber: 3, term: '1バイト', definition: '8ビットのまとまり。' },
  { id: '1024', sectionNumber: 3, term: '1024', definition: '2の10乗。' },
  { id: 'decimal-system', sectionNumber: 4, term: '10進法', definition: '0〜9を使う表現方法。' },
  { id: 'decimal-number', sectionNumber: 4, term: '10進数', definition: '10進法で表した数値。' },
  { id: 'hexadecimal-system', sectionNumber: 4, term: '16進法', definition: '0〜9とA〜Fを使う方法。' },
  { id: 'hexadecimal-number', sectionNumber: 4, term: '16進数', definition: '16進法で表した数値。' },
  { id: 'single-byte', sectionNumber: 5, term: '1バイト', definition: '英数字・記号などの基本。' },
  { id: 'two-bytes', sectionNumber: 5, term: '2バイト', definition: 'JIS系での漢字などの表現。' },
  { id: 'mojibake', sectionNumber: 5, term: '文字化け', definition: '文字コードの不一致で別の文字が表示されること。' },
  { id: 'platform-dependent', sectionNumber: 5, term: '機種依存文字', definition: '旧来の環境によって表示が異なる文字。' },
  { id: 'variable-length', sectionNumber: 5, term: '可変長', definition: '文字ごとに使う長さが変わる。' },
] as const;

// One review row per term; its other appearances remain reachable from the definition.
export const reviewTerms = importantTerms.filter((entry, index, entries) =>
  entries.findIndex(other => other.term === entry.term) === index,
);
