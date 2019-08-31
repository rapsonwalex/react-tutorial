// function Car(){}
//     var car = new Car();

// Car.prototype.status ='New';
// Car.prototype.wheels = 4;
// Car.prototype.avail = function(){
//     console.log('available')
// }

// var ford = new Car();

// console.log(ford.__proto__)

class Car {
    constructor(){
        this.condition = 'New';
        this.wheels = '4';
        this.avail = ()=>{
console.log('avail')
        }
    }
    otherfunction(){
        console.log('hey')
    }
}

class Ford extends Car {
    constructor(){
        super();
    }

}

const car = new Car();
const ford = new Car();

ford.color = 'red';
console.log(ford)