function getExamReadiness(daysLeft, preparationPercentage) {
    if (daysLeft <= 2 && preparationPercentage < 60) {
        return "CRITICAL";
    }

    if (daysLeft <= 5 && preparationPercentage < 75) {
        return "WARNING";
    }

    return "READY";
}

function analyzeExam(exam) {
    const readiness = getExamReadiness(
        exam.daysLeft,
        exam.preparationPercentage
    );

    return {
        subject: exam.subject,
        daysLeft: exam.daysLeft,
        preparationPercentage: exam.preparationPercentage,
        readiness
    };
}

module.exports = {
    getExamReadiness,
    analyzeExam
};