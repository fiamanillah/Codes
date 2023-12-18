const loadText = document.querySelector(".loading-text");
const bg = document.querySelector(".bg");


load = 0;

let int = setInterval(blurring, 30);

function blurring(){
    load++;
    if (load<100) {
        clearInterval(int);
    }
    
}