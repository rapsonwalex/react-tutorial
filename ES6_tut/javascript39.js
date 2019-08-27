const users =[
    {name:"Feancis",lastname:"Noton",age:25},
    {name:"Feancis",lastname:"Noton",age:25},
    {name:"Feancis",lastname:"Noton",age:25},
]

const name = users.reduce(function(start,user){
    start.push(user.name)

    return start;

},[])

console.log(name)