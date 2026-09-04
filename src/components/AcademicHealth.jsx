import { academicHealth } from "../data/mockData";

export default function AcademicHealth() {
  const circumference = 2 * Math.PI * 42;
  const offset = circumference - (academicHealth.overall / 100) * circumference;

  return (
    <section className="card">
      <div className="card__head">
        <div>
          <h3>Academic Health</h3>
          <p className="card__subtitle">A quick read on how things stand</p>
        </div>
      </div>

      <div className="health">
        <div className="health__ring">
          <svg viewBox="0 0 100 100" width="112" height="112">
            <circle cx="50" cy="50" r="42" className="health__ring-track" />
            <circle
              cx="50"
              cy="50"
              r="42"
              className="health__ring-value"
              strokeDasharray={circumference}
              strokeDashoffset={offset}
            />
          </svg>
          <div className="health__ring-text">
            <span className="health__ring-number">{academicHealth.overall}%</span>
            <span className="health__ring-label">Overall</span>
          </div>
        </div>

        <div className="health__bars">
          {academicHealth.breakdown.map((row) => (
            <div className="health__row" key={row.label}>
              <div className="health__row-head">
                <span>{row.label}</span>
                <span>{row.value}%</span>
              </div>
              <div className="progress-track">
                <div className="progress-fill" style={{ width: `${row.value}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
