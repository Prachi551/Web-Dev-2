function getData(url){
    fetch(url) 
    .then(resp=>resp.json())
    .then(data=>console.log(data));

}
getData("https://jsonplaceholder.typicode.com/todos/1");
// asynchronisation
