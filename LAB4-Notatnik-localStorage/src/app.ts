import {IAppStorage} from "./IAppStorage";
export class App {
    noteNumber: number = 0;
    notes: IAppStorage[] = [];

    constructor() {
        this.onClickButton();
        this.fetchNotesFromStorage();
    }

    //dodanie notatki przez button lub enter
    onClickButton(){
        const addByBtn = <HTMLInputElement>document.getElementById('addBtn');
        addByBtn.addEventListener('click', (ev:Event) => this.addNewNote());

        const addByEnter = document.body;
        addByEnter.addEventListener('keydown', (ev:KeyboardEvent) => {
            if(ev.key === 'Enter'){
                this.addNewNote();
            }
        });
    }

    //szkielet notatki
    async addNewNote(){
        const noteTitle = <HTMLInputElement>document.getElementById('title');
        const title = noteTitle.value;
        const noteDescription = <HTMLInputElement>document.getElementById('description');
        const description = noteDescription.value;
        const colorName= <HTMLSelectElement>document.getElementById('color');
        const color = colorName.value;

        const object: IAppStorage = {
            id: this.noteNumber+1,
            title: title,
            description: description,
            color: color,
            date: new Date().toDateString(),
            isPinned: false,
        }

        this.saveData(object);

    }

    //zapis do localStorage
    saveData(addNewNote: any) {
        this.noteNumber++;
        this.notes.push(addNewNote);
        localStorage.setItem("note"+this.noteNumber, JSON.stringify(addNewNote));
        //sprawdzanie
        const result = JSON.parse(localStorage.getItem("note"+this.noteNumber));
        console.log(result);
    }

    //wyciaganie z localStorage
    fetchNotesFromStorage(){
        const notesInStorage = localStorage.length;

        for (let i = 1; i < notesInStorage; i++) {
            localStorage.getItem("notes" +i);
            this.addNewNote();
        }


    }


}