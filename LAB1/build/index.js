var StatsApp = /** @class */ (function () {
    function StatsApp() {
        this.startApp();
    }
    StatsApp.prototype.startApp = function () {
        //this.getInputs();
        //this.watchInputValues();
        this.createInput();
    };
    StatsApp.prototype.createInput = function () {
        this.numberOfInputs = document.querySelector('#numberOfInputs');
        var number = +this.numberOfInputs.value;
        var inputsContainer = document.getElementById("#inputsContainer");
        for (var i = 0; i < number; i++) {
            var newInput = document.createElement('input');
            newInput.setAttribute("type", "text");
            newInput.setAttribute("class", "data" + (i + 1));
            inputsContainer.appendChild(newInput);
            var newInputLabel = document.createElement('label');
            newInputLabel.innerHTML = "Value: ";
            newInputLabel.setAttribute("class", "data" + (i + 1));
            inputsContainer.appendChild(newInputLabel);
            var removeInputButton = document.createElement('button');
            removeInputButton.innerHTML = "Remove";
            removeInputButton.setAttribute("class", "data" + (i + 1));
            inputsContainer.appendChild(removeInputButton);
        }
    };
    return StatsApp;
}());
var statsApp = new StatsApp();
