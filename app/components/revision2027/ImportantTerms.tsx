export type LearningSection = { id: string; number: number; label: string; worksheetLabel?: string };
export type ImportantTerm = { id: string; term: string; definition: string; sectionId: string; worksheetBlanks?: string[]; relatedSectionIds?: string[] };

export function SectionTerms({ section, terms }: { section: LearningSection; terms: ImportantTerm[] }) {
  return <aside className="u27-section-terms" aria-labelledby={`u27-terms-${section.id}`}>
    <div className="u27-terms-heading">
      <h3 id={`u27-terms-${section.id}`}>この節の重要語</h3>
      {section.worksheetLabel && <span>プリント {section.worksheetLabel}</span>}
    </div>
    <dl className="u27-term-cards">{terms.filter(t => t.sectionId === section.id).map(t =>
      <div key={t.id}><dt>{t.term}</dt><dd>{t.definition}</dd></div>
    )}</dl>
  </aside>;
}

// termsは確認済みの最終一覧用データ。意味の異なる重複語を機械的に削除しない。
export function ReviewTerms({ sections, terms }: { sections: LearningSection[]; terms: ImportantTerm[] }) {
  return <div className="u27-review">
    <h2>重要語を確認する</h2>
    <p className="u27-review-guide">緑の数字は、このWebページの学習節です。数字から体験に戻れます。</p>
    <p className="u27-review-guide">語句を押すと意味が開きます。もう一度押すと閉じます。</p>
    <div className="u27-review-list" aria-label="重要語の一覧">{terms.map(t => {
      const section = sections.find(s => s.id === t.sectionId);
      if (!section) throw new Error(`重要語「${t.term}」のWeb学習節がありません: ${t.sectionId}`);
      return <div className="u27-review-row" key={t.id}>
        <a className="u27-section-link" href={`#${section.id}`} aria-label={`学習${section.number}「${section.label}」へ戻る`}>{section.number}</a>
        <details><summary>{t.term}</summary><p>{t.definition}</p>
          {t.relatedSectionIds?.map(id => {
            const related = sections.find(s => s.id === id);
            if (!related) throw new Error(`関連するWeb学習節がありません: ${id}`);
            return <p key={id}><a href={`#${id}`}>{related.label}の節でも確認する →</a></p>;
          })}
        </details>
      </div>;
    })}</div>
  </div>;
}
