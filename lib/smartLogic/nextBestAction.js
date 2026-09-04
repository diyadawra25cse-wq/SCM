function getNextBestAction(attendance, assignments, exams) {
    // 1. Urgent assignment
    const urgentAssignment = assignments.find(
        assignment => assignment.priority === "HIGH"
    );

    if (urgentAssignment) {
        return {
            title: `Complete ${urgentAssignment.title}`,
            priority: "HIGH",
            reason: "This assignment has a very close deadline."
        };
    }

    // 2. Critical attendance
    const criticalAttendance = attendance.find(
        subject => subject.status === "CRITICAL"
    );

    if (criticalAttendance) {
        return {
            title: `Attend ${criticalAttendance.subject} classes`,
            priority: "HIGH",
            reason: "Your attendance is critically low."
        };
    }

    // 3. Exam warning
    const examWarning = exams.find(
        exam => exam.readiness === "CRITICAL"
    );

    if (examWarning) {
        return {
            title: `Prepare for ${examWarning.subject} exam`,
            priority: "HIGH",
            reason: "Your exam is approaching and preparation is low."
        };
    }

    // 4. Nothing urgent
    return {
        title: "Continue your study plan",
        priority: "LOW",
        reason: "There are no urgent academic tasks."
    };
}

module.exports = {
    getNextBestAction
};