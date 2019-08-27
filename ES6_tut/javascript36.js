const students = [
    {name:"Francis", grade:4},
    {name:"Martin", grade:7},
    {name:"Martha", grade:7},
]

let allStudentPassTheCourse = students.every(function(student){
    return student.grade >=6
})
console.log(allStudentPassTheCourse)