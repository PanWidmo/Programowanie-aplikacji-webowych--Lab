import { IAppStorage } from '../src/IAppStorage';
import { AppFirebaseStorage } from '../src/appFirebaseStorage';

describe('firebase', () => {

    const notatka: IAppStorage = {
    id: 11,
    title: "title",
    description: "asdasd",
    color: "red",
    date: "10 may 2021",
    isPinned: false
    }

    it('Test', () => {

        const tmp = new AppFirebaseStorage;
        tmp.addNote(notatka);


        const ret =  tmp.getNote("asdasd");
        expect(ret).toBe(notatka);
    })
});