import { importantTerms, learningSections, reviewTerms } from '../importantTerms';

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

export function ReviewTerms() {
  return (
    <div className="review-terms" aria-label="重要語の一覧">
      {reviewTerms.map(entry => {
        const section = learningSections.find(item => item.number === entry.sectionNumber)!;
        const related = importantTerms.filter(item => item.term === entry.term && item.id !== entry.id);
        return (
          <div className="review-term" key={entry.id}>
            <a className="review-section-link" href={`#${section.id}`} aria-label={`学習${section.number}「${section.label}」へ戻る`}>{section.number}</a>
            <details>
              <summary>{entry.term}</summary>
              <p>{entry.definition}</p>
              {related.map(item => {
                const relatedSection = learningSections.find(s => s.number === item.sectionNumber)!;
                return <p className="review-related" key={item.id}><a href={`#${relatedSection.id}`}>{relatedSection.label}の節でも確認する →</a></p>;
              })}
            </details>
          </div>
        );
      })}
    </div>
  );
}
