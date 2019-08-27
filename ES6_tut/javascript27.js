const cars = [
    {name:'Ford', price:200},
    {name:'Nissan', price:400},
    {name:'Nissan', price:600},
]

function convertPrice(price){
    return price * 17.5;
}

const price = cars.map(function(car){
    return `The ${car.name} is ${convertPrice(car.price)} Ars`;
})

console.log(price)