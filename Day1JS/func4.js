const student = {sid:12,sname:"Indra",sfees:5850.45};

let student_id = student.sid;
let student_name = student.sname;
let student_fee = student.sfees;

console.log("---Student Details---");
console.log(student_id,"|",student_name,"|",student_fee);

// using destructuring
const {sid,sname,sfees} = student;
console.log(sid,"|",sname,"|",sfees);
