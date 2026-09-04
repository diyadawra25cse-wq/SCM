import {
  LayoutGrid,
  BookOpen,
  CalendarClock,
  FileText,
  GraduationCap,
  AlarmClock,
  Megaphone,
  ChartNoAxesCombined,
  TrendingUp,
  Sparkles,
  MessageCircleQuestion,
  ChevronsUpDown,
  X,
} from "lucide-react";
import { navMain, navTools, student } from "../data/mockData";

const iconMap = {
  LayoutGrid,
  BookOpen,
  CalendarClock,
  FileText,
  GraduationCap,
  AlarmClock,
  Megaphone,
  ChartNoAxesCombined,
  TrendingUp,
  Sparkles,
  MessageCircleQuestion,
};

function NavItem({ item, active, onSelect }) {
  const Icon = iconMap[item.icon];
  return (
    <button
      className={`nav-item${active ? " nav-item--active" : ""}`}
      onClick={() => onSelect(item.id)}
    >
      <span className="nav-item__indicator" />
      <Icon size={18} strokeWidth={2} />
      <span className="nav-item__label">{item.label}</span>
      {item.badge ? <span className="nav-item__badge">{item.badge}</span> : null}
    </button>
  );
}

export default function Sidebar({ activeItem, onSelect, mobileOpen, onClose }) {
  return (
    <>
      {mobileOpen ? <div className="sidebar-scrim" onClick={onClose} /> : null}
      <aside className={`sidebar${mobileOpen ? " sidebar--open" : ""}`}>
        <div className="sidebar__brand">
          <div className="brand-mark" aria-hidden="true">
            <svg viewBox="0 0 32 32" width="26" height="26">
              <path
                d="M16 3 L29 10 L16 17 L3 10 Z"
                fill="url(#brandGrad)"
              />
              <path
                d="M9 13.5 V21 C9 23.5 12 26 16 26 C20 26 23 23.5 23 21 V13.5"
                fill="none"
                stroke="url(#brandGrad)"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <defs>
                <linearGradient id="brandGrad" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#2563EB" />
                  <stop offset="100%" stopColor="#7C5CFC" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div>
            <p className="brand-name">ClassSphere</p>
            <p className="brand-subtitle">Smart Academic Hub</p>
          </div>
          <button className="sidebar__close" onClick={onClose} aria-label="Close menu">
            <X size={18} />
          </button>
        </div>

        <nav className="sidebar__nav">
          <p className="nav-group-label">Main</p>
          <div className="nav-group">
            {navMain.map((item) => (
              <NavItem
                key={item.id}
                item={item}
                active={activeItem === item.id}
                onSelect={onSelect}
              />
            ))}
          </div>

          <p className="nav-group-label">Smart Tools</p>
          <div className="nav-group">
            {navTools.map((item) => (
              <NavItem
                key={item.id}
                item={item}
                active={activeItem === item.id}
                onSelect={onSelect}
              />
            ))}
          </div>
        </nav>

        <button className="sidebar__profile">
          <span className="avatar avatar--sidebar">{student.initials}</span>
          <span className="sidebar__profile-text">
            <span className="sidebar__profile-name">{student.name}</span>
            <span className="sidebar__profile-course">
              {student.course} • {student.semester}
            </span>
          </span>
          <ChevronsUpDown size={16} color="var(--text-soft)" />
        </button>
      </aside>
    </>
  );
}
