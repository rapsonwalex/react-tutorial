const students = [
    {name:"Francis", grade:4},
    {name:"Martin", grade:4},
    {name:"Martha", grade:6},
]

let allStudentPassTheCourse = students.some(function(student){
    return student.grade >=6
})
console.log(allStudentPassTheCourse)