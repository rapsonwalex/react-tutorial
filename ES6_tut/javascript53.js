function randonBrand(){
    const brands = ['ford', 'nissan', 'bnw']
    return brands[Math.floor(Math.random() * brands.length)]
}

function cars(brand = randonBrand()){
    // if(!brand){
    //     brand = "Ford"
    // }
    console.log(`My brand is ${brand}`)
}

cars()