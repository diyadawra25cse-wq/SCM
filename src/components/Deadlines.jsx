import { ArrowRight } from "lucide-react";
import { deadlines } from "../data/mockData";

const urgencyClass = {
  urgent: "dot--urgent",
  approaching: "dot--approaching",
  normal: "dot--normal",
};

export default function Deadlines() {
  return (
    <section className="card">
      <div className="card__head">
        <div>
          <h3>Upcoming Deadlines</h3>
          <p className="card__subtitle">Don't miss important academic work</p>
        </div>
      </div>

      <ul className="deadline-list">
        {deadlines.map((item) => (
          <li key={item.id} className="deadline-item">
            <span className={`dot ${urgencyClass[item.urgency]}`} />
            <div className="deadline-item__body">
              <p className="deadline-item__title">{item.title}</p>
              <p className="deadline-item__subject">{item.subject}</p>
            </div>
            <span className={`deadline-item__due deadline-item__due--${item.urgency}`}>
              {item.due}
            </span>
          </li>
        ))}
      </ul>

      <a className="card__link" href="#deadlines">
        View all <ArrowRight size={15} />
      </a>
    </section>
  );
}
