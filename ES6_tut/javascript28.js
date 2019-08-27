const products = [
    {name:'ipad', category:'Devices'},
    {name:'Sony 3d', category:'TV'},
    {name:'E256', category:'Blender'},
    {name:'Super Vision', category:'TV'},
    {name:'Iphone 7', category:'phones'},
]

const result = products.filter(function(product){
    return product.category === 'TV'
})

console.log(result)