'use client';

import { useRef, useState, type ReactNode } from 'react';

export function LessonLayout({ navigation, children }: { navigation: ReactNode; children: ReactNode }) {
  const [navigationOpen, setNavigationOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);

  return (
    <div className="lesson-layout" data-navigation={navigationOpen ? 'visible' : 'hidden'} onKeyDown={event => {
      if (event.key === 'Escape' && navigationOpen) {
        setNavigationOpen(false);
        toggleRef.current?.focus();
      }
    }}>
      <div className="lesson-toolbar">
        <div className="lesson-toolbar-inner">
          <button
            ref={toggleRef}
            type="button"
            className="navigation-toggle"
            aria-controls="unit-section-navigation"
            aria-expanded={navigationOpen}
            onClick={() => setNavigationOpen(open => !open)}
          >
            <span aria-hidden="true">{navigationOpen ? '〈' : '☰'}</span>
            {navigationOpen ? '項目一覧を隠す' : '項目一覧を表示'}
          </button>
          <a className="review-shortcut" href="#checkpoint">まとめ・確認へ <span aria-hidden="true">↓</span></a>
        </div>
      </div>
      <div className="lesson-shell">
        <div id="unit-section-navigation" className="lesson-navigation" hidden={!navigationOpen} onClick={event => {
          if ((event.target as HTMLElement).closest('a[href^="#"]')) {
            setNavigationOpen(false);
            toggleRef.current?.focus();
          }
        }}>
          {navigation}
        </div>
        {children}
      </div>
    </div>
  );
}
