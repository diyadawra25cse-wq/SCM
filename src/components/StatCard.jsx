import { BookOpen, FileText, ChartNoAxesCombined, GraduationCap } from "lucide-react";

const iconMap = { BookOpen, FileText, ChartNoAxesCombined, GraduationCap };

export default function StatCard({ stat }) {
  const Icon = iconMap[stat.icon];
  return (
    <div className={`stat-card stat-card--${stat.accent}`}>
      <span className="stat-card__shape" aria-hidden="true" />
      <div className="stat-card__icon">
        <Icon size={18} />
      </div>
      <p className="stat-card__value">{stat.value}</p>
      <p className="stat-card__label">{stat.label}</p>
      <p className="stat-card__detail">{stat.detail}</p>
    </div>
  );
}
