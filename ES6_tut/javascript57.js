const brands = ["Ford", "Nissan"];
const OtherBrand = ["Audi", "BMW"];

// const newArray = brands.concat(OtherBrand);
// newArray.push('other brand')

const newArray = [...brands, ...OtherBrand, 'Other Brand'];
console.log(newArray)