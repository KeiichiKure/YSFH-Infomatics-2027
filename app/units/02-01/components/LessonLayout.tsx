'use client';

import { useState, type ReactNode } from 'react';

export function LessonLayout({ navigation, children }: { navigation: ReactNode; children: ReactNode }) {
  const [navigationOpen, setNavigationOpen] = useState(true);

  return (
    <div className="lesson-layout" data-navigation={navigationOpen ? 'visible' : 'hidden'}>
      <div className="lesson-toolbar">
        <button
          type="button"
          className="navigation-toggle"
          aria-controls="unit-section-navigation"
          aria-expanded={navigationOpen}
          onClick={() => setNavigationOpen(open => !open)}
        >
          <span aria-hidden="true">{navigationOpen ? '〈' : '☰'}</span>
          {navigationOpen ? '項目一覧を隠す' : '項目一覧を表示'}
        </button>
      </div>
      <div className="lesson-shell">
        <div id="unit-section-navigation" className="lesson-navigation" hidden={!navigationOpen}>
          {navigation}
        </div>
        {children}
      </div>
    </div>
  );
}
