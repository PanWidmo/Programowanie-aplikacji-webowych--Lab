import {IAppStorage} from "./IAppStorage";
export class App {
    boxNumber: number = 0;
    notes: IAppStorage[] = [];

    constructor() {
        this.onClickButton();

        //this.fetchFromStorage();
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

    async addNewNote(){
        const noteTitle = <HTMLInputElement>document.getElementById('title');
        const title = noteTitle.value;
        const noteDescription = <HTMLInputElement>document.getElementById('description');
        const description = noteDescription.value;
        const colorName= <HTMLSelectElement>document.getElementById('color');
        const color = colorName.value;

        const object: IAppStorage = {
            id: this.boxNumber+1,
            title: title,
            description: description,
            color: color,
            date: new Date().toDateString(),
            isPinned: false,
        }

        this.saveData(object);

    }

    saveData(addNewNote: any) {
        this.boxNumber++;
        this.notes.push(addNewNote);
        localStorage.setItem("note"+this.boxNumber, JSON.stringify(addNewNote));
        const result = JSON.parse(localStorage.getItem("note"+this.boxNumber));
        console.log(result);
    }


    fetchNotesFromStorage(){


    }


}