const {
    calculateAttendance,
    getAttendanceStatus,
    classesNeeded,
    attendanceAfterClass
} = require("./attendance");


const present = 17;
const total = 25;


const percentage = calculateAttendance(present, total);

console.log("Attendance:", percentage + "%");
console.log("Status:", getAttendanceStatus(percentage));
console.log(
    "Classes needed:",
    classesNeeded(present, total)
);
console.log(
    "After attending next class:",
    attendanceAfterClass(present, total, 1) + "%"
);