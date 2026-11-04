import type { ImportantTerm, LearningSection } from '@/app/components/revision2027/ImportantTerms';

export const learningSections: LearningSection[] = [
  { id: 'sampling', number: 1, label: '波をデータに', worksheetLabel: '1〜9' },
  { id: 'images', number: 2, label: '画像のしくみ', worksheetLabel: '11〜17' },
  { id: 'motion', number: 3, label: '動画と立体', worksheetLabel: '18〜21' },
  { id: 'data-size', number: 4, label: 'データ量' },
];

const originalTerms = [
  ['01', '波', '音や光が持つ性質'], ['01', '振幅', '波の大きさを表す量'],
  ['01', 'サンプリング', '一定間隔でアナログ量を取り出す標本化'], ['01', '標本点', '標本化で取り出したアナログ量'],
  ['01', '量子化ビット数', '量子化の段階数を決めるビット数'], ['01', '量子化誤差', '標本点と量子化後の段階値のずれ'],
  ['01', '周波数', '1秒間に通過する波の数'], ['01', '周期', '1個の波が伝わる時間'],
  ['01', '標本化定理', '元の最高周波数の2倍を超える周波数で標本化する'],
  ['02', 'ピクセル', 'ラスタ画像を格子状に区切った最小の点。1画素ごとに色の数値を持つ。'],
  ['02', '光の三原色', 'ディスプレイで使う赤（R）・緑（G）・青（B）の光。3色の明るさの組合せで色を表す。'],
  ['02', '加法混色', '光を加えるほど明るくなり、赤・緑・青を最大に重ねると白になる混色。'],
  ['02', '画素数', '画像を構成する画素の数。横の画素数×縦の画素数で求め、多いほど細部を表しやすい。'],
  ['02', '解像度', '一定の長さや範囲にどれだけ細かく画素が並ぶかを表す度合い。高いほど輪郭を細かく表せる。'],
  ['02', '階調', '1色の明るさを表せる段階数。量子化ビット数がn bitなら2のn乗段階になる。'],
  ['02', '24ビットフルカラー', '赤・緑・青をそれぞれ8 bit、合計24 bitで表し、約1677万色を区別する色表現。'],
  ['03', 'フレーム', '動画を構成する1枚ずつの静止画像。フレームを順番に表示して動きを作る。'],
  ['03', 'fps', 'frames per secondの略。1秒間に表示するフレーム数で、大きいほど動きが滑らかに見える。'],
  ['03', '3DCG', '遠近法・重なり・陰影などを使い、平面の画面に立体物や奥行きを表現する技術。'],
  ['03', '視差', '左右の目に届く像の位置のずれ。脳が物体までの距離や奥行きを判断する手がかりになる。'],
];

export const importantTerms: ImportantTerm[] = originalTerms.map(([section,term,definition],index)=>({
  id: 'digit-term-'+(index+1), term, definition, sectionId: learningSections[Number(section)-1].id,
}));
