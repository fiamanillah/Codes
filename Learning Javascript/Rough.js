

const p = document.getElementById("demo");



p.addEventListener("keypress", (event)=>{
    if (event.key === "Enter") {
        event.preventDefault();

      }
});

p.addEventListener("focus", ()=>{
    p.style.background = "lime"
})