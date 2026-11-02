import Link from 'next/link';
import Image from 'next/image';
import thinkingMascot from '@/public/mascots/student-thinking.png';
import { BaseLab } from './components/BaseLab';
import { BinaryLab } from './components/BinaryLab';
import { CharacterLab } from './components/CharacterLab';
import { MediaLab, SignalLab } from './components/SignalLab';
import type { Metadata } from 'next';
import { ReviewTerms } from './components/ImportantTerms';
import { LessonLayout } from './components/LessonLayout';
import { learningSections } from './importantTerms';
import './revision.css';

export const metadata: Metadata = {
  title: '02-01 アナログとデジタル｜2027年度改訂版・理数情報ラボ',
  robots: { index: false, follow: false },
};

export default function AnalogDigitalUnit() {
  return (
    <main className="analog-unit">
      <header className="site-header unit-header">
        <Link className="brand" href="/">
          <span className="brand-mark" aria-hidden="true">01</span>
          <span>理数情報ラボ</span>
        </Link>
        <span className="lesson-progress">02-01 · アナログとデジタル · 教科書 pp.54–56</span>
      </header>

      <LessonLayout navigation={
        <nav className="lesson-nav" aria-label="単元内メニュー">
          <Link href="/">← 単元一覧</Link>
          <p>アナログとデジタル<br /><small>教科書 pp.54–56</small></p>
          <ol>
            {learningSections.map(section => <li key={section.id}><a href={`#${section.id}`}>{section.number}　{section.label}</a></li>)}
            <li><a href="#checkpoint">✓　まとめ・確認</a></li>
          </ol>
          <div className="nav-note"><b>このサイトは</b><span>入力を送信・保存しません。自分のペースで何度でも試せます。</span></div>
        </nav>
      }>
        <article className="lesson-content">
          <section className="lesson-intro">
            <p className="eyebrow">UNIT 02-01 · ANALOG &amp; DIGITAL</p>
            <span className="textbook-page">教科書 pp.54–56</span>
            <div><span className="revision-label">2027年度 改訂版</span></div>
            <h1>見えない情報を、<br />0と1に変えてみよう。</h1>
            <p>波形、スイッチ、数、文字。ばらばらに見える内容を「0と1で表す」という一本の線でつなぎます。</p>
            <div className="mission-box"><span>今日のミッション</span><strong>デジタル表現の仕組みを、操作と途中式を使って説明できる。</strong></div>
            <aside className="mascot-guide">
              <Image src={thinkingMascot} alt="考えている生徒のマスコット" priority />
              <p><b>迷ったら、まず動かしてみよう。</b><span>予想と違ったところが、いちばん大切な発見です。</span></p>
            </aside>
            <div className="learning-paths" aria-label="学び方を選ぶ">
              <a href="#signal"><span>はじめて</span><b>上から順番に試す</b><small>おすすめ</small></a>
              <a href="#bases"><span>練習したい</span><b>進数変換へ進む</b><small>プリント連動</small></a>
              <a href="#characters"><span>深めたい</span><b>文字コードへ進む</b><small>発展あり</small></a>
            </div>
          </section>

          <SignalLab />
          <MediaLab />
          <BinaryLab />
          <BaseLab />
          <CharacterLab />

          <section className="learning-section checkpoint" id="checkpoint">
            <div className="section-kicker"><span>✓</span><p>まとめ・確認</p></div>
            <div className="review-heading"><h2>重要語を確認する</h2><p>緑の数字は、このWebページの学習節です。数字から体験に戻れます。</p></div>
            <p className="review-hint">語句を押すと意味が開きます。もう一度押すと閉じます。</p>
            <ReviewTerms />
            <div className="final-challenge">
              <p className="step-label">最後の問い</p>
              <h3>「デジタルは0と1で表す」とは、具体的にどういうこと？</h3>
              <ol><li>連続量をどのように区切るか</li><li>0と1を現実の媒体でどう表すか</li><li>数や文字をどう0と1へ対応させるか</li></ol>
              <p>この3点を、隣の人に60秒で説明できたら今日のミッション達成です。</p>
            </div>
          </section>

          <footer className="lesson-footer">
            <div><b>理数情報ラボ</b><span>高校 情報Ⅰ · Web教材</span></div>
            <p>図解と操作画面は本教材用に独自作成しています。規格に関する補足はUnicode Standard、JIS・SIの一般的な規格情報に基づきます。</p>
            <div><Link href="/third-party-notices.txt">第三者ライセンス</Link><Link href="/">← 単元一覧へ戻る</Link></div>
          </footer>
        </article>
      </LessonLayout>
    </main>
  );
}

