import { BookOpen, GraduationCap, Sparkle, Laptop } from "lucide-react";
import { student, todayLabel } from "../data/mockData";

export default function WelcomeHero() {
  return (
    <section className="hero">
      <div className="hero__text">
        <p className="hero__eyebrow">Student Dashboard</p>
        <h1 className="hero__title">Good morning, {student.shortName} 👋</h1>
        <p className="hero__subtitle">Here's your academic snapshot for today.</p>
        <p className="hero__date">{todayLabel}</p>
        <p className="hero__motivation">
          "Small progress every day leads to big results."
        </p>
      </div>

      <div className="hero__art" aria-hidden="true">
        <span className="hero__blob hero__blob--one" />
        <span className="hero__blob hero__blob--two" />
        <span className="hero__float hero__float--book">
          <BookOpen size={20} />
        </span>
        <span className="hero__float hero__float--cap">
          <GraduationCap size={22} />
        </span>
        <span className="hero__float hero__float--laptop">
          <Laptop size={20} />
        </span>
        <span className="hero__float hero__float--star hero__float--star-a">
          <Sparkle size={12} />
        </span>
        <span className="hero__float hero__float--star hero__float--star-b">
          <Sparkle size={10} />
        </span>
      </div>
    </section>
  );
}
