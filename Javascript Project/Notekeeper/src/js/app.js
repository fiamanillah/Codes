

'use strict';

/*<========================>
imports
<========================>*/ 

import { addEventOnElements,
    getGreetingMsg,
    activeNotebook,
    makeElemEditable
} from "./utils.js";
import { Tooltip } from "./components/Tooltip.js";
import { db } from "./db.js";



/*<========================>
MainCode
<========================>*/ 

const $sidebar = document.querySelector('[data-sidebar]');
const $sidebarTogglers = document.querySelectorAll('[data-sidebar-toggler]');
const $Overlay = document.querySelector('[data-sidebar-overlay]')


/*<======================== sidebar toggle =====================>*/ 

addEventOnElements($sidebarTogglers, 'click', ()=>{
    $sidebar.classList.toggle('active');
    $Overlay.classList.toggle('active');
})

/*<======================== Greeting Msg =====================>*/ 

const $greeting = document.querySelector('[data-greeting]');
const currentHour = new Date().getHours();

$greeting.textContent = getGreetingMsg(currentHour);

const $currentDate = document.querySelector('[data-current-date]');

$currentDate.textContent = new Date().toDateString().replace(' ', ', ');

const $toolTipEl = document.querySelectorAll('[data-tooltip]');

$toolTipEl.forEach($elem=>{Tooltip($elem)});





/*<======================== Create Notebook =====================>*/ 


const $sidebarList = document.querySelector('[data-sidebar-list]');
const $noteCreateBtn = document.querySelector('[data-add-notebook]');

const shownotebookfield = function (){
    const $navItem = document.createElement('div');

    $navItem.classList.add('nav-item');

    $navItem.innerHTML = `
    <span class="text text-label-large" data-notebook-field>
    </span>
    <div class="state-layer"></div>
    `;

    $sidebarList.appendChild($navItem);


    const $navItemField = $navItem.querySelector('[data-notebook-field]');

    activeNotebook.call($navItem)

    makeElemEditable($navItemField);

    $navItemField.addEventListener('keydown', createNoteBook)
};

$noteCreateBtn.addEventListener('click', shownotebookfield);

const createNoteBook = function (event){
    if (event.key === 'Enter') {
        event.preventDefault();
        console.log(event.key);
        db.post.notebook( this.textContent || 'Untitled');

    } else {
        
    }
};