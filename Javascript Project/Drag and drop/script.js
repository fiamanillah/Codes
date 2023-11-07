let lists = document.getElementsByClassName('list');
let leftbox = document.querySelector('.left');
let rightbox = document.querySelector('.right');




for(list of lists){
    list.addEventListener('dragstart', e=>{
        let selected = e.target;

        rightbox.addEventListener('dragover', e=>{
            e.preventDefault();
        })
        rightbox.addEventListener('drop', e=>{
            rightbox.appendChild(selected);
            selected= null;
        })
        leftbox.addEventListener('dragover', e=>{
            e.preventDefault();
        })
        leftbox.addEventListener('drop', e=>{
            leftbox.appendChild(selected);
            selected= null;
        })
    })
  
}

console.log(lists);
