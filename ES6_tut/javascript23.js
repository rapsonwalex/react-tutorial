const users = [
    {user:'Bello Adewale',age:32,eyes:'brown'},
    {user:'Salami Dare',age:20,eyes:'blue'},
    {user:'Ajiga Olugbenga',age:40,eyes:'brown'},
];

const listOfUsers = users.map(function(user){
    return user.user
})

console.log(listOfUsers);

listOfUsers.forEach(function(name){
    const select = document.querySelector('select')

    select.insertAdjacentHTML("afterbegin",`<option value="${name}">${name}</option>`)
});