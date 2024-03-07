
// // Cursor code
// const cursorDot1 = document.querySelector(".cursorDot1");
// const cursorOutline1 = document.querySelector(".cursorOutline1");


// window.addEventListener('mousemove', (e)=>{
//     const posX = e.clientX;
//     const posY = e.clientY;

//     cursorDot1.style.left = `${posX}px`;
//     cursorDot1.style.top = `${posY}px`;
//     cursorOutline1.animate({
//         left: `${posX}px`,
//         top: `${posY}px`
//     },{duration: 500, fill: "forwards"})
    
// })


// window.addEventListener("click", (e)=>{
//     const body = document.querySelector("body");
//     const cursorClickDiv = document.createElement("div");
//     cursorClickDiv.classList.add("cursorClickEffect1");
//     cursorClickDiv.style.left = `${e.clientX}px`
//     cursorClickDiv.style.top = `${e.clientY}px`
//     body.appendChild(cursorClickDiv);
//     setTimeout(()=>{
//         cursorClickDiv.remove();
//     }, 500)


// })











// const projectNextBtn = document.querySelectorAll(".nextBtn");
// const projectPrevBtn = document.querySelectorAll(".prevBtn");
// const projectListItem = document.querySelectorAll(".projectListItem");

// // console.log(projectNextBtn);
// // console.log(projectListItem);

// projectNextBtn.forEach((item, index)=>{
//     item.addEventListener("click", ()=>{
//         console.log(item);


//         if (index === projectNextBtn.length-1) {
//             projectListItem[index].classList.remove("active");
//             projectListItem[0].classList.add("active")

//         } else {
//             projectListItem[index].classList.remove("active");
//             projectListItem[index+1].classList.add("active")
//         }


//     })


// })


// projectPrevBtn.forEach((item, index)=>{
//     item.addEventListener("click", ()=>{
//         if (index === 0) {
//             projectListItem[0].classList.remove("active");
//             projectListItem[projectListItem.length-1].classList.add("active");
//         } else {
//             projectListItem[index].classList.remove("active");
//             projectListItem[index-1].classList.add("active")
//         }
//     })
// })






const projectListItems = document.querySelectorAll(".projectListItem");



projectListItems[localStorage.getItem("itemno")].classList.add("active");