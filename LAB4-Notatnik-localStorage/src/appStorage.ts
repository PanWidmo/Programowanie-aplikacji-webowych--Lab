import {IAppStorage} from "./IAppStorage";
export class AppStorage{
    notes: IAppStorage[] = [];

    // constructor() {
    //     this.onClickButton();
    //     this.fetchNotesFromStorage();
    // }

    //dodanie notatki przez button lub enter
    // onClickButton(){
    //     const addByBtn = <HTMLInputElement>document.getElementById('addBtn');
    //     addByBtn.addEventListener('click', (ev:Event) => this.addNewNote());

    //     const addByEnter = document.body;
    //     addByEnter.addEventListener('keydown', (ev:KeyboardEvent) => {
    //         if(ev.key === 'Enter'){
    //             this.addNewNote();
    //         }
    //     });
    // }

    //szkielet notatki
    async addNewNote(){
        const noteTitle = <HTMLInputElement>document.getElementById('title');
        const title = noteTitle.value;
        const noteDescription = <HTMLInputElement>document.getElementById('description');
        const description = noteDescription.value;
        const colorName= <HTMLSelectElement>document.getElementById('color');
        const color = colorName.value;

        const x= this.localStorageLength();
        console.log(x);

        const object: IAppStorage = {
            id: x,
            title: title,
            description: description,
            color: color,
            date: new Date().toDateString(),
            isPinned: false,
        }

        this.saveDataToLocalStorage(object);

    }

    //zapis do localStorage
    saveDataToLocalStorage(addNewNote: any) {
        this.notes.push(addNewNote);
        localStorage.setItem("note"+this.localStorageLength(), JSON.stringify(addNewNote));
        //sprawdzanie
        // const result = JSON.parse(localStorage.getItem("note"+this.noteNumber));
        // console.log(result);
    }

    //wyciaganie z localStorage
    fetchDataFromLocalStorage(){
        const notesInStorage = localStorage.length;

        for (let i = 1; i < notesInStorage; i++) {
            localStorage.getItem("note" +i);
            this.addNewNote();
        }
    }

    //sprawdzanie ilosci elementow w tablicy
    localStorageLength(){
        const items = localStorage.length;
        if(items == 0 ){
            return 1;
        }
        else return items+1;
    }

}