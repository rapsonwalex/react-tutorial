const channels = [
    {name:'HBO',premium:true},
    {name:'LIFE',premium:false},
    {name:'MAX',premium:true},
    {name:'COOKING CHANNEL',premium:false},
    {name:'WOBI',premium:false},

]
 
const premium = channels.filter(function(channel){
    return channel.premium
})

console.log(premium)