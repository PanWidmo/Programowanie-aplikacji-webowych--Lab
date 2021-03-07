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
var value1;
var value2;
var value3;
var value4;
var w1 = document.querySelector('input1');
var w2 = document.querySelector('#input2');
var w3 = document.querySelector('#input3');
var w4 = document.querySelector('#input4');
value1 = w1.value;
value2 = w2.value;
value3 = w3.value;
value4 = w4.value;
function suma(a, b, c, d) {
    return a + b + c + d;
}
var sumaInput = suma(parseInt(value1), parseInt(value2), parseInt(value3), parseInt(value4));
var output = document.createElement('h1');
output.innerText = String(sumaInput);
console.log(sumaInput);
