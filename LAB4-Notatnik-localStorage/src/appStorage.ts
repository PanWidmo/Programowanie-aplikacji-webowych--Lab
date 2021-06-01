import {IAppStorage} from "./IAppStorage";
export class AppStorage{
    notes: IAppStorage[] = [];

    //sprawdzanie ilosci elementow w tablicy
    localStorageLength(){
        const items = localStorage.length;
        if(items == 0 ){
            return 0;
        }
        else return items;
    }

    //szkielet notatki
    async addNewNote(){
        const noteTitle = <HTMLInputElement>document.getElementById('title');
        const title = noteTitle.value;
        const noteDescription = <HTMLInputElement>document.getElementById('description');
        const description = noteDescription.value;
        const colorName= <HTMLSelectElement>document.getElementById('color');
        const color = colorName.value;

        const x= this.localStorageLength();

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
    }

    //wyciaganie z localStorage
    fetchDataFromLocalStorage(){
        const notesInStorage = localStorage.length;
        const tab:any[] = [];

        for (let i = 1; i < notesInStorage; i++) {
            tab.push(JSON.parse(localStorage.getItem("note" +i)));
        }
        return tab;
    }



}