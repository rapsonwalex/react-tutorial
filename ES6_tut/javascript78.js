function *brands(){

    yield 'Ford';
    yield 'Nissan';
    yield 'Chevy';
    yield 'Toyota';
    yield 'Honda';
}

const gen = brands();

// console.log(gen.next())
// console.log(gen.next())
// console.log(gen.next())
// console.log(gen.next())
// console.log(gen.next())

let array = [];
for (var i of brands()){
    // array.push(i)

  array = [...array,i]
}

console.log(array)
