const channels = [
    {name:'HBO',premium:true},
    {name:'LIFE',premium:false},
    {name:'MAX',premium:true},
    {name:'COOKING CHANNEL',premium:false},
    {name:'WOBI',premium:false}
];
 
const user = {
    name:'Francis',
    premium:true,
    premiumChannels:function(){
        const $this = this;
        return channels.filter(function(channel){
            return channel.premium && $this.premium
        })
    },
    channels:function(){
        return channels.filter(function(channel){
            return channel.premium == false;
        })
    }

}
console.log(user.premiumChannels())
console.log(user.channels())