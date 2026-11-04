'use client';

import { useId, useRef, useState, type ReactNode } from 'react';

export function RevisionLayout({ header, navigation, children, reviewHref = '#checkpoint' }: {
  header?: ReactNode; navigation: ReactNode; children: ReactNode; reviewHref?: string;
}) {
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  const menuId = useId();
  return <div className="unit-2027" onKeyDown={event => {
    if (event.key === 'Escape' && open) { setOpen(false); toggle.current?.focus(); }
  }}>
    {header}
    <div className="u27-toolbar"><div className="u27-toolbar-inner">
      <button className="u27-toggle" ref={toggle} type="button" aria-expanded={open} aria-controls={menuId} onClick={() => setOpen(v => !v)}>
        <span aria-hidden="true">{open ? '〈' : '☰'}</span>{open ? '項目一覧を隠す' : '項目一覧を表示'}
      </button>
      <a className="u27-review-shortcut" href={reviewHref}>まとめ・確認へ ↓</a>
      <div className="u27-menu" id={menuId} hidden={!open} onClick={event => {
        if ((event.target as HTMLElement).closest('a[href^="#"]')) { setOpen(false); toggle.current?.focus(); }
      }}>{navigation}</div>
    </div></div>
    <article className="u27-content">{children}</article>
  </div>;
}
