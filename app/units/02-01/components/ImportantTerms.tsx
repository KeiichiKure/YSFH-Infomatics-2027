import { importantTerms, learningSections } from '../importantTerms';

export function SectionTerms({ sectionNumber }: { sectionNumber: number }) {
  const section = learningSections.find(entry => entry.number === sectionNumber);
  return (
    <aside className="section-terms" aria-labelledby={`terms-${sectionNumber}`}>
      <div className="section-terms-heading">
        <h3 id={`terms-${sectionNumber}`}>この節の重要語</h3>
        {section && <span className="term-worksheet">プリント {section.worksheet}</span>}
      </div>
      <dl className="section-terms-list">
        {importantTerms.filter(entry => entry.sectionNumber === sectionNumber).map(entry => (
          <div key={entry.id}><dt>{entry.term}</dt><dd>{entry.definition}</dd></div>
        ))}
      </dl>
    </aside>
  );
}
