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
        noteBox.setAttribute("id","note" + x[i].id);
        const noteBoxTitle = document.createElement('h1');
        const noteBoxDescription = document.createElement('p');
        const noteBoxDate = document.createElement('p');
        const noteDeleteBtn = document.createElement('input');
        noteDeleteBtn.setAttribute("type", "button")
        noteDeleteBtn.setAttribute("value", "Remove");
        noteDeleteBtn.setAttribute("id", "deleteBtn"+x[i].id);
        const notePinBtn = document.createElement('input');
        notePinBtn.setAttribute("type", "button");
        notePinBtn.setAttribute("value", "Pin");
        notePinBtn.setAttribute("id", "pinBtn"+x[i].id);

        noteDeleteBtn.addEventListener('click', (ev:Event) => {
            const btnId = ((ev.target as Element).id).replace("deleteBtn",'');
            const notes2: IAppStorage[] = [];
            const a = JSON.parse(localStorage.getItem("note"));

            a.map((x:any) =>{
                if(x.id == btnId){

                }
                else {
                    notes2.push(x);
                }
            })
            if(a.length === 1){
                localStorage.removeItem("note");
                const notesDiv = document.getElementById('notes');
                notesDiv.innerHTML = "";
            }
            else {
                const notesDiv = document.getElementById('notes');
                notesDiv.innerHTML = "";

                localStorage.setItem("note",JSON.stringify(notes2));
                this.notesFromLocalStorage();
            }
        })

        notePinBtn.addEventListener('click', (ev:Event) => {

            // wziete z deleteBtn
            const btnId = ((ev.target as Element).id).replace("pinBtn",'');
            const notes2: IAppStorage[] = [];
            const a = JSON.parse(localStorage.getItem("note"));

            a.map((x:any) =>{
                if(x.id == btnId){

                }
                else {
                    notes2.push(x);
                }
            })
            if(a.length === 1){
                localStorage.removeItem("note");
                const notesDiv = document.getElementById('notes');
                notesDiv.innerHTML = "";
            }
            else {
                const notesDiv = document.getElementById('notes');
                notesDiv.innerHTML = "";

                localStorage.setItem("note",JSON.stringify(notes2));
                this.notesFromLocalStorage();
            }

            //old
            // if(x[i].isPinned === true){
            //     console.log("z pin do notes");
            //     const space = document.getElementById('notes');
            //     space.appendChild(noteBox);
            //     const btn = document.getElementById("pinBtn"+x[i].id);
            //     btn.setAttribute("value", "Pin");

                //x[i].isPinned.innerHTML = true;
            // }
            // else {
            //     console.log("z notes do pin");
            //     const space = document.getElementById('pinnedNotes');
            //     space.appendChild(noteBox);
            //     const btn = document.getElementById("pinBtn"+x[i].id);
            //     btn.setAttribute("value", "Unpin");

                //x[i].isPinned.innerHTML = false;
            // }
        })

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
        noteBox.appendChild(noteDeleteBtn);
        noteBox.appendChild(notePinBtn);

        }

    }


}