var StatsApp = /** @class */ (function () {
    function StatsApp() {
        this.startApp();
    }
    StatsApp.prototype.startApp = function () {
        var _this = this;
        //this.getInputs();
        //this.watchInputValues();
        this.numberOfInputs = document.querySelector("#numberOfInputs");
        this.button = document.getElementById("button");
        this.button.addEventListener("click", function () { return _this.createInput(); });
    };
    StatsApp.prototype.createInput = function () {
        var _a, _b, _c;
        this.inputsContainer = document.getElementById("inputsContainer");
        var number = +this.numberOfInputs.value;
        while ((_a = this.inputsContainer) === null || _a === void 0 ? void 0 : _a.hasChildNodes()) {
            (_b = this.inputsContainer) === null || _b === void 0 ? void 0 : _b.removeChild((_c = this.inputsContainer) === null || _c === void 0 ? void 0 : _c.lastChild);
        }
        for (var i = 0; i < number; i++) {
            var newInputLabel = document.createElement("label");
            newInputLabel.innerHTML = "Value: ";
            newInputLabel.setAttribute("class", "data" + (i + 1));
            this.inputsContainer.appendChild(newInputLabel);
            var newInput = document.createElement("input");
            newInput.setAttribute("type", "text");
            newInput.setAttribute("class", "data" + (i + 1));
            this.inputsContainer.appendChild(newInput);
            var removeInputButton = document.createElement("button");
            removeInputButton.textContent = "Remove";
            removeInputButton.className = "data" + (i + 1);
            this.inputsContainer.appendChild(removeInputButton);
            var brake = document.createElement("br");
            brake.className = "data" + (i + 1);
            this.inputsContainer.appendChild(brake);
        }
        this.startApp();
    };
    return StatsApp;
}());
var statsApp = new StatsApp();
