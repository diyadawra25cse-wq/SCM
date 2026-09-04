import React, { useMemo, useState } from "react";
import {
  LayoutDashboard,
  BookOpen,
  CalendarDays,
  ClipboardList,
  Clock3,
  Target,
  TrendingUp,
  CheckCircle2,
  Bell,
  Sparkles,
  Search,
  Settings,
  ChevronRight,
  ArrowRight,
  Menu,
  X,
  ShieldCheck,
  QrCode,
  ScanLine,
  MapPin,
  Smartphone,
  LockKeyhole,
  Check,
  AlertTriangle,
  CircleUserRound,
  GraduationCap,
  Users,
  FileText,
  CalendarCheck,
  ChevronLeft,
} from "lucide-react";

import "./App.css";

/* =========================================================
   DATA
========================================================= */

const student = {
  name: "Anushka Rana",
  shortName: "Anushka",
  course: "CSE",
  semester: "Semester 2",
};

const stats = [
  {
    label: "Today's Classes",
    value: "4",
    sub: "1 class completed",
    icon: CalendarDays,
    type: "blue",
  },
  {
    label: "Pending Assignments",
    value: "3",
    sub: "1 due tomorrow",
    icon: FileText,
    type: "purple",
  },
  {
    label: "Overall Attendance",
    value: "79%",
    sub: "5 classes to reach 80%",
    icon: CheckCircle2,
    type: "green",
  },
  {
    label: "Upcoming Exams",
    value: "3",
    sub: "Next: DBMS",
    icon: Target,
    type: "pink",
  },
];

const deadlines = [
  {
    subject: "Database Management",
    title: "DBMS Normalization Assignment",
    due: "Tomorrow",
    days: 1,
    priority: "High",
  },
  {
    subject: "Data Structures",
    title: "DSA Implementation Assignment",
    due: "In 3 days",
    days: 3,
    priority: "Medium",
  },
  {
    subject: "Java Programming",
    title: "Java OOP Quiz",
    due: "In 5 days",
    days: 5,
    priority: "Low",
  },
];

const exams = [
  {
    subject: "Database Management",
    code: "CS202",
    date: "12 Sep",
    days: "8 days",
    readiness: 72,
  },
  {
    subject: "Data Structures",
    code: "CS201",
    date: "15 Sep",
    days: "11 days",
    readiness: 64,
  },
  {
    subject: "Digital Logic",
    code: "CS204",
    date: "18 Sep",
    days: "14 days",
    readiness: 81,
  },
];

const timetable = {
  Mon: [
    {
      time: "09:00 AM",
      end: "09:55 AM",
      subject: "Mathematics",
      teacher: "Dr. Singh",
      room: "Room 204",
      type: "Lecture",
    },
    {
      time: "11:00 AM",
      end: "11:55 AM",
      subject: "Data Structures",
      teacher: "Dr. Sharma",
      room: "Lab 3",
      type: "Lecture",
    },
    {
      time: "01:00 PM",
      end: "01:55 PM",
      subject: "Database Management",
      teacher: "Prof. Mehta",
      room: "Room 108",
      type: "Lecture",
    },
    {
      time: "03:00 PM",
      end: "03:55 PM",
      subject: "Digital Logic",
      teacher: "Prof. Kumar",
      room: "Room 302",
      type: "Practical",
    },
  ],

  Tue: [
    {
      time: "10:00 AM",
      end: "10:55 AM",
      subject: "Java Programming",
      teacher: "Prof. Verma",
      room: "Room 105",
      type: "Lecture",
    },
    {
      time: "12:00 PM",
      end: "12:55 PM",
      subject: "Data Structures",
      teacher: "Dr. Sharma",
      room: "Room 203",
      type: "Lecture",
    },
    {
      time: "02:00 PM",
      end: "02:55 PM",
      subject: "Mathematics",
      teacher: "Dr. Singh",
      room: "Room 204",
      type: "Tutorial",
    },
  ],

  Wed: [
    {
      time: "09:00 AM",
      end: "09:55 AM",
      subject: "Database Management",
      teacher: "Prof. Mehta",
      room: "Room 108",
      type: "Lecture",
    },
    {
      time: "11:00 AM",
      end: "11:55 AM",
      subject: "Digital Logic",
      teacher: "Prof. Kumar",
      room: "Lab 2",
      type: "Practical",
    },
    {
      time: "02:00 PM",
      end: "02:55 PM",
      subject: "Java Programming",
      teacher: "Prof. Verma",
      room: "Room 105",
      type: "Lecture",
    },
  ],

  Thu: [
    {
      time: "09:00 AM",
      end: "09:55 AM",
      subject: "Mathematics",
      teacher: "Dr. Singh",
      room: "Room 204",
      type: "Lecture",
    },
    {
      time: "11:00 AM",
      end: "11:55 AM",
      subject: "Data Structures",
      teacher: "Dr. Sharma",
      room: "Lab 3",
      type: "Practical",
    },
    {
      time: "01:00 PM",
      end: "01:55 PM",
      subject: "Database Management",
      teacher: "Prof. Mehta",
      room: "Room 108",
      type: "Lecture",
    },
    {
      time: "03:00 PM",
      end: "03:55 PM",
      subject: "Digital Logic",
      teacher: "Prof. Kumar",
      room: "Room 302",
      type: "Lecture",
    },
  ],

  Fri: [
    {
      time: "10:00 AM",
      end: "10:55 AM",
      subject: "Java Programming",
      teacher: "Prof. Verma",
      room: "Room 105",
      type: "Lecture",
    },
    {
      time: "12:00 PM",
      end: "12:55 PM",
      subject: "Database Management",
      teacher: "Prof. Mehta",
      room: "Room 108",
      type: "Tutorial",
    },
    {
      time: "02:00 PM",
      end: "02:55 PM",
      subject: "Digital Logic",
      teacher: "Prof. Kumar",
      room: "Lab 2",
      type: "Practical",
    },
  ],

  Sat: [
    {
      time: "09:00 AM",
      end: "09:55 AM",
      subject: "Data Structures",
      teacher: "Dr. Sharma",
      room: "Room 203",
      type: "Lecture",
    },
    {
      time: "11:00 AM",
      end: "11:55 AM",
      subject: "Mathematics",
      teacher: "Dr. Singh",
      room: "Room 204",
      type: "Tutorial",
    },
  ],
};

const attendanceSubjects = [
  {
    code: "CS201",
    name: "Data Structures",
    teacher: "Dr. Sharma",
    attended: 41,
    total: 50,
  },
  {
    code: "CS202",
    name: "Database Management",
    teacher: "Prof. Mehta",
    attended: 42,
    total: 50,
  },
  {
    code: "CS203",
    name: "Java Programming",
    teacher: "Prof. Verma",
    attended: 39,
    total: 50,
  },
  {
    code: "CS204",
    name: "Digital Logic",
    teacher: "Prof. Kumar",
    attended: 18,
    total: 25,
  },
  {
    code: "MA201",
    name: "Mathematics",
    teacher: "Dr. Singh",
    attended: 41,
    total: 45,
  },
];

const announcements = [
  {
    title: "Internal assessment schedule updated",
    from: "CSE Department",
    time: "2 hours ago",
    unread: true,
  },
  {
    title: "DBMS assignment instructions posted",
    from: "Prof. Mehta",
    time: "Yesterday",
    unread: false,
  },
  {
    title: "New study material uploaded",
    from: "Dr. Sharma",
    time: "2 days ago",
    unread: false,
  },
];

/* =========================================================
   HELPERS
========================================================= */

function attendancePercentage(attended, total) {
  return Math.round((attended / total) * 100);
}

function requiredFor80(attended, total) {
  if (attended / total >= 0.8) return 0;

  let classes = 0;

  while ((attended + classes) / (total + classes) < 0.8) {
    classes++;
  }

  return classes;
}

/* =========================================================
   APP
========================================================= */

export default function App() {
  const [page, setPage] = useState("Dashboard");
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  const navigate = (target) => {
    setPage(target);
    setMobileMenu(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="app-shell">

      <Sidebar
        page={page}
        navigate={navigate}
        mobileMenu={mobileMenu}
      />

      <div className="main-area">

        <Header
          page={page}
          openSearch={() => setSearchOpen(true)}
          openMenu={() => setMobileMenu(!mobileMenu)}
        />

        <main className="main-content">

          {page === "Dashboard" && (
            <Dashboard navigate={navigate} />
          )}

          {page === "Attendance" && (
            <AttendancePage />
          )}

          {page === "Timetable" && (
            <TimetablePage />
          )}

          {page === "Assignments" && (
            <AssignmentsPage />
          )}

          {page === "Deadlines" && (
            <DeadlinesPage />
          )}

          {page === "Exams" && (
            <ExamsPage />
          )}

          {page === "Subjects" && (
            <SubjectsPage />
          )}

          {page === "Progress" && (
            <ProgressPage />
          )}

          {page === "Announcements" && (
            <AnnouncementsPage />
          )}

          {page === "AI Assistant" && (
            <AIAssistantPage />
          )}

        </main>
      </div>

      {searchOpen && (
        <SearchModal
          close={() => setSearchOpen(false)}
          navigate={navigate}
        />
      )}
    </div>
  );
}

/* =========================================================
   SIDEBAR
========================================================= */

function Sidebar({ page, navigate, mobileMenu }) {
  const menuGroups = [
    {
      title: "MAIN",
      items: [
        {
          name: "Dashboard",
          icon: LayoutDashboard,
        },
        {
          name: "Subjects",
          icon: GraduationCap,
        },
        {
          name: "Timetable",
          icon: CalendarDays,
        },
      ],
    },
    {
      title: "ACADEMICS",
      items: [
        {
          name: "Assignments",
          icon: ClipboardList,
        },
        {
          name: "Deadlines",
          icon: Clock3,
          badge: "3",
        },
        {
          name: "Exams",
          icon: Target,
        },
        {
          name: "Progress",
          icon: TrendingUp,
        },
        {
          name: "Attendance",
          icon: CheckCircle2,
        },
      ],
    },
    {
      title: "CONNECT",
      items: [
        {
          name: "Announcements",
          icon: Bell,
        },
      ],
    },
  ];

  return (
    <aside className={`sidebar ${mobileMenu ? "mobile-open" : ""}`}>

      <div className="brand">
        <div className="brand-logo">
          <Sparkles size={28} />
        </div>

        <div>
          <h2>ClassSphere</h2>
          <span>Student Hub</span>
        </div>
      </div>

      <div className="sidebar-scroll">

        {menuGroups.map((group) => (
          <div className="menu-group" key={group.title}>

            <div className="menu-title">
              {group.title}
            </div>

            {group.items.map((item) => {
              const Icon = item.icon;
              const active = page === item.name;

              return (
                <button
                  key={item.name}
                  className={`menu-item ${
                    active ? "active" : ""
                  }`}
                  onClick={() => navigate(item.name)}
                >
                  <Icon size={21} />

                  <span>{item.name}</span>

                  {item.badge && (
                    <b>{item.badge}</b>
                  )}
                </button>
              );
            })}
          </div>
        ))}

        <button
          className="smart-tool"
          onClick={() => navigate("AI Assistant")}
        >
          <div className="smart-icon">
            <Sparkles size={20} />
          </div>

          <div>
            <strong>Smart Tools</strong>
            <span>Ask ClassSphere AI</span>
          </div>

          <ArrowRight size={17} />
        </button>

      </div>

      <div className="student-profile">

        <div className="avatar">
          AR
        </div>

        <div>
          <strong>{student.name}</strong>
          <span>
            {student.course} · {student.semester}
          </span>
        </div>

        <ChevronRight size={18} />

      </div>

    </aside>
  );
}

/* =========================================================
   HEADER
========================================================= */

function Header({
  page,
  openSearch,
  openMenu,
}) {
  return (
    <header className="topbar">

      <button
        className="mobile-menu-button"
        onClick={openMenu}
      >
        <Menu size={22} />
      </button>

      <div className="breadcrumbs">
        <span>ClassSphere</span>
        <ChevronRight size={15} />
        <strong>{page}</strong>
      </div>

      <div className="header-actions">

        <button
          className="search-button"
          onClick={openSearch}
        >
          <Search size={20} />
          <span>Search ClassSphere...</span>
          <kbd>⌘ K</kbd>
        </button>

        <button className="header-icon">
          <CalendarDays size={20} />
        </button>

        <button className="header-icon notification">
          <Bell size={20} />
          <i />
        </button>

        <button className="header-icon">
          <Settings size={20} />
        </button>

        <div className="header-avatar">
          AR
        </div>

      </div>
    </header>
  );
}

/* =========================================================
   DASHBOARD
========================================================= */

function Dashboard({ navigate }) {
  return (
    <div className="dashboard">

      <section className="hero">

        <div className="hero-copy">

          <span className="date-label">
            THURSDAY · 4 SEPTEMBER 2026
          </span>

          <h1>
            Good morning, Anushka
            <span>👋</span>
          </h1>

          <p>
            Here's what needs your attention today.
          </p>

          <div className="motivation">
            <Sparkles size={17} />
            Small progress every day leads to big results.
          </div>

        </div>

        <div className="hero-visual">
          <div className="hero-circle circle-one" />
          <div className="hero-circle circle-two" />

          <div className="hero-calendar">
            <CalendarDays size={46} />
            <strong>04</strong>
          </div>
        </div>

      </section>

      <section className="attention-card">

        <div className="attention-top">
          <div className="attention-icon">
            <Bell size={21} />
          </div>

          <div>
            <span>ATTENTION NEEDED</span>
            <h2>2 things need your attention</h2>
            <p>We'll help you stay ahead.</p>
          </div>
        </div>

        <div className="attention-items">

          <button onClick={() => navigate("Deadlines")}>
            <div>
              <strong>DBMS Assignment</strong>
              <span>Due Tomorrow</span>
            </div>
            <ArrowRight size={19} />
          </button>

          <button onClick={() => navigate("Attendance")}>
            <div>
              <strong>Digital Logic</strong>
              <span>Attendance 72%</span>
            </div>
            <ArrowRight size={19} />
          </button>

        </div>

      </section>

      <div className="stats-grid">
        {stats.map((stat) => (
          <StatCard key={stat.label} {...stat} />
        ))}
      </div>

      <div className="dashboard-grid">

        <section className="panel timeline-panel">

          <PanelHeader
            label="TODAY"
            title="Today's Timeline"
            action="View timetable"
            onClick={() => navigate("Timetable")}
          />

          <div className="timeline">

            {timetable.Thu.map((item, index) => (
              <div
                className="timeline-row"
                key={item.subject}
              >
                <div className="timeline-time">
                  {item.time}
                </div>

                <div className="timeline-line">
                  <div
                    className={
                      index === 0
                        ? "timeline-dot done"
                        : "timeline-dot"
                    }
                  />
                  {index !== timetable.Thu.length - 1 && (
                    <div className="timeline-track" />
                  )}
                </div>

                <div className="timeline-class">
                  <span className="class-type">
                    {index === 0 ? "COMPLETED" : "UPCOMING"}
                  </span>

                  <h3>{item.subject}</h3>

                  <p>
                    {item.teacher} · {item.room}
                  </p>
                </div>
              </div>
            ))}

          </div>
        </section>

        <NextAction navigate={navigate} />

        <DeadlinePreview navigate={navigate} />

        <AcademicHealth />

        <ExamPreview navigate={navigate} />

        <AnnouncementPreview navigate={navigate} />

      </div>
    </div>
  );
}

/* =========================================================
   STAT CARD
========================================================= */

function StatCard({
  label,
  value,
  sub,
  icon: Icon,
  type,
}) {
  return (
    <div className={`stat-card ${type}`}>

      <div className="stat-icon">
        <Icon size={21} />
      </div>

      <div className="stat-text">
        <span>{label}</span>
        <strong>{value}</strong>
        <small>{sub}</small>
      </div>

    </div>
  );
}

/* =========================================================
   PANEL HEADER
========================================================= */

function PanelHeader({
  label,
  title,
  action,
  onClick,
}) {
  return (
    <div className="panel-header">

      <div>
        <span>{label}</span>
        <h2>{title}</h2>
      </div>

      {action && (
        <button onClick={onClick}>
          {action}
          <ChevronRight size={16} />
        </button>
      )}

    </div>
  );
}

/* =========================================================
   NEXT ACTION
========================================================= */

function NextAction() {
  return (
    <section className="next-action">

      <div className="ai-badge">
        <Sparkles size={16} />
        AI RECOMMENDATION
      </div>

      <h2>Finish your DBMS Assignment</h2>

      <p>
        It's due tomorrow and should take around
        40 minutes.
      </p>

      <div className="action-bottom">
        <span>HIGH PRIORITY</span>
        <button>
          Start now
          <ArrowRight size={16} />
        </button>
      </div>

    </section>
  );
}

/* =========================================================
   DEADLINES
========================================================= */

function DeadlinePreview({ navigate }) {
  return (
    <section className="panel">

      <PanelHeader
        label="UPCOMING"
        title="Upcoming Deadlines"
        action="View all"
        onClick={() => navigate("Deadlines")}
      />

      <div className="deadline-list">

        {deadlines.map((item) => (
          <div
            className="deadline-row"
            key={item.title}
          >

            <div className="deadline-date">
              <Clock3 size={19} />
            </div>

            <div>
              <span>{item.subject}</span>
              <strong>{item.title}</strong>
            </div>

            <div
              className={`priority ${item.priority.toLowerCase()}`}
            >
              {item.due}
            </div>

          </div>
        ))}

      </div>

    </section>
  );
}

/* =========================================================
   ACADEMIC HEALTH
========================================================= */

function AcademicHealth() {
  return (
    <section className="panel health-panel">

      <div className="health-heading">

        <div className="health-icon">
          <Sparkles size={20} />
        </div>

        <div>
          <span>ACADEMIC HEALTH</span>
          <h2>Good</h2>
        </div>

      </div>

      <div className="health-list">

        <HealthItem
          label="Attendance"
          value="Good"
          type="good"
        />

        <HealthItem
          label="Assignment completion"
          value="Good"
          type="good"
        />

        <HealthItem
          label="Exam preparation"
          value="Needs attention"
          type="warning"
        />

        <HealthItem
          label="Digital Logic"
          value="At risk"
          type="danger"
        />

      </div>

      <div className="recommendation">
        <strong>Your recommendation</strong>
        <p>
          Spend 30 minutes today reviewing Digital
          Logic before your next class.
        </p>
      </div>

    </section>
  );
}

function HealthItem({
  label,
  value,
  type,
}) {
  return (
    <div className="health-item">

      <span className={`health-dot ${type}`} />

      <span>{label}</span>

      <strong>{value}</strong>

    </div>
  );
}

/* =========================================================
   EXAMS
========================================================= */

function ExamPreview({ navigate }) {
  return (
    <section className="panel">

      <PanelHeader
        label="PREPARE AHEAD"
        title="Upcoming Exams"
        action="View exams"
        onClick={() => navigate("Exams")}
      />

      <div className="exam-list">

        {exams.map((exam) => (
          <div className="exam-row" key={exam.code}>

            <div className="exam-date">
              <strong>{exam.date.split(" ")[0]}</strong>
              <span>{exam.date.split(" ")[1]}</span>
            </div>

            <div className="exam-info">
              <strong>{exam.subject}</strong>
              <span>{exam.code} · {exam.days}</span>
            </div>

            <div className="exam-progress">
              <div>
                <span
                  style={{
                    width: `${exam.readiness}%`,
                  }}
                />
              </div>
              <small>{exam.readiness}% ready</small>
            </div>

          </div>
        ))}

      </div>

    </section>
  );
}

/* =========================================================
   ANNOUNCEMENTS
========================================================= */

function AnnouncementPreview({ navigate }) {
  return (
    <section className="panel">

      <PanelHeader
        label="CONNECT"
        title="Announcements"
        action="View all"
        onClick={() => navigate("Announcements")}
      />

      <div className="announcement-list">

        {announcements.map((item) => (
          <div
            className="announcement"
            key={item.title}
          >

            <div className="announcement-icon">
              <Bell size={17} />
            </div>

            <div>
              <strong>{item.title}</strong>
              <span>
                {item.from} · {item.time}
              </span>
            </div>

            {item.unread && <i />}

          </div>
        ))}

      </div>

    </section>
  );
}

/* =========================================================
   ATTENDANCE PAGE
========================================================= */

function AttendancePage() {
  const [selectedSubject, setSelectedSubject] =
    useState(null);

  const [marked, setMarked] = useState([]);

  return (
    <div className="page">

      <PageHero
        eyebrow="SMART ATTENDANCE"
        title="Attendance"
        text="Know exactly how many classes you need to attend to reach your 80% target."
      />

      <section className="attendance-summary">

        <div className="summary-icon">
          <Target size={25} />
        </div>

        <div className="summary-content">
          <span>YOUR ATTENDANCE TARGET</span>

          <h2>
            Stay on track with subject-wise targets
          </h2>

          <p>
            ClassSphere calculates the exact number of
            classes required for every subject.
          </p>
        </div>

        <div className="target-badge">
          <strong>80%</strong>
          <span>GOAL</span>
        </div>

      </section>

      <section className="attendance-section">

        <div className="section-heading">
          <div>
            <span>SUBJECT CHECK</span>
            <h2>Your attendance by subject</h2>
            <p>
              Each subject has its own secure attendance
              session.
            </p>
          </div>
        </div>

        <div className="attendance-grid">

          {attendanceSubjects.map((subject) => {

            const percentage =
              attendancePercentage(
                subject.attended,
                subject.total
              );

            const required =
              requiredFor80(
                subject.attended,
                subject.total
              );

            const isMarked =
              marked.includes(subject.code);

            let status = "safe";

            if (percentage < 75) {
              status = "danger";
            } else if (percentage < 80) {
              status = "warning";
            }

            return (
              <div
                className={`attendance-card ${status}`}
                key={subject.code}
              >

                <div className="attendance-card-top">

                  <span className="subject-code">
                    {subject.code}
                  </span>

                  <span className={`status ${status}`}>
                    {status === "safe"
                      ? "Safe"
                      : status === "warning"
                      ? "Needs attention"
                      : "At risk"}
                  </span>

                </div>

                <h3>{subject.name}</h3>

                <p className="subject-teacher">
                  {subject.teacher}
                </p>

                <div className="attendance-main">

                  <div
                    className="attendance-ring"
                    style={{
                      "--progress":
                        `${percentage * 3.6}deg`,
                    }}
                  >
                    <div>
                      <strong>{percentage}%</strong>
                      <span>Attendance</span>
                    </div>
                  </div>

                  <div className="attendance-count">

                    <div>
                      <strong>
                        {subject.attended}
                      </strong>
                      <span>Attended</span>
                    </div>

                    <div>
                      <strong>
                        {subject.total}
                      </strong>
                      <span>Total</span>
                    </div>

                  </div>

                </div>

                {required > 0 ? (
                  <div className="required-classes">

                    <div>
                      <TrendingUp size={18} />
                    </div>

                    <p>
                      <strong>
                        Attend next {required}{" "}
                        {required === 1
                          ? "class"
                          : "classes"}
                      </strong>

                      <span>
                        to reach your 80% target
                      </span>
                    </p>

                  </div>
                ) : (
                  <div className="target-reached">
                    <CheckCircle2 size={19} />

                    <div>
                      <strong>
                        80% target reached
                      </strong>

                      <span>
                        You are currently above target
                      </span>
                    </div>
                  </div>
                )}

                <div className="attendance-bar">

                  <div
                    style={{
                      width: `${percentage}%`,
                    }}
                  />

                  <span />

                </div>

                <div className="attendance-scale">
                  <span>0%</span>
                  <strong>80% target</strong>
                  <span>100%</span>
                </div>

                {isMarked ? (
                  <div className="marked-button">
                    <CheckCircle2 size={17} />
                    Attendance marked
                  </div>
                ) : (
                  <button
                    className="mark-button"
                    onClick={() =>
                      setSelectedSubject(subject)
                    }
                  >
                    <ScanLine size={17} />
                    Mark {subject.name} Attendance
                    <ArrowRight size={16} />
                  </button>
                )}

              </div>
            );
          })}

        </div>

      </section>

      <AntiProxy />

      {selectedSubject && (
        <AttendanceModal
          subject={selectedSubject}
          close={() => setSelectedSubject(null)}
          complete={() => {
            setMarked((prev) => [
              ...prev,
              selectedSubject.code,
            ]);

            setSelectedSubject(null);
          }}
        />
      )}

    </div>
  );
}

/* =========================================================
   ANTI PROXY
========================================================= */

function AntiProxy() {
  const cards = [
    {
      icon: LockKeyhole,
      title: "Student Login",
      text: "Verified ClassSphere account",
    },
    {
      icon: QrCode,
      title: "Subject QR",
      text: "Unique QR for each subject",
    },
    {
      icon: MapPin,
      title: "Classroom Presence",
      text: "Checks approved classroom",
    },
    {
      icon: Smartphone,
      title: "Registered Device",
      text: "Trusted student device",
    },
  ];

  return (
    <section className="anti-proxy">

      <div className="anti-proxy-heading">

        <div className="anti-proxy-icon">
          <ShieldCheck size={28} />
        </div>

        <div>
          <span>ANTI-PROXY PROTECTION</span>

          <h2>
            Attendance is verified, not just clicked.
          </h2>

          <p>
            Every attendance session is linked to the
            student, subject and active class.
          </p>
        </div>

      </div>

      <div className="security-grid">

        {cards.map((card) => {
          const Icon = card.icon;

          return (
            <div className="security-card" key={card.title}>

              <div className="security-card-icon">
                <Icon size={20} />
              </div>

              <div>
                <strong>{card.title}</strong>
                <span>{card.text}</span>
              </div>

              <CheckCircle2 size={17} />

            </div>
          );
        })}

      </div>

    </section>
  );
}

/* =========================================================
   ATTENDANCE MODAL
========================================================= */

function AttendanceModal({
  subject,
  close,
  complete,
}) {
  const [step, setStep] = useState(1);

  const percentage =
    attendancePercentage(
      subject.attended,
      subject.total
    );

  const required =
    requiredFor80(
      subject.attended,
      subject.total
    );

  const verify = () => {
    setStep(2);

    setTimeout(() => setStep(3), 900);

    setTimeout(() => setStep(4), 1800);
  };

  return (
    <div
      className="modal-overlay"
      onClick={close}
    >

      <div
        className="attendance-modal"
        onClick={(e) =>
          e.stopPropagation()
        }
      >

        <div className="modal-header">

          <div>
            <span>SECURE ATTENDANCE</span>

            <h2>{subject.name}</h2>

            <p>
              {subject.code} · {subject.teacher}
            </p>
          </div>

          <button onClick={close}>
            <X size={20} />
          </button>

        </div>

        {step === 1 && (
          <>
            <div className="modal-stats">

              <div>
                <span>CURRENT</span>
                <strong>{percentage}%</strong>
              </div>

              <div>
                <span>TARGET</span>
                <strong>80%</strong>
              </div>

              <div>
                <span>REQUIRED</span>
                <strong>
                  {required > 0
                    ? required
                    : "✓"}
                </strong>
              </div>

            </div>

            <div className="qr-container">

              <div className="fake-qr">
                <QrCode size={145} />
              </div>

              <div className="qr-live">
                <span className="live-dot" />
                {subject.name} session active
              </div>

            </div>

            <div className="qr-copy">

              <h3>
                Scan the {subject.name} QR
              </h3>

              <p>
                This QR belongs only to this subject
                and this active classroom session.
              </p>

            </div>

            <div className="verification-note">
              <ShieldCheck size={18} />
              <span>
                Subject QR + student identity +
                classroom + registered device are
                checked before attendance is marked.
              </span>
            </div>

            <button
              className="modal-primary"
              onClick={verify}
            >
              <ScanLine size={18} />
              Verify & Mark Attendance
            </button>
          </>
        )}

        {step === 2 && (
          <VerificationStep
            icon={LockKeyhole}
            title="Verifying student identity"
            text="Checking your ClassSphere account..."
          />
        )}

        {step === 3 && (
          <VerificationStep
            icon={MapPin}
            title="Checking classroom presence"
            text={`Verifying ${subject.name} classroom...`}
          />
        )}

        {step === 4 && (
          <div className="success-screen">

            <div className="success-circle">
              <Check size={32} />
            </div>

            <span>VERIFICATION COMPLETE</span>

            <h2>
              Attendance verified!
            </h2>

            <p>
              Your attendance for{" "}
              <strong>{subject.name}</strong>{" "}
              has been successfully verified.
            </p>

            <div className="verification-results">

              <div>
                <CheckCircle2 size={17} />
                Student identity verified
              </div>

              <div>
                <CheckCircle2 size={17} />
                Subject QR verified
              </div>

              <div>
                <CheckCircle2 size={17} />
                Classroom verified
              </div>

              <div>
                <CheckCircle2 size={17} />
                Registered device verified
              </div>

            </div>

            <button
              className="modal-primary"
              onClick={complete}
            >
              <Check size={18} />
              Mark Present
            </button>

          </div>
        )}

      </div>
    </div>
  );
}

/* =========================================================
   VERIFICATION STEP
========================================================= */

function VerificationStep({
  icon: Icon,
  title,
  text,
}) {
  return (
    <div className="verification-step">

      <div className="verification-spinner">
        <Icon size={34} />
      </div>

      <h2>{title}</h2>

      <p>{text}</p>

      <div className="loading-line">
        <span />
      </div>

    </div>
  );
}

/* =========================================================
   TIMETABLE PAGE
========================================================= */

function TimetablePage() {
  const [selectedDay, setSelectedDay] =
    useState("Thu");

  const days = [
    ["Mon", "01"],
    ["Tue", "02"],
    ["Wed", "03"],
    ["Thu", "04"],
    ["Fri", "05"],
    ["Sat", "06"],
  ];

  const classes = timetable[selectedDay];

  return (
    <div className="page">

      <PageHero
        eyebrow="YOUR WEEK"
        title="Timetable"
        text="Select a day to view your complete class schedule."
      />

      <section className="timetable-card">

        <div className="day-selector">

          {days.map(([day, date]) => (
            <button
              key={day}
              className={
                selectedDay === day
                  ? "day-button active"
                  : "day-button"
              }
              onClick={() =>
                setSelectedDay(day)
              }
            >
              <span>{day}</span>
              <strong>{date}</strong>
            </button>
          ))}

        </div>

        <div className="selected-day-heading">

          <div>
            <span>
              {selectedDay.toUpperCase()} ·
              SEPTEMBER 2026
            </span>

            <h2>
              {selectedDay}'s Classes
            </h2>
          </div>

          <div className="class-count">
            {classes.length}
            <span>classes</span>
          </div>

        </div>

        <div className="class-schedule">

          {classes.map((item, index) => (
            <div
              className="schedule-card"
              key={`${item.subject}-${index}`}
            >

              <div className="schedule-time">
                <strong>{item.time}</strong>
                <span>{item.end}</span>
              </div>

              <div className="schedule-line">
                <div className="schedule-dot">
                  <CalendarCheck size={16} />
                </div>

                {index !== classes.length - 1 && (
                  <div className="schedule-connector" />
                )}
              </div>

              <div className="schedule-info">

                <span className="schedule-type">
                  {item.type}
                </span>

                <h3>{item.subject}</h3>

                <p>
                  {item.teacher} · {item.room}
                </p>

              </div>

              <ChevronRight
                className="schedule-arrow"
                size={19}
              />

            </div>
          ))}

        </div>

      </section>

    </div>
  );
}

/* =========================================================
   OTHER PAGES
========================================================= */

function PageHero({
  eyebrow,
  title,
  text,
}) {
  return (
    <section className="page-hero">

      <span>{eyebrow}</span>

      <h1>{title}</h1>

      <p>{text}</p>

    </section>
  );
}

function DeadlinesPage() {
  return (
    <div className="page">

      <PageHero
        eyebrow="STAY ON TRACK"
        title="Upcoming Deadlines"
        text="A clear view of the work that needs your attention."
      />

      <div className="simple-grid">

        {deadlines.map((item) => (
          <div className="large-list-card" key={item.title}>

            <div className="list-card-icon">
              <Clock3 size={22} />
            </div>

            <span>{item.subject}</span>

            <h2>{item.title}</h2>

            <p>
              Due {item.due}
            </p>

            <div className={`priority ${item.priority.toLowerCase()}`}>
              {item.priority} priority
            </div>

          </div>
        ))}

      </div>

    </div>
  );
}

function AssignmentsPage() {
  return (
    <div className="page">

      <PageHero
        eyebrow="ACADEMICS"
        title="Assignments"
        text="Keep track of everything you need to complete."
      />

      <div className="simple-grid">

        {deadlines.map((item) => (
          <div className="large-list-card" key={item.title}>

            <div className="list-card-icon purple">
              <ClipboardList size={22} />
            </div>

            <span>{item.subject}</span>

            <h2>{item.title}</h2>

            <p>
              Submission: {item.due}
            </p>

            <button className="small-action">
              Open assignment
              <ArrowRight size={15} />
            </button>

          </div>
        ))}

      </div>

    </div>
  );
}

function ExamsPage() {
  return (
    <div className="page">

      <PageHero
        eyebrow="PREPARE AHEAD"
        title="Upcoming Exams"
        text="Plan your preparation before exam day."
      />

      <div className="simple-grid">

        {exams.map((exam) => (
          <div className="large-list-card" key={exam.code}>

            <div className="exam-big-date">
              {exam.date}
            </div>

            <span>{exam.code}</span>

            <h2>{exam.subject}</h2>

            <p>{exam.days} remaining</p>

            <div className="big-progress">
              <div>
                <span
                  style={{
                    width: `${exam.readiness}%`,
                  }}
                />
              </div>

              <strong>
                {exam.readiness}% prepared
              </strong>
            </div>

          </div>
        ))}

      </div>

    </div>
  );
}

function SubjectsPage() {
  const subjects = [
    ["CS201", "Data Structures", "82%", "76%"],
    ["CS202", "Database Management", "84%", "88%"],
    ["CS203", "Java Programming", "78%", "81%"],
    ["CS204", "Digital Logic", "72%", "68%"],
    ["MA201", "Mathematics", "91%", "92%"],
  ];

  return (
    <div className="page">

      <PageHero
        eyebrow="YOUR ACADEMICS"
        title="Subjects"
        text="Track attendance and performance across every subject."
      />

      <div className="subject-table">

        {subjects.map((subject) => (
          <div className="subject-table-row" key={subject[0]}>

            <div className="subject-avatar">
              {subject[0].slice(-2)}
            </div>

            <div>
              <strong>{subject[1]}</strong>
              <span>{subject[0]}</span>
            </div>

            <div>
              <span>Attendance</span>
              <strong>{subject[2]}</strong>
            </div>

            <div>
              <span>Performance</span>
              <strong>{subject[3]}</strong>
            </div>

            <ArrowRight size={18} />

          </div>
        ))}

      </div>

    </div>
  );
}

function ProgressPage() {
  return (
    <div className="page">

      <PageHero
        eyebrow="YOUR GROWTH"
        title="Progress"
        text="See how your academic performance is improving."
      />

      <div className="progress-hero">

        <div className="progress-score">
          <strong>82</strong>
          <span>Overall score</span>
        </div>

        <div>
          <h2>You're making good progress.</h2>
          <p>
            Keep your current study rhythm and focus
            extra attention on Digital Logic.
          </p>
        </div>

      </div>

    </div>
  );
}

function AnnouncementsPage() {
  return (
    <div className="page">

      <PageHero
        eyebrow="CAMPUS CONNECT"
        title="Announcements"
        text="Important updates from your department and teachers."
      />

      <div className="announcement-page-list">

        {announcements.map((item) => (
          <div className="announcement-large" key={item.title}>

            <div className="announcement-large-icon">
              <Bell size={21} />
            </div>

            <div>
              <span>{item.from} · {item.time}</span>
              <h2>{item.title}</h2>
              <p>
                View the latest information and updates
                related to your academics.
              </p>
            </div>

            {item.unread && (
              <span className="unread-label">
                NEW
              </span>
            )}

          </div>
        ))}

      </div>

    </div>
  );
}

function AIAssistantPage() {
  const prompts = [
    "What classes do I have tomorrow?",
    "Which assignment is due first?",
    "How can I reach 80% attendance?",
    "Help me prepare for DBMS",
  ];

  return (
    <div className="page">

      <section className="ai-page-hero">

        <div className="ai-large-icon">
          <Sparkles size={35} />
        </div>

        <span>SMART TOOLS</span>

        <h1>ClassSphere AI</h1>

        <p>
          Your academic assistant for classes,
          assignments, attendance and exam preparation.
        </p>

      </section>

      <div className="ai-chat">

        <div className="ai-message">
          <Sparkles size={19} />
          <p>
            Hi Anushka! What would you like help with
            today?
          </p>
        </div>

        <div className="prompt-grid">

          {prompts.map((prompt) => (
            <button key={prompt}>
              {prompt}
              <ArrowRight size={15} />
            </button>
          ))}

        </div>

      </div>

    </div>
  );
}

/* =========================================================
   SEARCH
========================================================= */

function SearchModal({
  close,
  navigate,
}) {
  const actions = [
    ["View timetable", "Timetable"],
    ["Check attendance", "Attendance"],
    ["View assignments", "Assignments"],
    ["View exams", "Exams"],
  ];

  return (
    <div
      className="search-overlay"
      onClick={close}
    >

      <div
        className="search-modal"
        onClick={(e) =>
          e.stopPropagation()
        }
      >

        <div className="search-input">

          <Search size={21} />

          <input
            autoFocus
            placeholder="Search anything..."
          />

          <button onClick={close}>
            <X size={19} />
          </button>

        </div>

        <span className="search-label">
          QUICK ACTIONS
        </span>

        <div className="search-actions">

          {actions.map(([label, target]) => (
            <button
              key={target}
              onClick={() => {
                navigate(target);
                close();
              }}
            >
              <ArrowRight size={17} />
              {label}
            </button>
          ))}

        </div>

        <div className="recent-search">
          <span>RECENT</span>
          <p>DBMS Assignment</p>
          <p>Digital Logic</p>
          <p>Timetable</p>
        </div>

      </div>
    </div>
  );
}