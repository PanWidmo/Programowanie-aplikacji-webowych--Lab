import {App} from './app';
import {AppStorage} from './appStorage';
import {IAppStorage} from './IAppStorage';
export class Notes{

    notesFromLocalStorage(){
        const tmp = new AppStorage();
        const x = tmp.fetchDataFromLocalStorage();

        for(let i = 0; i < x.length; i++){
        //tworzenie szkieletu
        const noteBox = document.createElement('div');
        noteBox.className = 'noteBoxClass'
        noteBox.setAttribute("id","noteBoxId" + x[i].id);
        const noteBoxTitle = document.createElement('h1');
        const noteBoxDescription = document.createElement('h2');
        const noteBoxDate = document.createElement('p');

        //uzupelnienie szkieletu danymi
        noteBoxTitle.innerHTML = x[i].title;
        noteBoxDescription.innerHTML = x[i].description;
        noteBoxDate.innerHTML=x[i].date;
        noteBox.style.borderColor = x[i].color;

        //wrzucenie szkieletu z danymi na strone
        const space = document.getElementById('notes');
        space.appendChild(noteBox);
        noteBox.appendChild(noteBoxTitle);
        noteBox.appendChild(noteBoxDescription);
        noteBox.appendChild(noteBoxDate);

        }

    }


}