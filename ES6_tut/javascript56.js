function hey(){
    console.log('hey')
}

function args(...args){
    // const arguments = [arg1,arg2,arg3]
    console.log(`My name is ${args[0]}, i am ${args[1]}, my eyes are ${args[2]}`)
}

args("Bello","20", "green")