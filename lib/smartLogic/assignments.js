function getAssignmentPriority(daysLeft) {
    if (daysLeft <= 1) {
        return "HIGH";
    }

    if (daysLeft <= 3) {
        return "MEDIUM";
    }

    return "LOW";
}


function analyzeAssignment(assignment) {
    const priority = getAssignmentPriority(assignment.daysLeft);

    return {
        title: assignment.title,
        subject: assignment.subject,
        daysLeft: assignment.daysLeft,
        priority: priority
    };
}


module.exports = {
    getAssignmentPriority,
    analyzeAssignment
};