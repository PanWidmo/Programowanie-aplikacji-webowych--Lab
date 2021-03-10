/*
class StartApp{
    containerDomElement: Element;

    constructor(containerDOMElement : Element){
        if(!containerDOMElement){
            throw new Error ("musisz podac pojemnik dla programy StartApp");
        }
        this.containerDomElement=containerDOMElement;
        this.stworzUI();
    }

    startApp():void{
        this.ui=new UIEvent(this.containerDomElement);
        this.stats = new Statystyka();
    }
}


class UI{
//wyswietla
}

class Statystyka{
//liczy
}

const startapp= new StartApp(document.body);
*/
var header = document.createElement('h1');
header.innerHTML = "Hellow WORLD";
document.body.appendChild(header);
/*
let value1:string;
let value2:string;
let value3:string;
let value4:string;

const w1 = document.querySelector('input1');
const w2 = document.querySelector('#input2');
const w3 = document.querySelector('#input3');
const w4 = document.querySelector('#input4');

value1=(w1 as HTMLInputElement).value;
value2=(w2 as HTMLInputElement).value;
value3=(w3 as HTMLInputElement).value;
value4=(w4 as HTMLInputElement).value;

function suma(a:number,b:number,c:number,d:number){
    return a+b+c+d;
}

let sumaInput= suma(parseInt(value1),parseInt(value2),parseInt(value3),parseInt(value4));

const output=document.createElement('h1');
output.innerText=String(sumaInput);

console.log(sumaInput);
*/ 
