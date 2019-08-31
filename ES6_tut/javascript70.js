const url = 'https://jsonplaceholder.typicode.com/posts/1';

fetch(url)
.then(Response => Response.json())
.then(data => console.log(data))
.catch(error => console.log('fuck up', error))