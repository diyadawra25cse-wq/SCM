import { TriangleAlert, ArrowRight } from "lucide-react";
import { smartAlert } from "../data/mockData";

export default function SmartAlert() {
  const progress = Math.round((smartAlert.attendance / smartAlert.required) * 100);

  return (
    <section className="smart-alert">
      <div className="smart-alert__icon">
        <TriangleAlert size={18} />
      </div>
      <div className="smart-alert__body">
        <div className="smart-alert__head">
          <h3>Smart Alert</h3>
        </div>
        <p className="smart-alert__message">
          Your {smartAlert.subject} attendance is {smartAlert.attendance}%.
        </p>
        <p className="smart-alert__sub">{smartAlert.message}</p>
        <div className="smart-alert__progress">
          <div className="progress-track progress-track--sm">
            <div
              className="progress-fill progress-fill--amber"
              style={{ width: `${progress}%` }}
            />
          </div>
          <span>{smartAlert.attendance}% / {smartAlert.required}% required</span>
        </div>
      </div>
      <button className="smart-alert__cta">
        View Attendance <ArrowRight size={15} />
      </button>
    </section>
  );
}
