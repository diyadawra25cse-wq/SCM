import { upcomingExams } from "../data/mockData";

export default function UpcomingExams() {
  return (
    <section className="card">
      <div className="card__head">
        <div>
          <h3>Upcoming Exams</h3>
          <p className="card__subtitle">Stay ahead of your exam prep</p>
        </div>
      </div>

      <div className="exam-list">
        {upcomingExams.map((exam) => (
          <div className="exam-item" key={exam.id}>
            <div className="exam-item__countdown">
              <span className="exam-item__days">{exam.daysLeft}</span>
              <span className="exam-item__days-label">days left</span>
            </div>
            <div className="exam-item__body">
              <p className="exam-item__subject">{exam.subject}</p>
              <p className="exam-item__date">{exam.date}</p>
              <div className="progress-track progress-track--sm">
                <div
                  className="progress-fill progress-fill--purple"
                  style={{ width: `${exam.prep}%` }}
                />
              </div>
            </div>
            <span className="exam-item__prep">{exam.prep}% ready</span>
          </div>
        ))}
      </div>
    </section>
  );
}
