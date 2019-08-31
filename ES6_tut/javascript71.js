const url = 'https://jsonplaceholder.typicode.com/posts/';

fetch(url,{
    method:'POST',
    headers:{
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({title:'some dum title'}),
    mode: 'cors',
})
.then(Response => Response.json())
.then(data => console.log(data))
.catch(error => console.log('fuck up', error))