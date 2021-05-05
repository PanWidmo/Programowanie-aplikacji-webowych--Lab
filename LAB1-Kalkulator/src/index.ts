class StatsApp{

    numberOfInputs:HTMLInputElement;
    inputsContainer: HTMLElement;
    dataArray: HTMLInputElement[]=[];
    number: number=0;
    dataSumInput:HTMLInputElement;
    dataAvgInput:HTMLInputElement;
    dataMinInput:HTMLInputElement;
    dataMaxInput:HTMLInputElement;

    constructor(){
        this.startApp();
    }

    startApp(){
        this.numberOfInputs = document.querySelector("#numberOfInputs");
        this.number = +this.numberOfInputs.value;
        this.getInput();
        this.watchInputValues();
    }

    createInput() {
        this.inputsContainer = document.getElementById("inputsContainer");
        const number = +this.numberOfInputs.value;

        while(this.inputsContainer?.hasChildNodes()){
                this.inputsContainer?.removeChild(this.inputsContainer?.lastChild);
                this.dataArray=[];
              }

        for (let i = 0; i < number; i++) {
            const newInputLabel = document.createElement("label");
            newInputLabel.innerHTML = "Value: ";
            newInputLabel.setAttribute("class", "data" + (i + 1));
            this.inputsContainer?.appendChild(newInputLabel);

            const newInput = document.createElement("input");
             newInput.setAttribute("type", "text");
            newInput.setAttribute("class", "data" + (i + 1));
            newInput.setAttribute("id","input"+(i+1));
            this.inputsContainer?.appendChild(newInput);

            const removeInputButton = document.createElement("button");
            removeInputButton.textContent = "Remove";
            removeInputButton.className = "data" + (i + 1);
            this.inputsContainer?.appendChild(removeInputButton);

            removeInputButton.addEventListener('click', (ev:Event)=> {

                    this.number= this.number-1;

                    const tmp = (ev.target as Element).className;
                    const x = this.dataArray.findIndex(x => x.className === tmp);

                    this.dataArray.splice(x,1);
                    document.querySelectorAll('.data'+(i+1)).forEach(e=>e.remove());

                    this.computeData();
            });

            const breake = document.createElement("br");
            breake.className = "data" + (i + 1);
            this.inputsContainer.appendChild(breake);

        }
        this.startApp();
      }

    getInput(){
        this.inputsContainer = document.getElementById("inputsContainer");

        if(this.inputsContainer.hasChildNodes()){
            const number = +this.numberOfInputs.value;

            for(let i=0; i<number; i++){
                const data ="#input"+(i+1);
                this.dataArray.push(document.querySelector(data));
            }
        }

        this.dataSumInput=document.querySelector('#sumInput');
        this.dataAvgInput=document.querySelector('#avgInput');
        this.dataMinInput=document.querySelector('#minInput');
        this.dataMaxInput=document.querySelector('#maxInput');
    }

    computeData(){
        const dataArray2:number[]=[];
        let sum:number=0;

        if(this.dataArray.length>0){
            for(let i=0;i<this.number;i++){
                if(!(isNaN(+this.dataArray[i].value))){
                dataArray2[i]=+this.dataArray[i].value;
                }

                else {
                    alert("Wrong data format!");
                    const tmp:string = "";
                    const a = this.dataArray[i];
                    a.value=tmp;
                    }
                }

            for(let i=0;i<dataArray2.length;i++){
                sum+=dataArray2[i];
            }

            const avg = sum/this.number;
            const max = Math.max.apply(Math, dataArray2);
            const min = Math.min.apply(Math, dataArray2);

            this.showStats(sum, avg, min, max);
        }

    else {
        const tmp:string = "";
        this.dataSumInput.value=tmp;
        this.dataAvgInput.value=tmp;
        this.dataMaxInput.value=tmp;
        this.dataMinInput.value=tmp;
        this.numberOfInputs.value=tmp;

        alert("All data removed!");
        }
    }

    showStats(sum:number, avg:number, min:number,max:number){
        this.dataSumInput.value=sum.toString();
        this.dataAvgInput.value=avg.toString();
        this.dataMinInput.value=min.toString();
        this.dataMaxInput.value=max.toString();
    }

    watchInputValues(){

        this.numberOfInputs.addEventListener('input',()=>this.createInput());

        if(this.inputsContainer.hasChildNodes()){
            for(let i=0;i<this.number;i++){
            this.dataArray[i]?.addEventListener('input',()=>this.computeData());
            }

        }
    }
}

const statsApp= new StatsApp();