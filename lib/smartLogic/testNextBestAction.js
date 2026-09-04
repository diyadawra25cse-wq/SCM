const { getNextBestAction } = require("./nextBestAction");

const attendance = [
    {
        subject: "DBMS",
        status: "CRITICAL"
    }
];

const assignments = [
    {
        title: "OS Assignment",
        priority: "HIGH"
    }
];

const exams = [
    {
        subject: "Java",
        readiness: "CRITICAL"
    }
];

const result = getNextBestAction(
    attendance,
    assignments,
    exams
);

console.log(result);