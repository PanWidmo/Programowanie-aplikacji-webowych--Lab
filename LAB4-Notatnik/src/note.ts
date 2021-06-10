import {AppStorage} from './appStorage';
export class Note{

    async newNote(){
        const tmp = new AppStorage();

        tmp.addNewNote();
    }

}