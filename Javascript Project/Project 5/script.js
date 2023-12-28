const boxes = document.querySelectorAll(".box");

window.addEventListener("scroll", checkBoxes);

checkBoxes();
function checkBoxes(){
    const triggerdBottom = window.innerHeight/5*3;


    boxes.forEach((box) =>{
        boxTop =box.getBoundingClientRect().top;

        if (boxTop< triggerdBottom) {
            box.classList.add("show");
        }else{
            box.classList.remove("show");
        }

    })


    console.log(triggerdBottom);
    console.log(boxTop);



}
