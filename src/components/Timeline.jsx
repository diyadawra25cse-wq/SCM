import { ArrowRight } from "lucide-react";
import { timeline } from "../data/mockData";

const statusClass = {
  Completed: "pill--done",
  Next: "pill--next",
  Upcoming: "pill--upcoming",
};

export default function Timeline() {
  return (
    <section className="card timeline-card">
      <div className="card__head">
        <div>
          <h3>Today's Timeline</h3>
          <p className="card__subtitle">Your classes for today</p>
        </div>
      </div>

      <ol className="timeline">
        {timeline.map((item, index) => (
          <li
            key={item.id}
            className={`timeline__item${item.status === "Next" ? " timeline__item--next" : ""}`}
            style={{ animationDelay: `${index * 70}ms` }}
          >
            <span className="timeline__time">{item.time}</span>
            <span className="timeline__dot" />
            <div className="timeline__content">
              <p className="timeline__subject">{item.subject}</p>
              <p className="timeline__meta">
                {item.teacher} • {item.room}
              </p>
            </div>
            <span className={`pill ${statusClass[item.status]}`}>{item.status}</span>
          </li>
        ))}
      </ol>

      <a className="card__link" href="#timetable">
        View full timetable <ArrowRight size={15} />
      </a>
    </section>
  );
}
