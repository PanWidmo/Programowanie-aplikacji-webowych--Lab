class StatsApp{

    numberOfInputs:HTMLInputElement;
    inputsContainer: HTMLElement;
    dataArray: HTMLInputElement[]=[];
    dataSumInput:HTMLInputElement;
    dataAvgInput:HTMLInputElement;
    dataMinInput:HTMLInputElement;
    dataMaxInput:HTMLInputElement;

    constructor(){
        this.startApp();
    }

    startApp(){
        this.numberOfInputs = document.querySelector("#numberOfInputs");
        this.getInputs();
        this.watchInputValues();
    }

    createInput() {
        this.inputsContainer = document.getElementById("inputsContainer");
        const number = +this.numberOfInputs.value;

        while(this.inputsContainer?.hasChildNodes()){
                  this.inputsContainer?.removeChild(this.inputsContainer?.lastChild);
              }

        for (let i = 0; i < number; i++) {
            const newInputLabel = document.createElement("label");
            newInputLabel.innerHTML = "Value: ";
            newInputLabel.setAttribute("class", "data" + (i + 1));
            this.inputsContainer.appendChild(newInputLabel);

            const newInput = document.createElement("input");
             newInput.setAttribute("type", "text");
            newInput.setAttribute("class", "data" + (i + 1));
            newInput.setAttribute("id","input"+(i+1));
            this.inputsContainer.appendChild(newInput);

            const removeInputButton = document.createElement("button");
            removeInputButton.textContent = "Remove";
            removeInputButton.className = "data" + (i + 1);
            this.inputsContainer.appendChild(removeInputButton);
            removeInputButton.addEventListener('click', ()=> this.removeInput(i+1));

            const brake = document.createElement("br");
            brake.className = "data" + (i + 1);
            this.inputsContainer.appendChild(brake);

        }
        this.startApp();
      }

    removeInput(n:number){
       for(let i=0;i<4;i++){
       const d=document.querySelector('.data'+n);
       d.remove();
       }
       this.dataArray.splice(n-1,1);
    }

    getInputs(){
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
        const number = +this.numberOfInputs.value;

        for(let i=0;i<number;i++){
            dataArray2[i]=+this.dataArray[i].value;
            sum+=dataArray2[i];
        }

        const avg = sum/number;
        const max = Math.max.apply(Math, dataArray2);
        const min = Math.min.apply(Math, dataArray2);

        this.showStats(sum, avg, min, max);
    }

    showStats(sum:number, avg:number, min:number,max:number){
        this.dataSumInput.value=sum.toString();
        this.dataAvgInput.value=avg.toString();
        this.dataMinInput.value=min.toString();
        this.dataMaxInput.value=max.toString();
    }

    watchInputValues(){
        const number = +this.numberOfInputs.value;
        this.numberOfInputs.addEventListener('input',()=>this.createInput());

        if(this.inputsContainer.hasChildNodes()){

            for(let i=0;i<number;i++){
            this.dataArray[i]?.addEventListener('input',()=>this.computeData());
            }
        }
    }


}

const statsApp= new StatsApp();