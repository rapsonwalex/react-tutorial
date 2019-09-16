const stores = {
    store1:'New York',
    store2:'India',
}

const car = {
    id:1,
    brand:'Ford',
    wheels:4,
    color:'red',
    year:2017,
    model:'Mustang',
    stores:stores
}

function *storesGenerator(storesObj){
    yield storesObj.store1;
    yield storesObj.store2;

}

function *carsGenerator(carObj){
    yield carObj.brand;
    yield carObj.year;
    yield carObj.model;
    yield* storesGenerator(carObj.stores)
}

let newCar = [];
for(let i of carsGenerator(car)){
    newCar = [...newCar, i]
}
 
console.log(newCar)