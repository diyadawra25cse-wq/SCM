import { Search, Bell, CalendarDays, Settings2, Menu } from "lucide-react";
import { student } from "../data/mockData";

export default function Header({ onMenuClick }) {
  return (
    <header className="header">
      <button className="header__menu" onClick={onMenuClick} aria-label="Open menu">
        <Menu size={20} />
      </button>

      <div className="header__search">
        <Search size={17} color="var(--text-soft)" />
        <input
          type="text"
          placeholder="Search subjects, assignments, notes..."
          aria-label="Search"
        />
      </div>

      <div className="header__actions">
        <button className="icon-button" aria-label="Settings">
          <Settings2 size={18} />
        </button>
        <button className="icon-button" aria-label="Calendar">
          <CalendarDays size={18} />
        </button>
        <button className="icon-button" aria-label="Notifications">
          <Bell size={18} />
          <span className="icon-button__badge" />
        </button>
        <button className="header__profile">
          <span className="avatar avatar--header">{student.initials}</span>
          <span className="header__profile-name">{student.shortName}</span>
        </button>
      </div>
    </header>
  );
}
