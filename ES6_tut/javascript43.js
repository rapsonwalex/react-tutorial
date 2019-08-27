const computers =[
    {type:"Laptop",price:124, os:'windows'},
    {type:"Desk",price:124, os:'Mac'},
    {type:"Desk",price:124, os:'windows'},
    {type:"Laptop",price:124, os:'Mac'},
    {type:"Laptop",price:124, os:'windows'},
];

let osTypes = computers.reduce(function(start, item){
    
    return item.os === 'Mac'? {mac:start.mac +1,windows:start.windows}:
    {mac:start.mac,windows:start.windows +1}

    // if(item.os === 'Mac'){
    //     return {mac:start.mac +1,windows:start.windows}
    // }else{
    //     return {mac:start.mac,windows:start.windows +1}
    // }

},{mac:0,windows:0})

console.log(osTypes)