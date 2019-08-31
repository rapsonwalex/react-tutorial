// const users = [
//     {name:"Bello",lastname:"Adewale",age:25},
//     {name:"Ajiga",lastname:"Olugbenga",age:40},
//     {name:"Salami",lastname:"Dare",age:16}

// ];


// const[{lastname}] = users;
// console.log(lastname) 

const users = {
    names:['francis','martha','ray']  
}

const {names:[name1,name2]} = users;
console.log(name2)