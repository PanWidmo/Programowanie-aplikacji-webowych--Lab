import {App} from './app';
import {AppStorage} from './appStorage';
import {IAppStorage} from './IAppStorage';
export class Notes{

    //to fix
    async getAllNotesFromStorage(){
        const data = new AppStorage();
        const x = data.fetchDataFromLocalStorage();
        //console.log(x);

    }


}