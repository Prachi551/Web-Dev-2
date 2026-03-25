async function getData(){
    try{
 const response = await fetch ('https://jsonplaceholder.typicode.com/posts');
 const data = await response.json();
 console.log(data);
    }catch (err){
        console.log(err);
    }
}
getData();



