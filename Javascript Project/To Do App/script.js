const input = document.getElementById("input");
const addBtn = document.getElementById("addBtn");
const taskList = document.querySelector(".taskList");
const task = document.querySelector("li .task");
const bottomSection = document.querySelector(".bottomSection");
const err = document.getElementById("err");

window.onload= ()=>{
    input.focus();
}

let addTask = addBtn.onclick = ()=>{
    if (input.value == "") {
        err.style.display="block";
        bottomSection.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        setTimeout(()=>{
            err.style.display="none";
        },2000);
    }else{

        err.style.display="none";

        let li =document.createElement(`li`);

        li.innerHTML= `
        <div class="task"><i class="fa-solid fa-check"></i><span contenteditable>${input.value.trim()}</span></div>
                <div class="actionBtn">
                    <button class="dltTask" onclick="done()">
                        <i class="fa-solid fa-check"></i>
                    </button>
                    <button class="dltTask" onclick="dlt()"">
                    <i class="fa-solid fa-trash"></i>
                    </button>
                </div>
            `
        taskList.appendChild(li);
    
        input.value="";

        bottomSection.scrollTo({
            top: bottomSection.scrollHeight,
            behavior: 'smooth'
        });

        input.focus();

        saveData();
    }
};

input.addEventListener("keypress", (event)=>{
    if (event.key == "Enter") {
        addTask()
    }
})

let done = ()=>{
    let element =  document.activeElement;
   element.parentElement.parentElement.classList.toggle("done");
    element.firstChild.nextSibling.classList.toggle("fa-circle-xmark");
    let x = element.parentElement.previousSibling.previousSibling.lastChild

    if (x.hasAttribute("contenteditable")) {
        x.removeAttribute("contenteditable");
    }else{
        x.setAttribute("contenteditable", "true")
    }

    saveData()
}

let dlt = ()=>{
    document.activeElement.parentElement.parentElement.remove();
    saveData()
}

function saveData(){
    localStorage.setItem("data", taskList.innerHTML)
}

function showData(){
    taskList.innerHTML = localStorage.getItem("data");
}

showData();