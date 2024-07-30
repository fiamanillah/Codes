

// 'use strict';

import{generateID} from "./utils.js";

let noteKeeperDB = {};


let init = ()=>{

    const db = localStorage.getItem('noteKeeperDB');

    if (db) {
        noteKeeperDB = JSON.parse(db)
    } else {
        noteKeeperDB.notebook = [];
        localStorage.setItem('noteKeeperDB', JSON.stringify(noteKeeperDB))
    }
}

init();

const readDB = ()=>{
    noteKeeperDB = JSON.parse(localStorage.getItem('noteKeeperDB'));
}

const writeDB = ()=>{
    localStorage.setItem('noteKeeperDB', JSON.stringify(noteKeeperDB))
}


export let db = {
    post: {
        notebook(name){
            readDB();
            const noteBookData = {
                id: generateID(),
                name,
                note: []
            }
            console.log(noteBookData)
            writeDB();
        }
    }

};
