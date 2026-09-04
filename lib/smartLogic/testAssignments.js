const {
    getAssignmentPriority,
    analyzeAssignment
} = require("./assignments");


const assignments = [
    {
        title: "DBMS Assignment",
        subject: "DBMS",
        daysLeft: 1
    },
    {
        title: "OS Assignment",
        subject: "Operating Systems",
        daysLeft: 3
    },
    {
        title: "Java Assignment",
        subject: "Java",
        daysLeft: 7
    }
];


assignments.forEach((assignment) => {
    console.log(analyzeAssignment(assignment));
});