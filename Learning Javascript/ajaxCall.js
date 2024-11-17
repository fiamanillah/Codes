let request = fetch("https://restcountries.com/v3.1/name/bd").then((a)=>{
    return a.json();
}).then((data)=>{
    console.log(data);
    
})


// new XMLHttpRequest();
// request.open("GET", "https://restcountries.com/v3.1/name/bd");
// request.send();


// request.addEventListener("load", function(){
//     let [data] = JSON.parse(this.responseText);
//     console.log(data);
    
// })