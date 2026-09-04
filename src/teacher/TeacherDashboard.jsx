import React, { useState } from "react";
import {
  LayoutDashboard,
  Users,
  ClipboardCheck,
  FileText,
  Bell,
  BarChart3,
  CalendarDays,
  MessageCircleQuestion,
  Settings,
  LogOut,
  Search,
  Plus,
  CheckCircle2,
  AlertTriangle,
  BookOpen,
  MoreHorizontal,
  ArrowUpRight,
  Menu,
  X,
  Clock3,
} from "lucide-react";

import "./TeacherDashboard.css";

const classes = [
  {
    subject: "Digital Logic",
    className: "CSE - Semester 2",
    time: "09:00 AM",
    room: "Room 204",
    students: 48,
    attendance: 86,
    status: "Completed",
  },
  {
    subject: "Data Structures",
    className: "CSE - Semester 2",
    time: "11:00 AM",
    room: "Lab 3",
    students: 52,
    attendance: 91,
    status: "Upcoming",
  },
  {
    subject: "DBMS",
    className: "CSE - Semester 2",
    time: "01:00 PM",
    room: "Room 108",
    students: 50,
    attendance: 84,
    status: "Upcoming",
  },
  {
    subject: "Java OOP",
    className: "CSE - Semester 2",
    time: "03:00 PM",
    room: "Room 201",
    students: 49,
    attendance: 88,
    status: "Upcoming",
  },
];

const students = [
  {
    name: "Anushka Rana",
    roll: "CSE202501",
    attendance: 79,
    assignment: "Submitted",
    status: "Good",
  },
  {
    name: "Aarav Sharma",
    roll: "CSE202502",
    attendance: 92,
    assignment: "Submitted",
    status: "Good",
  },
  {
    name: "Diya Verma",
    roll: "CSE202503",
    attendance: 74,
    assignment: "Pending",
    status: "At Risk",
  },
  {
    name: "Rohan Gupta",
    roll: "CSE202504",
    attendance: 68,
    assignment: "Pending",
    status: "At Risk",
  },
];

const subjects = [
  "Digital Logic",
  "Data Structures",
  "DBMS",
  "Java OOP",
];

export default function TeacherDashboard() {
  const [page, setPage] = useState("Dashboard");
  const [mobileMenu, setMobileMenu] = useState(false);

  const navigation = [
    ["Dashboard", LayoutDashboard],
    ["Attendance", ClipboardCheck],
    ["Students", Users],
    ["Assignments", FileText],
    ["Timetable", CalendarDays],
    ["Announcements", Bell],
    ["Doubt Box", MessageCircleQuestion],
    ["Analytics", BarChart3],
  ];

  const goToPage = (newPage) => {
    setPage(newPage);
    setMobileMenu(false);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="teacher-app">
      {mobileMenu && (
        <div
          className="teacher-overlay"
          onClick={() => setMobileMenu(false)}
        />
      )}

      {/* SIDEBAR */}
      <aside
        className={`teacher-sidebar ${
          mobileMenu ? "teacher-sidebar-open" : ""
        }`}
      >
        <div className="teacher-brand">
          <div className="teacher-brand-icon">
            <BookOpen size={22} />
          </div>

          <div>
            <h2>ClassSphere</h2>
            <span>Teacher Portal</span>
          </div>

          <button
            className="mobile-close"
            onClick={() => setMobileMenu(false)}
          >
            <X size={20} />
          </button>
        </div>

        <div className="teacher-profile">
          <div className="teacher-avatar">DR</div>

          <div>
            <strong>Dr. Riya Sharma</strong>
            <span>Computer Science</span>
          </div>
        </div>

        <nav className="teacher-nav">
          <p className="nav-label">MAIN MENU</p>

          {navigation.map(([name, Icon]) => (
            <button
              key={name}
              className={`teacher-nav-item ${
                page === name ? "active" : ""
              }`}
              onClick={() => goToPage(name)}
            >
              <Icon size={19} />
              <span>{name}</span>
            </button>
          ))}
        </nav>

        <div className="teacher-sidebar-bottom">
          <button
            className={`teacher-nav-item ${
              page === "Settings" ? "active" : ""
            }`}
            onClick={() => goToPage("Settings")}
          >
            <Settings size={19} />
            <span>Settings</span>
          </button>

          <button className="teacher-nav-item logout">
            <LogOut size={19} />
            <span>Logout</span>
          </button>
        </div>
      </aside>

      {/* MAIN */}
      <main className="teacher-main">
        {/* HEADER */}
        <header className="teacher-header">
          <div className="header-left">
            <button
              className="mobile-menu"
              onClick={() => setMobileMenu(true)}
            >
              <Menu size={23} />
            </button>

            <div>
              <p className="header-small">
                ClassSphere Teacher Portal
              </p>
              <h1>{page}</h1>
            </div>
          </div>

          <div className="header-actions">
            <div className="teacher-search">
              <Search size={18} />
              <input placeholder="Search students..." />
            </div>

            <button className="header-icon">
              <Bell size={20} />
              <span className="notification-dot" />
            </button>

            <div className="header-avatar">DR</div>
          </div>
        </header>

        {/* PAGES */}

        {page === "Dashboard" && (
          <DashboardPage goToPage={goToPage} />
        )}

        {page === "Attendance" && <AttendancePage />}

        {page === "Students" && <StudentsPage />}

        {page === "Assignments" && <AssignmentsPage />}

        {page === "Timetable" && <TimetablePage />}

        {page === "Announcements" && <AnnouncementsPage />}

        {page === "Doubt Box" && <DoubtBoxPage />}

        {page === "Analytics" && <AnalyticsPage />}

        {page === "Settings" && <SettingsPage />}
      </main>
    </div>
  );
}


/* =========================================================
   DASHBOARD
========================================================= */

function DashboardPage({ goToPage }) {
  return (
    <div className="teacher-content">

      {/* HERO */}
      <section className="teacher-welcome">
        <div>
          <span className="welcome-tag">
            TEACHER OVERVIEW
          </span>

          <h2>
            Good morning, <strong>Dr. Riya!</strong> 👋
          </h2>

          <p>
            Here’s what’s happening with your classes today.
          </p>

          <div className="welcome-actions">
            <button
              className="primary-btn"
              onClick={() => goToPage("Attendance")}
            >
              <ClipboardCheck size={18} />
              Take Attendance
            </button>

            <button
              className="secondary-btn"
              onClick={() => goToPage("Assignments")}
            >
              <Plus size={18} />
              Create Assignment
            </button>
          </div>
        </div>

        <div className="welcome-illustration">
          <div className="illustration-circle">
            <BookOpen size={50} />
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="teacher-stats">

        <StatCard
          icon={<Users />}
          label="Total Students"
          value="52"
          change="+4 this semester"
          type="blue"
        />

        <StatCard
          icon={<ClipboardCheck />}
          label="Average Attendance"
          value="84%"
          change="+3.2% this month"
          type="purple"
        />

        <StatCard
          icon={<FileText />}
          label="Pending Reviews"
          value="18"
          change="6 due today"
          type="pink"
        />

        <StatCard
          icon={<MessageCircleQuestion />}
          label="Open Doubts"
          value="7"
          change="3 unanswered"
          type="orange"
        />

      </section>

      <div className="teacher-grid">

        {/* TODAY'S CLASSES */}
        <section className="teacher-card">
          <CardHeader
            title="Today's Classes"
            subtitle="Your teaching schedule"
            action="View Timetable"
            onClick={() => goToPage("Timetable")}
          />

          {classes.map((item) => (
            <div
              className="class-row"
              key={item.subject}
            >
              <div className="class-time">
                <strong>{item.time}</strong>
                <span>{item.room}</span>
              </div>

              <div className="class-info">
                <h4>{item.subject}</h4>
                <p>
                  {item.className} • {item.students} students
                </p>
              </div>

              <div className="class-attendance">
                <strong>{item.attendance}%</strong>
                <small>attendance</small>
              </div>

              <span
                className={`class-status ${
                  item.status === "Completed"
                    ? "completed"
                    : "upcoming"
                }`}
              >
                {item.status}
              </span>
            </div>
          ))}
        </section>

        {/* QUICK ACTIONS */}
        <section className="teacher-card">
          <CardHeader
            title="Quick Actions"
            subtitle="Common teaching tasks"
          />

          <div className="quick-actions">

            <QuickAction
              icon={<ClipboardCheck />}
              title="Take Attendance"
              text="Start class attendance"
              type="blue"
              onClick={() => goToPage("Attendance")}
            />

            <QuickAction
              icon={<FileText />}
              title="Review Work"
              text="18 submissions pending"
              type="purple"
              onClick={() => goToPage("Assignments")}
            />

            <QuickAction
              icon={<Bell />}
              title="Announcement"
              text="Notify your students"
              type="pink"
              onClick={() => goToPage("Announcements")}
            />

            <QuickAction
              icon={<MessageCircleQuestion />}
              title="Answer Doubts"
              text="3 need your response"
              type="orange"
              onClick={() => goToPage("Doubt Box")}
            />

          </div>
        </section>

      </div>

      {/* STUDENTS NEEDING ATTENTION */}
      <section className="teacher-card">
        <CardHeader
          title="Students Needing Attention"
          subtitle="Based on attendance and assignment activity"
          action="View All Students"
          onClick={() => goToPage("Students")}
        />

        <div className="attention-table">

          <div className="table-head">
            <span>STUDENT</span>
            <span>ATTENDANCE</span>
            <span>ASSIGNMENT</span>
            <span>STATUS</span>
            <span />
          </div>

          {students.map((student) => (
            <div
              className="student-row"
              key={student.roll}
            >
              <div className="student-name">
                <div className="mini-avatar">
                  {getInitials(student.name)}
                </div>

                <div>
                  <strong>{student.name}</strong>
                  <span>{student.roll}</span>
                </div>
              </div>

              <strong
                className={
                  student.attendance < 75
                    ? "danger-text"
                    : ""
                }
              >
                {student.attendance}%
              </strong>

              <span
                className={`assignment-status ${
                  student.assignment === "Submitted"
                    ? "submitted"
                    : "pending"
                }`}
              >
                {student.assignment}
              </span>

              <span
                className={`risk-status ${
                  student.status === "Good"
                    ? "good"
                    : "risk"
                }`}
              >
                {student.status}
              </span>

              <button className="more-btn">
                <MoreHorizontal size={19} />
              </button>
            </div>
          ))}

        </div>
      </section>

      <div className="teacher-grid bottom-grid">

        {/* PENDING WORK */}
        <section className="teacher-card">
          <CardHeader
            title="Pending Work"
            subtitle="Assignments requiring review"
          />

          {[
            "DBMS Normalization",
            "DSA Implementation",
            "Java OOP Quiz",
          ].map((assignment, index) => (
            <div
              className="pending-item"
              key={assignment}
            >
              <div className="pending-icon">
                <FileText size={19} />
              </div>

              <div>
                <strong>{assignment}</strong>
                <span>
                  CSE Semester 2 •{" "}
                  {28 - index * 7} submissions
                </span>
              </div>

              <span
                className={`priority ${
                  index === 0
                    ? "high"
                    : index === 1
                    ? "medium"
                    : "low"
                }`}
              >
                {index === 0
                  ? "High"
                  : index === 1
                  ? "Medium"
                  : "Low"}
              </span>
            </div>
          ))}
        </section>

        {/* RECENT ACTIVITY */}
        <section className="teacher-card">
          <CardHeader
            title="Recent Activity"
            subtitle="Latest classroom updates"
          />

          {[
            [
              "Attendance completed for Digital Logic",
              "10 min ago",
              CheckCircle2,
            ],
            [
              "28 students submitted DBMS assignment",
              "32 min ago",
              FileText,
            ],
            [
              "3 new doubts received",
              "1 hour ago",
              MessageCircleQuestion,
            ],
            [
              "Announcement sent to Semester 2",
              "2 hours ago",
              Bell,
            ],
          ].map(([text, time, Icon]) => (
            <div
              className="activity-item"
              key={text}
            >
              <div className="activity-icon">
                <Icon size={18} />
              </div>

              <div>
                <strong>{text}</strong>
                <span>{time}</span>
              </div>
            </div>
          ))}
        </section>

      </div>
    </div>
  );
}


/* =========================================================
   ATTENDANCE
========================================================= */

function AttendancePage() {
  const [subject, setSubject] =
    useState("Digital Logic");

  return (
    <div className="teacher-content">

      <PageIntro
        title="Attendance Management"
        text="Create secure session-based attendance for your class."
      />

      <div className="attendance-layout">

        <section className="teacher-card">

          <div className="section-heading">
            <div>
              <span className="eyebrow">
                LIVE SESSION
              </span>

              <h3>Attendance QR</h3>

              <p>
                Students can scan this QR to mark attendance.
              </p>
            </div>

            <span className="live-badge">
              <span />
              LIVE
            </span>
          </div>

          <div className="subject-selector">
            {subjects.slice(0, 3).map((item) => (
              <button
                key={item}
                className={
                  subject === item
                    ? "selected"
                    : ""
                }
                onClick={() => setSubject(item)}
              >
                {item}
              </button>
            ))}
          </div>

          <div className="qr-placeholder">
            <div className="fake-qr">

              <div className="qr-corner top-left" />
              <div className="qr-corner top-right" />
              <div className="qr-corner bottom-left" />

              <div className="qr-pattern">
                {Array.from({ length: 9 }).map(
                  (_, index) => (
                    <span key={index} />
                  )
                )}
              </div>

            </div>
          </div>

          <div className="qr-info">
            <strong>{subject}</strong>
            <span>
              CSE - Semester 2 • 48 students
            </span>
          </div>

          <button className="primary-btn full-width">
            Regenerate QR
          </button>

        </section>


        <section className="teacher-card">

          <CardHeader
            title="Today's Attendance"
            subtitle="Current session overview"
          />

          <div className="attendance-big">
            <div>
              <strong>41</strong>
              <span>Present</span>
            </div>

            <div>
              <strong>7</strong>
              <span>Absent</span>
            </div>
          </div>

          <div className="progress-large">
            <div style={{ width: "85%" }} />
          </div>

          <div className="attendance-percent">
            <strong>85%</strong>
            <span>attendance rate</span>
          </div>

          <div className="attendance-warning">
            <AlertTriangle size={18} />
            5 students have attendance below 75%.
          </div>

        </section>

      </div>


      <section className="teacher-card">

        <CardHeader
          title="Attendance Register"
          subtitle="Digital Logic • September 5"
          action="Export"
        />

        {students.map((student) => (
          <div
            className="student-row"
            key={student.roll}
          >
            <div className="student-name">
              <div className="mini-avatar">
                {getInitials(student.name)}
              </div>

              <strong>{student.name}</strong>
            </div>

            <span>{student.roll}</span>

            <strong
              className={
                student.attendance < 75
                  ? "danger-text"
                  : ""
              }
            >
              {student.attendance}%
            </strong>

            <span className="present-pill">
              Present
            </span>
          </div>
        ))}

      </section>

    </div>
  );
}


/* =========================================================
   STUDENTS
========================================================= */

function StudentsPage() {
  return (
    <div className="teacher-content">

      <PageIntro
        title="Students"
        text="Monitor student attendance, assignments and academic health."
      />

      <section className="teacher-card">

        <div className="student-grid">

          {students.map((student) => (
            <div
              className="student-profile-card"
              key={student.roll}
            >
              <div className="profile-top">
                <div className="large-avatar">
                  {getInitials(student.name)}
                </div>

                <button className="more-btn">
                  <MoreHorizontal size={19} />
                </button>
              </div>

              <h3>{student.name}</h3>

              <p>
                {student.roll} • CSE Semester 2
              </p>

              <div className="student-metrics">

                <div>
                  <span>Attendance</span>
                  <strong>{student.attendance}%</strong>
                </div>

                <div>
                  <span>Assignment</span>
                  <strong>
                    {student.assignment}
                  </strong>
                </div>

              </div>

              <span
                className={`risk-status ${
                  student.status === "Good"
                    ? "good"
                    : "risk"
                }`}
              >
                {student.status}
              </span>

            </div>
          ))}

        </div>

      </section>
    </div>
  );
}


/* =========================================================
   ASSIGNMENTS
========================================================= */

function AssignmentsPage() {
  const assignments = [
    {
      name: "DBMS Normalization",
      subject: "Database Management Systems",
      submitted: "28 / 50",
      priority: "High",
      due: "Due tomorrow",
    },
    {
      name: "DSA Implementation",
      subject: "Data Structures",
      submitted: "38 / 50",
      priority: "Medium",
      due: "Due in 3 days",
    },
    {
      name: "Java OOP Quiz",
      subject: "Object Oriented Programming",
      submitted: "45 / 50",
      priority: "Low",
      due: "Due in 5 days",
    },
  ];

  return (
    <div className="teacher-content">

      <PageIntro
        title="Assignments"
        text="Create, manage and review coursework."
      />

      <div className="page-action-row">
        <button className="primary-btn">
          <Plus size={18} />
          Create Assignment
        </button>
      </div>

      <section className="teacher-card">

        {assignments.map((assignment) => (
          <div
            className="assignment-row"
            key={assignment.name}
          >

            <div className="assignment-icon">
              <FileText size={22} />
            </div>

            <div>
              <h3>{assignment.name}</h3>
              <p>{assignment.subject}</p>
            </div>

            <div>
              <strong>{assignment.submitted}</strong>
              <span>submitted</span>
            </div>

            <div>
              <span
                className={`priority ${
                  assignment.priority === "High"
                    ? "high"
                    : assignment.priority === "Medium"
                    ? "medium"
                    : "low"
                }`}
              >
                {assignment.priority}
              </span>

              <p className="due-text">
                {assignment.due}
              </p>
            </div>

            <button className="secondary-btn small">
              Review
            </button>

          </div>
        ))}

      </section>
    </div>
  );
}


/* =========================================================
   TIMETABLE
========================================================= */

function TimetablePage() {
  const [day, setDay] = useState("Tuesday");

  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
  ];

  const timetable = [
    ["09:00 AM", "Digital Logic", "Room 204"],
    ["11:00 AM", "Data Structures", "Lab 3"],
    ["01:00 PM", "DBMS", "Room 108"],
    ["03:00 PM", "Java OOP", "Room 201"],
  ];

  return (
    <div className="teacher-content">

      <PageIntro
        title="Timetable"
        text="View and manage your weekly teaching schedule."
      />

      <div className="day-tabs">
        {days.map((item) => (
          <button
            key={item}
            className={
              day === item ? "active" : ""
            }
            onClick={() => setDay(item)}
          >
            {item}
          </button>
        ))}
      </div>

      <section className="teacher-card">

        {timetable.map((row) => (
          <div
            className="timetable-row"
            key={row[0]}
          >

            <div className="time-block">
              <Clock3 size={18} />
              <strong>{row[0]}</strong>
            </div>

            <div>
              <h3>{row[1]}</h3>
              <p>CSE - Semester 2</p>
            </div>

            <span className="room-pill">
              {row[2]}
            </span>

          </div>
        ))}

      </section>
    </div>
  );
}


/* =========================================================
   ANNOUNCEMENTS
========================================================= */

function AnnouncementsPage() {
  const announcements = [
    [
      "Internal Assessment Schedule Updated",
      "The internal assessment schedule has been updated. Please check the new dates.",
      "Today",
      "important",
    ],
    [
      "DBMS Assignment Instructions",
      "Updated instructions and submission guidelines are now available for students.",
      "Yesterday",
      "info",
    ],
    [
      "New Study Material Available",
      "New Digital Logic and Data Structures study materials have been uploaded.",
      "Sep 3",
      "success",
    ],
  ];

  return (
    <div className="teacher-content">

      <PageIntro
        title="Announcements"
        text="Keep your students updated with important information."
      />

      <div className="page-action-row">
        <button className="primary-btn">
          <Plus size={18} />
          New Announcement
        </button>
      </div>

      <section className="teacher-card announcement-list">

        {announcements.map(
          ([title, text, date, type]) => (
            <div
              className="announcement-row"
              key={title}
            >

              <div
                className={`announcement-icon ${type}`}
              >
                <Bell size={20} />
              </div>

              <div className="announcement-content">
                <h3>{title}</h3>
                <p>{text}</p>
              </div>

              <span className="announcement-date">
                {date}
              </span>

              <button className="more-btn">
                <MoreHorizontal size={19} />
              </button>

            </div>
          )
        )}

      </section>
    </div>
  );
}


/* =========================================================
   DOUBT BOX
========================================================= */

function DoubtBoxPage() {
  const doubts = [
    [
      "Anushka Rana",
      "Digital Logic",
      "Can you explain how K-map grouping works for four variables?",
      "Unanswered",
    ],
    [
      "Aarav Sharma",
      "DBMS",
      "What is the difference between 2NF and 3NF?",
      "Unanswered",
    ],
    [
      "Diya Verma",
      "Data Structures",
      "Which sorting algorithm should we use for the assignment?",
      "Answered",
    ],
  ];

  return (
    <div className="teacher-content">

      <PageIntro
        title="Doubt Box"
        text="Answer questions raised by your students."
      />

      <div className="doubt-grid">

        {doubts.map(
          ([student, subject, question, status]) => (
            <section
              className="teacher-card doubt-card"
              key={question}
            >

              <div className="doubt-top">

                <div className="mini-avatar">
                  {getInitials(student)}
                </div>

                <div>
                  <strong>{student}</strong>
                  <span>{subject}</span>
                </div>

                <span
                  className={`doubt-status ${
                    status === "Answered"
                      ? "answered"
                      : ""
                  }`}
                >
                  {status}
                </span>

              </div>

              <p className="doubt-question">
                {question}
              </p>

              <button className="secondary-btn small">
                {status === "Answered"
                  ? "View Answer"
                  : "Answer Doubt"}
              </button>

            </section>
          )
        )}

      </div>
    </div>
  );
}


/* =========================================================
   ANALYTICS
========================================================= */

function AnalyticsPage() {
  const performance = [
    ["Digital Logic", 72],
    ["Data Structures", 82],
    ["DBMS", 84],
    ["Java OOP", 78],
    ["Mathematics", 91],
  ];

  return (
    <div className="teacher-content">

      <PageIntro
        title="Class Analytics"
        text="Understand attendance and academic performance trends."
      />

      <div className="analytics-grid">

        <AnalyticsCard
          title="Average Attendance"
          value="84%"
          change="+3.2%"
        />

        <AnalyticsCard
          title="Assignment Completion"
          value="88%"
          change="+5.4%"
        />

        <AnalyticsCard
          title="Average Performance"
          value="81%"
          change="+2.1%"
        />

      </div>

      <section className="teacher-card">

        <CardHeader
          title="Subject Performance"
          subtitle="Current class averages"
        />

        <div className="performance-bars">

          {performance.map(([subject, value]) => (
            <div
              className="performance-item"
              key={subject}
            >

              <div>
                <span>{subject}</span>
                <strong>{value}%</strong>
              </div>

              <div className="bar">
                <div
                  style={{
                    width: `${value}%`,
                  }}
                />
              </div>

            </div>
          ))}

        </div>

      </section>

    </div>
  );
}


/* =========================================================
   SETTINGS
========================================================= */

function SettingsPage() {
  return (
    <div className="teacher-content">

      <PageIntro
        title="Settings"
        text="Manage your teacher profile and classroom preferences."
      />

      <section className="teacher-card settings-card">

        <h3>Teacher Profile</h3>

        <div className="settings-profile">

          <div className="large-avatar">
            DR
          </div>

          <div>
            <strong>Dr. Riya Sharma</strong>
            <p>
              Computer Science Department
            </p>
          </div>

        </div>

        <button className="secondary-btn">
          Edit Profile
        </button>

      </section>

    </div>
  );
}


/* =========================================================
   SMALL COMPONENTS
========================================================= */

function StatCard({
  icon,
  label,
  value,
  change,
  type,
}) {
  return (
    <div className="teacher-stat">

      <div className={`stat-icon ${type}`}>
        {icon}
      </div>

      <div>
        <span>{label}</span>
        <strong>{value}</strong>
        <small>{change}</small>
      </div>

    </div>
  );
}


function CardHeader({
  title,
  subtitle,
  action,
  onClick,
}) {
  return (
    <div className="card-header">

      <div>
        <h3>{title}</h3>
        <p>{subtitle}</p>
      </div>

      {action && (
        <button
          className="text-btn"
          onClick={onClick}
        >
          {action}
          <ArrowUpRight size={15} />
        </button>
      )}

    </div>
  );
}


function QuickAction({
  icon,
  title,
  text,
  type,
  onClick,
}) {
  return (
    <button
      className="quick-action"
      onClick={onClick}
    >
      <div className={`quick-icon ${type}`}>
        {icon}
      </div>

      <div>
        <strong>{title}</strong>
        <span>{text}</span>
      </div>

      <ArrowUpRight size={16} />
    </button>
  );
}


function AnalyticsCard({
  title,
  value,
  change,
}) {
  return (
    <div className="analytics-card">

      <span>{title}</span>

      <strong>{value}</strong>

      <div className="analytics-change">
        <ArrowUpRight size={14} />
        {change}
      </div>

      <p>
        Compared with the previous period
      </p>

    </div>
  );
}


function PageIntro({ title, text }) {
  return (
    <section className="page-intro">

      <span className="eyebrow">
        CLASSSPHERE
      </span>

      <h2>{title}</h2>

      <p>{text}</p>

    </section>
  );
}


function getInitials(name) {
  return name
    .split(" ")
    .map((word) => word[0])
    .join("");
}