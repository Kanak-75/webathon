function assignGrade(marks)
{
if (marks >= 90)
{
return "Grade A";
} 
else
 {
if (marks >= 80)
{
return "Grade B";
}
else {
if (marks >= 70) {
return "Grade C";
}
else {
if (marks >= 60) 
{
return "Grade D";
}
else {
return "Fail";
}
}
}
}
}


console.log(assignGrade(94)); 
console.log(assignGrade(74)); 
console.log(assignGrade(50)); 