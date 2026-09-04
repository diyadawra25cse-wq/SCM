import { Zap, ArrowRight, Sparkles } from "lucide-react";
import { nextBestAction } from "../data/mockData";

export default function NextBestAction() {
  return (
    <section className="nba">
      <span className="nba__shape nba__shape--one" aria-hidden="true" />
      <span className="nba__shape nba__shape--two" aria-hidden="true" />

      <div className="nba__label">
        <Sparkles size={13} />
        <span>Smart Recommendation</span>
      </div>

      <h3 className="nba__heading">Your Next Best Action</h3>
      <p className="nba__reason">{nextBestAction.reason}</p>

      <div className="nba__action">
        <div className="nba__action-icon">
          <Zap size={18} fill="currentColor" />
        </div>
        <div>
          <p className="nba__action-title">{nextBestAction.title}</p>
          <p className="nba__action-details">{nextBestAction.details}</p>
        </div>
      </div>

      <button className="nba__cta">
        Open Assignment <ArrowRight size={16} />
      </button>
    </section>
  );
}
