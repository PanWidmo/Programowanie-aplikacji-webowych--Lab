import {App} from './app';
import {AppStorage} from './appStorage';
import {IAppStorage} from './IAppStorage';
export class Notes{

    async getAllNotesFromStorage(){
        const data = new AppStorage();
        console.log(data);


    }


}