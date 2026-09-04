import { subjectPerformance } from "../data/mockData";

export default function SubjectPerformance() {
  return (
    <section className="card subject-performance">
      <div className="card__head subject-performance__header">
        <div>
          <span className="section-kicker">ACADEMIC PERFORMANCE</span>

          <h3>Subject Performance</h3>

          <p className="card__subtitle">
            A quick look at your progress across subjects
          </p>
        </div>

        <button className="view-all-btn">
          Full progress →
        </button>
      </div>

      <div className="subject-grid">
        {subjectPerformance.map((subject) => (
          <div
            key={subject.id}
            className={`subject-card ${
              subject.needsAttention ? "subject-card--attention" : ""
            }`}
          >
            {/* Subject heading */}
            <div className="subject-card__head">
              <div>
                <h4 className="subject-card__name">
                  {subject.name}
                </h4>

                <span className="subject-card__code">
                  {subject.code}
                </span>
              </div>

              {subject.needsAttention && (
                <span className="subject-card__flag">
                  Needs attention
                </span>
              )}
            </div>

            {/* Attendance */}
            <div className="subject-card__metric">
              <span>Attendance</span>
              <strong>{subject.attendance}%</strong>
            </div>

            <div className="progress-track progress-track--sm">
              <div
                className="progress-fill progress-fill--blue"
                style={{
                  width: `${subject.attendance}%`,
                }}
              />
            </div>

            {/* Performance */}
            <div className="subject-card__metric">
              <span>Performance</span>
              <strong>{subject.performance}%</strong>
            </div>

            <div className="progress-track progress-track--sm">
              <div
                className="progress-fill progress-fill--purple"
                style={{
                  width: `${subject.performance}%`,
                }}
              />
            </div>

            {/* Modules */}
            <div className="subject-card__metric">
              <span>Modules completed</span>
              <strong>{subject.modules}%</strong>
            </div>

            <div className="progress-track progress-track--sm">
              <div
                className="progress-fill progress-fill--pink"
                style={{
                  width: `${subject.modules}%`,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}