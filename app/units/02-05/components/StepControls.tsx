import type { MouseEvent } from 'react';

export function StepControls({current, labels, onChange}: {
  current: number;
  labels: readonly string[];
  onChange: (step: number) => void;
}) {
  function move(event: MouseEvent<HTMLButtonElement>, step: number) {
    const frame = event.currentTarget.closest('.id-frame');
    onChange(step);
    requestAnimationFrame(() => frame?.scrollIntoView({ block: 'start' }));
  }

  return <>
    <button type="button" disabled={current === 0} onClick={event => move(event, current - 1)}>← 戻る</button>
    <button type="button" disabled={current === labels.length - 1} onClick={event => move(event, current + 1)}>次へ →</button>
    <span className="id-step-position" role="status">{current + 1} / {labels.length}　{labels[current]}</span>
  </>;
}
