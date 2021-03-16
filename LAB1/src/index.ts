class StatsApp{

    numberOfInputs:HTMLInputElement;
    inputsContainer: HTMLElement;
    button: HTMLElement;
    dataArray: HTMLInputElement[]=[];
    dataSumInput:HTMLInputElement;
    dataAvgInput:HTMLInputElement;
    dataMinInput:HTMLInputElement;
    dataMaxInput:HTMLInputElement;

    data1Input:HTMLInputElement;
    sumInput:HTMLInputElement;

    constructor(){
        this.startApp();
    }

    startApp(){
        //this.watchInputValues();
        this.numberOfInputs = document.querySelector("#numberOfInputs");
        this.button = document.getElementById("button");
        this.button.addEventListener("click", () => this.createInput());
        this.getInputs();
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
            this.inputsContainer.appendChild(newInput);

            const removeInputButton = document.createElement("button");
            removeInputButton.textContent = "Remove";
            removeInputButton.className = "data" + (i + 1);
            this.inputsContainer.appendChild(removeInputButton);

            const brake = document.createElement("br");
            brake.className = "data" + (i + 1);
            this.inputsContainer.appendChild(brake);

        }
        this.startApp();
      }

    getInputs(){
        this.inputsContainer = document.getElementById("inputsContainer");

        if(this.inputsContainer.hasChildNodes()){
            const number = +this.numberOfInputs.value;

            for(let i=0; i<number; i++){
                const data =".data"+(i+1);

                this.dataArray.push(document.querySelector(data));
            }
        }

        this.dataSumInput=document.querySelector('#sumInput');
        this.dataAvgInput=document.querySelector('#avgInput');
        this.dataMinInput=document.querySelector('#minInput');
        this.dataMaxInput=document.querySelector('#maxInput');
    }

/*
    watchInputValues(){
        this.data1Input.addEventListener('input',()=>this.computeData());
    }

    computeData(){
        const data1=+this.data1Input.value;

        const sum=data1//+data2;
    }

    showStats(sum:number){
        this.sumInput.value=sum.toString();
    }
*/


}

const statsApp= new StatsApp();