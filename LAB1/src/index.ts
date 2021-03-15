class StatsApp{

    numberOfInputs:HTMLInputElement;

    data1Input:HTMLInputElement;
    sumInput:HTMLInputElement;

    constructor(){
        this.startApp();
    }

    startApp(){
        //this.getInputs();
        //this.watchInputValues();
        this.createInput();
    }

    createInput(){

        this.numberOfInputs=document.querySelector('#numberOfInputs');
        const number=+this.numberOfInputs.value;

        const inputsContainer=document.getElementById("#inputsContainer");

        for(let i=0;i<number;i++){
            const newInput = document.createElement('input');
            newInput.setAttribute("type","text");
            newInput.setAttribute("class","data"+(i+1));
            inputsContainer.appendChild(newInput);

            const newInputLabel=document.createElement('label');
            newInputLabel.innerHTML="Value: ";
            newInputLabel.setAttribute("class","data"+(i+1));
            inputsContainer.appendChild(newInputLabel);

            const removeInputButton=document.createElement('button');
            removeInputButton.innerHTML="Remove";
            removeInputButton.setAttribute("class","data"+(i+1));
            inputsContainer.appendChild(removeInputButton);

        }


    }

    /*getInputs(){
        this.data1Input=document.querySelector('#data1');
        this.sumInput=document.querySelector('#sum');
    }

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