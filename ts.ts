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