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
    constructor(status,wheels,avail){
        this.status = status;
        this.wheels = wheels;
        this.avail = avail;

    }
}

const car = new Car ({
    status: 'New',
    wheels: 4,
    availa:()=>{console.log('avail')}
})

console.log(car)