export type LearningSection = { id: string; number: number; label: string; worksheetLabel?: string };
export type ImportantTerm = { id: string; term: string; definition: string; sectionId: string; worksheetBlanks?: string[] };

export function SectionTerms({ section, terms }: { section: LearningSection; terms: ImportantTerm[] }) {
  return <aside className="u27-section-terms" aria-labelledby={`u27-terms-${section.id}`}>
    <div className="u27-terms-heading">
      <h3 id={`u27-terms-${section.id}`}>この節の重要語</h3>
      {section.worksheetLabel && <span>プリント {section.worksheetLabel}</span>}
    </div>
    <dl className="u27-term-cards">{terms.filter(t => t.sectionId === section.id).map(t =>
      <div key={t.id}>
        <dt>
          {t.term}
          {t.worksheetBlanks?.length ? <small className="u27-term-blank">プリント {t.worksheetBlanks.join('・')}</small> : null}
        </dt>
        <dd>{t.definition}</dd>
      </div>
    )}</dl>
  </aside>;
}
