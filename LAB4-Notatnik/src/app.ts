import {Note} from './note';
import {Notes} from './notes';
export class App {

    constructor(){
        this.fetchNotes();
        this.newNote();
    }

    async fetchNotes(){
        const tmp = new Notes();
        tmp.notesFromLocalStorage();
    }

    newNote(){
        const tmp = new Note();

        const addByBtn = <HTMLInputElement>document.getElementById('addBtn');
        addByBtn.addEventListener('click', (ev:Event) => tmp.newNote());

        const addByEnter = document.body;
        addByEnter.addEventListener('keydown', (ev:KeyboardEvent) => {
            if(ev.key === 'Enter'){
                tmp.newNote();
            }
        });


    }




}