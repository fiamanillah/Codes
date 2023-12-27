const PrevBtn = document.querySelector("#PrevBtn");
const nextBtn = document.querySelector("#nextBtn");

const btn = document.querySelectorAll(".btn");
const slide = document.querySelectorAll(".slide");
const sliderContainer = document.querySelector(".sliderContainer");

let slideIndex = 0;

slide[slideIndex].classList.add("active");


PrevBtn.addEventListener("click", prevSlide);
nextBtn.addEventListener("click", nextSlide);


function prevSlide(){
    slide.forEach(
        (e,i)=>{
            slide[i].classList.remove("active")
        }
    )
    slideIndex = (slideIndex=== 0) ? slide.length-1 : slideIndex-1;
    slide[slideIndex].classList.add("active");


}

function nextSlide(){
    slide.forEach(
        (e,i)=>{
            slide[i].classList.remove("active")
        }
    )
    slideIndex = (slideIndex=== slide.length-1) ? 0 : slideIndex+1;
    slide[slideIndex].classList.add("active");


}


btn.forEach(
    (item,index)=>{
        item.addEventListener("click", 
        (e)=>{

            
            slide.forEach(
                (e,i)=>{
                    slide[i].classList.remove("active")
                }
            )
            slide[index].classList.add("active");
            sliderContainer.style.transform= `scale(1)`;
        }
        )
    }
)



