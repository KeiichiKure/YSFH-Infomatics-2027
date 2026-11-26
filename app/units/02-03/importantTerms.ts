import type { ImportantTerm, LearningSection } from '@/app/components/revision2027/ImportantTerms';

export const sections = {
  basics: { id: 'basics', number: 1, label: '圧縮の基本', worksheetLabel: '1〜4' },
  formats: { id: 'formats', number: 2, label: '形式と利用', worksheetLabel: '5〜8' },
  lossless: { id: 'lossless', number: 3, label: '可逆圧縮', worksheetLabel: '9〜13' },
  images: { id: 'images-compression', number: 4, label: '画像形式', worksheetLabel: '14〜18' },
} satisfies Record<string, LearningSection>;

export const importantTerms: ImportantTerm[] = [
  { id: 'compression', sectionId: sections.basics.id, term: '圧縮', definition: '情報をできるだけ保ちながら、ファイルサイズを小さくする処理' },
  { id: 'redundancy', sectionId: sections.basics.id, term: '冗長', definition: '同じ情報や不要な部分が含まれている状態' },
  { id: 'lossless', sectionId: sections.basics.id, term: '可逆圧縮', definition: '伸張すると圧縮前と同一のデータへ戻る圧縮' },
  { id: 'lossy', sectionId: sections.basics.id, term: '非可逆圧縮', definition: '重要度の低い情報も省き、完全には元へ戻らない圧縮' },
  { id: 'encode', sectionId: sections.formats.id, term: 'エンコード', definition: '元のデータを決められた方法で変換すること' },
  { id: 'decode', sectionId: sections.formats.id, term: 'デコード', definition: '変換されたデータを利用できる形へ戻すこと' },
  { id: 'zip', sectionId: sections.formats.id, term: 'ZIP', definition: '文書やプログラムなどに使われる代表的な可逆圧縮形式' },
  { id: 'jpeg-formats', sectionId: sections.formats.id, term: 'JPEG', definition: '色数の多い写真に適した非可逆圧縮形式' },
  { id: 'rle', sectionId: sections.lossless.id, term: 'ランレングス圧縮', definition: '同じデータの連続回数を記録する方法' },
  { id: 'lz', sectionId: sections.lossless.id, term: 'LZ圧縮', definition: '過去に現れた位置と長さで同じ並びを表す方法' },
  { id: 'lzw', sectionId: sections.lossless.id, term: 'LZW圧縮', definition: '出現した文字列を辞書へ登録し、番号で表す方法' },
  { id: 'huffman', sectionId: sections.lossless.id, term: 'ハフマン圧縮', definition: '出現頻度が高いデータへ短い符号を与える方法' },
  { id: 'keyframe', sectionId: sections.lossless.id, term: 'キーフレーム', definition: '動画で一定の間隔ごとに全体を保存したフレーム' },
  { id: 'bmp', sectionId: sections.images.id, term: 'BMP', definition: 'すべての画素を保存する非圧縮の画像形式' },
  { id: 'gif', sectionId: sections.images.id, term: 'GIF', definition: 'おもに256色以下の画像に向く可逆圧縮形式' },
  { id: '256-colors', sectionId: sections.images.id, term: '256色', definition: 'GIFが主に扱う色数の上限' },
  { id: 'jpeg-images', sectionId: sections.images.id, term: 'JPEG', definition: '写真に向き、境界線の表現が苦手な非可逆圧縮形式' },
  { id: 'png', sectionId: sections.images.id, term: 'PNG', definition: '可逆圧縮でフルカラーや透明を扱える画像形式' },
];
