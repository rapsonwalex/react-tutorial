const cars = [
    'camaro',
    'nova',
    'A4'
];

// const camaro = cars[0];

// const [camaro,nova,a4] = cars;
 const [camaro,...rest] = cars;

console.log(rest)