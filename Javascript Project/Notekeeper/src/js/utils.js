
'use strict';


const addEventOnElements = function($elements, eventType, callback){
    $elements.forEach(element => {
        element.addEventListener(eventType, callback)
    });
}

const getGreetingMsg = (currentHour)=>{
    const greeting= 
    currentHour < 5 ? 'Night':
    currentHour < 12 ? 'Morning':
    currentHour < 15 ? 'Noon':
    currentHour < 17 ? 'Afternoon':
    currentHour < 20 ? 'Evening':
    'Night';

    return `Good ${greeting}`
}


let $lastActiveNavItem;

const activeNotebook = function(){
    $lastActiveNavItem?.classList.remove('active');
    this.classList.add('active');
    $lastActiveNavItem = this;

}

let makeElemEditable = function(element){
    element.setAttribute('contenteditable', true);
    element.focus();
};

const generateID = function (){
    return new Date().getTime().toString();
};


export{addEventOnElements,
    getGreetingMsg,
    activeNotebook,
    makeElemEditable,
    generateID
}