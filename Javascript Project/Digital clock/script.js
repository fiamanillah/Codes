const hrs = document.getElementById('hrs');
const min = document.getElementById('min');
const sec = document.getElementById('sec');



setInterval(() => {
    let currentDate = new Date();

hrs.innerHTML= (currentDate.getHours()<10?'0':'') + currentDate.getHours();
min.innerHTML= (currentDate.getMinutes()<10?'0':'') + currentDate.getMinutes();
sec.innerHTML= (currentDate.getSeconds()<10?'0':'') + currentDate.getSeconds();


}, 1000);


