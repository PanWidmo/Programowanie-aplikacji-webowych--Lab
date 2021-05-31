import {Notes} from './notes';
import {AppStorage} from './appStorage';
export class App {

    constructor(){
        this.fetchAllNotes();
        this.newNotes();
    }

    async fetchAllNotes(){
        const tmp = new Notes();
        tmp.getAllNotesFromStorage();
    }

    //przerobic tak, zeby AppStorage przechodzilo przez note.ts i tu Note import
    newNotes(){
        const tmp = new AppStorage();

        const addByBtn = <HTMLInputElement>document.getElementById('addBtn');
        addByBtn.addEventListener('click', (ev:Event) => tmp.addNewNote());

        const addByEnter = document.body;
        addByEnter.addEventListener('keydown', (ev:KeyboardEvent) => {
            if(ev.key === 'Enter'){
                tmp.addNewNote();
            }
        });
    }




}