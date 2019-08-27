const cars = {
    brand:['Ford', 'Audi', 'BMW'],
    category:'Sport car',
    message:function(){
        return this.brands.map((brand) => {
            console.log(`${brand} is a ${this.category}`)
        })
    }
}

cars.message();