const trips =[
    {to:"Brazil",distance:1000},
    {to:"China",distance:2500},
    {to:"India",distance:3000},
]

const totalDistance = trips.reduce(function(sum,trip){
    return sum + trip.distance

},0)

console.log(totalDistance)