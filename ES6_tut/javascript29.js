const products = [
    {name:'ipad', category:'Devices', number:20, price:200},
    {name:'Sony 3d', category:'TV', number:0, price:400},
    {name:'E256', category:'Blender', number:3, price:50},
    {name:'Super Vision', category:'TV', number:7, price:500},
    {name:'Iphone 7', category:'phones', number:40, price:2},
]
 
const result = products.filter(function(product){
    return product.category === 'TV' && product.number > 0
})

console.log(result)