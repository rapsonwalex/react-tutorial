const user = {
    name:"Bello",
    Lastname:"Adewale",
    age:25

};

// var name = user.name;
// var Lastname = user.Lastname;
// var age = user.age;

// const {name,Lastname,age} = user;


// console.log(name)
// console.log(Lastname)
// console.log(age)


const message = ({name,Lastname,age}, salute) => {
    console.log(`my name is ${name} ${Lastname}, age ${age} ${salute}`)
}

message(user, 'hey')
