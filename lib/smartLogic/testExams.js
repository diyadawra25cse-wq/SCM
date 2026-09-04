const { getExamReadiness, analyzeExam } = require("./exams");

const exam = {
    subject: "DBMS",
    daysLeft: 3,
    preparationPercentage: 50
};

console.log(analyzeExam(exam));