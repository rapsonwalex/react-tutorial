//unresolve, pending
// resolved, fulfiled
// regected

let promise = new Promise((resolved, rejected)=>{

setTimeout(()=>{
    rejected();
},5000)

})

console.log(promise);

promise
.then(()=>console.log('finished'))
.then(()=>console.log('finished 2'))
.catch(()=>console.log('asshole'))