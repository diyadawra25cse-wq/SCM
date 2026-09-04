function calculateAttendance(present, total) {
    if (total === 0) return 0;

    return Number(((present / total) * 100).toFixed(2));
}


function getAttendanceStatus(percentage) {
    if (percentage >= 75) {
        return "SAFE";
    }

    if (percentage >= 65) {
        return "WARNING";
    }

    return "CRITICAL";
}


function classesNeeded(present, total, target = 75) {
    if (total === 0) return 0;

    const currentPercentage = (present / total) * 100;

    if (currentPercentage >= target) {
        return 0;
    }

    const targetDecimal = target / 100;

    return Math.ceil(
        (targetDecimal * total - present) /
        (1 - targetDecimal)
    );
}


function attendanceAfterClass(present, total, attended) {
    if (total === 0) return 0;

    return Number(
        (((present + attended) / (total + 1)) * 100).toFixed(2)
    );
}


module.exports = {
    calculateAttendance,
    getAttendanceStatus,
    classesNeeded,
    attendanceAfterClass
};