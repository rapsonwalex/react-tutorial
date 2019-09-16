let superHeroe = new Map();

superHeroe.set('Batman',{
    realName:'Bruce Wayne',
    power:'Millonaire',
    weakness:'None'
})

superHeroe.set('Superman',{
    realName:'clark kent',
    power:'All',
    weakness:'Not having power'
})

// for(let [key, value] of superHeroe){
//     console.log(key)
//     console.log(value)
// }

// superHeroe.forEach((value,key)=>{
//     console.log(key)
//     console.log(value)
// })

// console.log(Array.from(superHeroe.keys()));
// console.log(Array.from(superHeroe.values()));

let names = Array.from(superHeroe.values()).map(item =>{
   return item.realName
})

console.log(names)