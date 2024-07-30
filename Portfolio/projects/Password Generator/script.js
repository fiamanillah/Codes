const range = document.getElementById("range")
const passLength = document.getElementById("passLength");
const input = document.getElementById("input");
const copyIcon = document.getElementById("copyIcon");
const upperCase = document.getElementById("upperCase");
const lowerCase = document.getElementById("lowerCase");
const number = document.getElementById("number");
const symbol = document.getElementById("symbol");
const btn = document.getElementById("btn");

passLength.innerHTML = range.value
range.oninput = ()=>{
    passLength.innerHTML = range.value
}

btn.onclick=()=>{
    input.value= genPassword();
}

let upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerChars = "abcdefghijklmnopqrstuvwxyz";
let allNumbers = "0123456789"
let allSymbols = `"~!@#$%^&*()_+:"|?><allNumbers,./;']["`


genPassword=()=>{
    let password = "";
    let allChars = "";

    allChars += upperCase.checked ? upperChars : "";
    allChars += lowerCase.checked ? lowerChars : "";
    allChars += number.checked ? allNumbers : "";
    allChars += symbol.checked ? allSymbols : "";

    let i = 1
    while (i <= range.value) {
        password += allChars.charAt(Math.floor(Math.random() * allChars.length));
        i++
    }
    return password;
}

copyIcon.onclick=()=>{
    
    if (input.value != "" || input.value.length >= 1) {
        navigator.clipboard.writeText(input.value);
        copyIcon.innerHTML= "check"
        setTimeout(() => {
            copyIcon.innerHTML= "content_copy"
        }, 3000);
    }
    
}