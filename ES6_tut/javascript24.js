const users = [
    {name:'Bello Adewale',age:32,eyes:'brown'},
    {name:'Salami Dare',age:20,eyes:'blue'},
    {name:'Ajiga Olugbenga',age:40,eyes:'brown'},
];

const listOfUsers = users.map(function(user){
    return `this is my name "${user.name}" i am  "${user.age}" years old`
})

console.log(listOfUsers)