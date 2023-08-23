const input = document.querySelector(".input")
const btn  = document.querySelectorAll("button");

let inputValue = "";
arr = Array.from(btn);
arr.forEach( x => {
    x.addEventListener('click', (e)=>{
        if (e.target.innerHTML == ' = ' ) {
            inputValue = eval(inputValue);
            input.value = inputValue;
        }else if(e.target.innerHTML == 'AC'){
            inputValue = '';
            input.value = inputValue;
        }else if(e.target.innerHTML == 'Del'){
            inputValue = inputValue.substring(0, inputValue.length -1);
            input.value = inputValue;
        }
        else{
            inputValue += e.target.innerHTML;
            input.value = inputValue;
        }      
    })
});