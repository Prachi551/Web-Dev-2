const newParagraph=document.createElement("p");
newParagraph.textContent="This is a new paragraph added to the container.";
console.log(newParagraph);


// Append the new element to the container
const container=document.getElementById("container");
container.appendChild(newParagraph);


// const rev = document.querySelector("#container p");
// rev.remove();

document.querySelector("#container p").remove();

const image = document.createElement("img");
image.setAttribute("src","https://i.pinimg.com/236x/c0/d8/0a/c0d80a5d314d69658afa0e82a0d9357b.jpg");
image.setAttribute("alt","KR MANGALAM");

const gallery=document.getElementById("gallery");
gallery.appendChild(image);

let date= new Date()
console.log(date);

setInterval(()=>{
    let date= new Date()
    console.log(date);

    let hour=date.getHours();
    let min=date.getMinutes();
    let second=date.getSeconds();
    let clock=document.getElementById("digi-clock");
    clock.textContent=`${hour} : ${min} : ${second}`;

},1000);    






