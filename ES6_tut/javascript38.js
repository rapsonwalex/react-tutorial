const previous = 200;

const current = [
    {expense:'Guiter', amount:200},
    {expense:'Mic', amount:100},
    {expense:'Starp', amount:100},
]

const results = current.reduce(function(sum,expense){
    return sum + expense.amount
},previous)

console.log(results)