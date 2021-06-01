import {App} from './app';
import {AppStorage} from './appStorage';
import {IAppStorage} from './IAppStorage'
import {Notes} from './notes';
export class Note{

    newNote(){
        const tmp = new AppStorage();

        const noteTitle = <HTMLInputElement>document.getElementById('title');
        const title = noteTitle.value;
        const noteDescription = <HTMLInputElement>document.getElementById('description');
        const description = noteDescription.value;
        const colorName= <HTMLSelectElement>document.getElementById('color');
        const color = colorName.value;

        //tworzenie szkieletu
        const noteBox = document.createElement('div');
        noteBox.className = 'noteBoxClass'
        noteBox.setAttribute("id","noteBoxId");
        const noteBoxTitle = document.createElement('h1');
        const noteBoxDescription = document.createElement('p');

        //uzupelnienie szkieletu danymi
        noteBoxTitle.innerHTML = title;
        noteBoxDescription.innerHTML = description;
        //tu dodac jeszcze kolor

        //wrzucenie szkieletu z danymi na strone
        const space = document.getElementById('notes');
        space.appendChild(noteBox);
        noteBox.appendChild(noteBoxTitle);
        noteBox.appendChild(noteBoxDescription);

        tmp.addNewNote();
        console.log("Added");

    }


}