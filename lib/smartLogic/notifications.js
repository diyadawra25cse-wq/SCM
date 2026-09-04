function generateNotifications(attendance, assignments, exams) {
    const notifications = [];

    // Attendance notifications
    attendance.forEach(subject => {
        if (subject.status === "CRITICAL") {
            notifications.push({
                type: "ATTENDANCE",
                message: `${subject.subject} attendance is critically low.`,
                priority: "HIGH"
            });
        } else if (subject.status === "WARNING") {
            notifications.push({
                type: "ATTENDANCE",
                message: `${subject.subject} attendance needs attention.`,
                priority: "MEDIUM"
            });
        }
    });

    // Assignment notifications
    assignments.forEach(assignment => {
        if (assignment.priority === "HIGH") {
            notifications.push({
                type: "ASSIGNMENT",
                message: `${assignment.title} is due very soon.`,
                priority: "HIGH"
            });
        }
    });

    // Exam notifications
    exams.forEach(exam => {
        if (exam.readiness === "CRITICAL") {
            notifications.push({
                type: "EXAM",
                message: `${exam.subject} exam needs immediate preparation.`,
                priority: "HIGH"
            });
        } else if (exam.readiness === "WARNING") {
            notifications.push({
                type: "EXAM",
                message: `${exam.subject} exam preparation needs attention.`,
                priority: "MEDIUM"
            });
        }
    });

    return notifications;
}

module.exports = {
    generateNotifications
};
