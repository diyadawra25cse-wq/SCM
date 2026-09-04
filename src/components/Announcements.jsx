import { announcements } from "../data/mockData";

export default function Announcements() {
  return (
    <section className="card">
      <div className="card__head">
        <div>
          <h3>Announcements</h3>
          <p className="card__subtitle">What's new from your department</p>
        </div>
      </div>

      <ul className="announcement-list">
        {announcements.map((item) => (
          <li className="announcement-item" key={item.id}>
            <span className="announcement-item__emoji">{item.emoji}</span>
            <div className="announcement-item__body">
              <p className="announcement-item__title">
                {item.title}
                {item.unread ? <span className="unread-dot" /> : null}
              </p>
              <p className="announcement-item__meta">
                {item.subject} • {item.date}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
