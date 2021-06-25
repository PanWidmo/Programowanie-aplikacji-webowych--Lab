import {TestJest} from '../src/testJest';
import { IAppStorage } from '../src/IAppStorage';
import { AppFirebaseStorage } from '../src/appFirebaseStorage';

describe('Calculate Tests', () => {
    const calculate = new TestJest();

    it('Sum Function', () => {
        const a = 5;
        const b = 5;

        const tmp = calculate.sumFunction(a,b);
        expect(tmp).toBe(10);
    });
    it('Diff Function', () => {
        const a = 10;
        const b = 2;

        const tmp = calculate.diffFunction(a,b);
        expect(tmp).toBe(8);
    });
    it('Division Function', () => {
        const a = 10;
        const b = 5;
        const tmp = calculate.divisionFunction(a,b);
        expect(tmp).toBe(2);
    });
    it('Multiplication Function', () => {
        const a= 3 ;
        const b = 3;
        const tmp = calculate.multiplicationFunction(a,b);
        expect(tmp).toBe(9);
    });
    it('Equal Check Function', () => {
        const a = 1;
        const b = 2;
        const tmp = calculate.isEqualFunction(a,b);
        expect(tmp).toBe(false);
    })
})


//old
// describe('firebase', () => {

//     const notatka: IAppStorage = {
//     id: 11,
//     title: "title",
//     description: "asdasd",
//     color: "red",
//     date: "10 may 2021",
//     isPinned: false
//     }

//     it('Test', () => {

//         const tmp = new AppFirebaseStorage;
//         tmp.addNote(notatka);


//         const ret =  tmp.getNote("asdasd");
//         expect(ret).toBe(notatka);
//     })
// });