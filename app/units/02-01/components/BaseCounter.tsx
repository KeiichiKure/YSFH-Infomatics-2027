'use client';

import { useEffect, useState } from 'react';
import '../base-counter.css';

const zero = BigInt(0);
const one = BigInt(1);

const bases = [
  { radix: 2, label: '2進数', digits: '0・1' },
  { radix: 10, label: '10進数', digits: '0〜9' },
  { radix: 16, label: '16進数', digits: '0〜9・A〜F' },
] as const;

const speeds = [
  { label: 'ゆっくり', delay: 1000 },
  { label: '速く', delay: 250 },
  { label: '超速く', delay: 80 },
];

function formatCount(value: bigint, radix: number) {
  return value.toString(radix).toUpperCase();
}

function describeCount(value: bigint) {
  return bases.map(({ radix, label }) => {
    const carried = value !== zero && value % BigInt(radix) === zero;
    return `${label}${formatCount(value, radix)}${carried ? '、桁上がり' : ''}`;
  }).join('。');
}

function CountRow({ value, base }: { value: bigint; base: typeof bases[number] }) {
  const { radix, label, digits } = base;
  const current = formatCount(value, radix);
  const previous = value === zero ? current : formatCount(value - one, radix).padStart(current.length, '0');
  const lastCarry = value - value % BigInt(radix);
  const carrying = lastCarry !== zero && lastCarry === value;
  const firstChanged = [...current].findIndex((digit, index) => digit !== previous[index]);

  return (
    <div className="base-count-row" data-carry={carrying}>
      <div className="base-count-label">
        <h4>{label}</h4>
        <p>使う数字 {digits}</p>
      </div>
      <div className="base-count-digits">
        <span className="base-count-assistive">{current}</span>
        {[...current].map((digit, index) => {
          const place = current.length - index - 1;
          let state;
          if (previous[index] !== digit) {
            state = carrying ? (index === firstChanged ? 'carry' : 'reset') : 'changed';
          }
          return (
            <span className="base-count-digit" key={place} data-change={state} aria-hidden="true">
              {state === 'carry' && <span className="base-count-arrow">↑</span>}
              {digit}
            </span>
          );
        })}
      </div>
      <div className="base-count-history">
        <span>{carrying ? '↑ 桁上がり' : '直近の桁上がり'}</span>
        <b>{lastCarry === zero ? '—' : `${formatCount(lastCarry - one, radix)} → ${formatCount(lastCarry, radix)}`}</b>
      </div>
    </div>
  );
}

export function BaseCounter() {
  const [count, setCount] = useState({ value: zero, delay: 0, announcement: '' });
  const { value, delay, announcement } = count;

  useEffect(() => {
    if (delay === 0) return;
    const timer = window.setInterval(() => {
      setCount(current => current.delay === delay ? { ...current, value: current.value + one } : current);
    }, delay);
    return () => window.clearInterval(timer);
  }, [delay]);

  function increase() {
    setCount(current => {
      const next = current.value + one;
      return { value: next, delay: 0, announcement: describeCount(next) };
    });
  }

  function pause() {
    setCount(current => ({ ...current, delay: 0, announcement: `停止。${describeCount(current.value)}` }));
  }

  function reset() {
    setCount({ value: zero, delay: 0, announcement: 'すべて0に戻しました。' });
  }

  return (
    <section className="base-counter" aria-labelledby="base-counter-title">
      <header>
        <h3 id="base-counter-title">0から数えて、桁上がりを見つけよう</h3>
        <p>同じ数を3つの進法で表示します。16進数のA〜Fは10〜15です。</p>
      </header>
      <div className="base-count-readouts">
        {bases.map(base => <CountRow key={base.radix} base={base} value={value} />)}
      </div>
      <p className="base-count-guide">桁上がりでは、右の桁が0に戻り、↑の桁が1増えます。</p>
      <div className="base-count-controls">
        <div className="base-count-buttons">
          <button type="button" className="check-button" onClick={increase}>1増やす</button>
          <button type="button" className="text-button" onClick={reset}>0に戻す</button>
        </div>
        <div className="base-count-auto" role="group" aria-label="自動で1ずつ増やす">
          <span>自動</span>
          <div className="base-count-buttons">
            {speeds.map(speed => (
              <button type="button" className="text-button" key={speed.delay} aria-pressed={delay === speed.delay}
                onClick={() => setCount(current => ({ ...current, delay: speed.delay, announcement: '' }))}>
                {speed.label}
              </button>
            ))}
            <button type="button" className="text-button" onClick={pause} disabled={delay === 0}>停止</button>
          </div>
        </div>
      </div>
      <p className="base-count-assistive" role="status">{announcement}</p>
    </section>
  );
}
