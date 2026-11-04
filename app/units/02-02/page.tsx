import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import thinkingMascot from '@/public/mascots/student-thinking.png';
import understoodMascot from '@/public/mascots/student-understood.png';
import { SamplingLab } from './components/SamplingLab';
import { ImageLab } from './components/ImageLab';
import { MotionLab } from './components/MotionLab';
import { DataSizeLab } from './components/DataSizeLab';
import { RevisionLayout } from '@/app/components/revision2027/RevisionLayout';
import { ReviewTerms } from '@/app/components/revision2027/ImportantTerms';
import { learningSections, importantTerms } from './importantTerms';
import '@/app/components/revision2027/tokens.css';
import '@/app/components/revision2027/layout.css';
import './revision.css';

export const metadata: Metadata = {
  title: '02-02 情報のデジタル化｜2027年度改訂版・理数情報ラボ',
  description: '標本化・量子化・符号化、画像、動画、立体表現、データ量を操作しながら学ぶ教材',
  openGraph: { images: [] },
  twitter: { images: [] },
};


export default function DigitalizationUnit() {
  return (
    <main className="digital-unit">
      <RevisionLayout reviewHref="#checkpoint-02-02" header={<header className="site-header unit-header">
        <Link className="brand" href="/"><span className="brand-mark" aria-hidden="true">01</span><span>理数情報ラボ</span></Link>
        <span className="lesson-progress">02-02 · 情報のデジタル化 · 教科書 pp.57–61</span>
      </header>} navigation={
        <nav className="lesson-nav" aria-label="単元内メニュー">
          <Link href="/">← 単元一覧</Link>
          <p>情報のデジタル化<br /><small>教科書 pp.57–61</small></p>
          <ol><li><a href="#sampling">1　波をデータに</a></li><li><a href="#images">2　画像のしくみ</a></li><li><a href="#motion">3　動画と立体</a></li><li><a href="#data-size">4　データ量</a></li><li><a href="#checkpoint-02-02">✓　まとめ・確認</a></li></ol>
          <div className="nav-note"><b>このサイトは</b><span>入力を送信・保存しません。数値を何度変えても記録は残りません。</span></div>
        </nav>}>
          <section className="lesson-intro digit-intro">
            <div className="digit-intro-copy"><p className="eyebrow">UNIT 02-02 · DIGITIZATION</p><div className="digit-intro-badges"><span className="textbook-page">教科書 pp.57–61</span><span className="digit-revision-label">2027年度 改訂版</span></div>
            <h1>音も画像も、<br />点と数に変えてみよう。</h1>
            <p>標本化・量子化・符号化という共通の流れから、音、画像、動画、立体表現までをつなぎます。</p>
            </div><div className="digit-intro-support"><div className="mission-box"><span>今日のミッション</span><strong>再現性を高める条件と、データ量が増える理由を説明できる。</strong></div>
            <aside className="mascot-guide"><Image src={thinkingMascot} alt="考えている生徒のマスコット" priority /><p><b>数値を一つずつ動かそう。</b><span>波や画像の変化と、式の中の数を結び付けるのがコツです。</span></p></aside>
            </div><div className="learning-paths" aria-label="学び方を選ぶ"><a href="#sampling"><span>はじめて</span><b>3段階の流れから</b><small>おすすめ</small></a><a href="#images"><span>見て学ぶ</span><b>画像の実験へ</b><small>プリント連動</small></a><a href="#data-size"><span>深めたい</span><b>データ量を計算</b><small>発展</small></a></div>
          </section>
          <SamplingLab />
          <ImageLab />
          <MotionLab />
          <DataSizeLab />
          <section className="learning-section checkpoint" id="checkpoint-02-02">
            <div className="section-kicker"><span>✓</span><p>まとめ・確認</p></div>
            <ReviewTerms sections={learningSections} terms={importantTerms} />
            <div className="final-challenge digit-final"><Image src={understoodMascot} alt="理解して手を挙げる生徒のマスコット" /><div><p className="step-label">最後の問い</p><h3>元の情報に近づけると、なぜデータ量が増える？</h3><ol><li>1秒間に取り出す標本点の数</li><li>1つの値を表す量子化ビット数</li><li>画像の画素数や動画のフレーム数</li></ol><p>この3つを使って60秒で説明できたら、今日のミッション達成です。</p></div></div>
          </section>
          <footer className="lesson-footer"><div><b>理数情報ラボ</b><span>高校 情報Ⅰ · Web教材</span></div><p>プリントと教科書の学習順序に合わせ、図解と操作画面は本教材用に独自作成しています。</p><div><Link href="/third-party-notices.txt">第三者ライセンス</Link><Link href="/">単元一覧へ戻る ↑</Link></div></footer>
      </RevisionLayout>
    </main>
  );
}
