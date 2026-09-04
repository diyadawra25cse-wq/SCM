import React, { useState } from "react";
import StudentDashboard from "./student/StudentDashboard";
import TeacherDashboard from "./teacher/TeacherDashboard";
import "./App.css";

function App() {
  const [role, setRole] = useState(null);
  const [loginId, setLoginId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const credentials = {
    student: {
      id: "student01",
      password: "student123",
    },
    teacher: {
      id: "teacher01",
      password: "teacher123",
    },
  };

  const handleLogin = (selectedRole) => {
    const account = credentials[selectedRole];

    if (
      loginId === account.id &&
      password === account.password
    ) {
      setError("");
      setRole(selectedRole);
    } else {
      setError("Invalid Login ID or Password");
    }
  };

  if (role === "student") {
    return <StudentDashboard />;
  }

  if (role === "teacher") {
    return <TeacherDashboard />;
  }

  return (
    <div className="login-page">
      <div className="login-card">

        <div className="login-logo">CS</div>

        <h1>Welcome to ClassSphere</h1>

        <p className="login-subtitle">
          Smart academic management platform
        </p>

        {!role && (
          <>
            <div className="login-section-title">
              Select your role
            </div>

            <div className="role-buttons">

              <button
                className="role-select student-select"
                onClick={() => setRole("student-login")}
              >
                <span className="role-emoji">🎓</span>

                <div>
                  <strong>Student</strong>
                  <span>Access student dashboard</span>
                </div>
              </button>

              <button
                className="role-select teacher-select"
                onClick={() => setRole("teacher-login")}
              >
                <span className="role-emoji">👨‍🏫</span>

                <div>
                  <strong>Teacher</strong>
                  <span>Manage classes and students</span>
                </div>
              </button>

            </div>
          </>
        )}

        {(role === "student-login" ||
          role === "teacher-login") && (
          <div className="login-form">

            <div className="selected-role">
              <span>
                {role === "student-login"
                  ? "🎓"
                  : "👨‍🏫"}
              </span>

              <div>
                <strong>
                  {role === "student-login"
                    ? "Student Login"
                    : "Teacher Login"}
                </strong>

                <small>
                  Enter your ClassSphere credentials
                </small>
              </div>
            </div>

            <label>Login ID</label>

            <input
              type="text"
              placeholder="Enter your Login ID"
              value={loginId}
              onChange={(e) => setLoginId(e.target.value)}
            />

            <label>Password</label>

            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            {error && (
              <div className="login-error">
                {error}
              </div>
            )}

            <button
              className="login-submit"
              onClick={() =>
                handleLogin(
                  role === "student-login"
                    ? "student"
                    : "teacher"
                )
              }
            >
              Login
            </button>

            <button
              className="back-button"
              onClick={() => {
                setRole(null);
                setLoginId("");
                setPassword("");
                setError("");
              }}
            >
              ← Back to role selection
            </button>

          </div>
        )}

        <div className="login-footer">
          ClassSphere • Smart Classroom Platform
        </div>

      </div>
    </div>
  );
}

export default App;