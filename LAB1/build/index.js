var StatsApp = /** @class */ (function () {
    function StatsApp() {
        this.dataArray = [];
        this.startApp();
    }
    StatsApp.prototype.startApp = function () {
        this.numberOfInputs = document.querySelector("#numberOfInputs");
        this.getInputs();
        this.watchInputValues();
    };
    StatsApp.prototype.createInput = function () {
        var _this = this;
        var _a, _b, _c;
        this.inputsContainer = document.getElementById("inputsContainer");
        var number = +this.numberOfInputs.value;
        while ((_a = this.inputsContainer) === null || _a === void 0 ? void 0 : _a.hasChildNodes()) {
            (_b = this.inputsContainer) === null || _b === void 0 ? void 0 : _b.removeChild((_c = this.inputsContainer) === null || _c === void 0 ? void 0 : _c.lastChild);
        }
        var _loop_1 = function (i) {
            var newInputLabel = document.createElement("label");
            newInputLabel.innerHTML = "Value: ";
            newInputLabel.setAttribute("class", "data" + (i + 1));
            this_1.inputsContainer.appendChild(newInputLabel);
            var newInput = document.createElement("input");
            newInput.setAttribute("type", "text");
            newInput.setAttribute("class", "data" + (i + 1));
            newInput.setAttribute("id", "input" + (i + 1));
            this_1.inputsContainer.appendChild(newInput);
            var removeInputButton = document.createElement("button");
            removeInputButton.textContent = "Remove";
            removeInputButton.className = "data" + (i + 1);
            this_1.inputsContainer.appendChild(removeInputButton);
            removeInputButton.addEventListener('click', function () { return _this.removeInput(i + 1); });
            var brake = document.createElement("br");
            brake.className = "data" + (i + 1);
            this_1.inputsContainer.appendChild(brake);
        };
        var this_1 = this;
        for (var i = 0; i < number; i++) {
            _loop_1(i);
        }
        this.startApp();
    };
    StatsApp.prototype.removeInput = function (n) {
        for (var i = 0; i < 4; i++) {
            var d = document.querySelector('.data' + n);
            d.remove();
        }
        this.dataArray.splice(n - 1, 1);
        this.dataArray.splice(n, 1);
    };
    StatsApp.prototype.getInputs = function () {
        this.inputsContainer = document.getElementById("inputsContainer");
        if (this.inputsContainer.hasChildNodes()) {
            var number = +this.numberOfInputs.value;
            for (var i = 0; i < number; i++) {
                var data = "#input" + (i + 1);
                this.dataArray.push(document.querySelector(data));
            }
        }
        this.dataSumInput = document.querySelector('#sumInput');
        this.dataAvgInput = document.querySelector('#avgInput');
        this.dataMinInput = document.querySelector('#minInput');
        this.dataMaxInput = document.querySelector('#maxInput');
    };
    StatsApp.prototype.computeData = function () {
        var dataArray2 = [];
        var sum = 0;
        var number = +this.numberOfInputs.value;
        for (var i = 0; i < number; i++) {
            dataArray2[i] = +this.dataArray[i].value;
            sum += dataArray2[i];
        }
        var avg = sum / number;
        var max = Math.max.apply(Math, dataArray2);
        var min = Math.min.apply(Math, dataArray2);
        this.showStats(sum, avg, min, max);
    };
    StatsApp.prototype.showStats = function (sum, avg, min, max) {
        this.dataSumInput.value = sum.toString();
        this.dataAvgInput.value = avg.toString();
        this.dataMinInput.value = min.toString();
        this.dataMaxInput.value = max.toString();
    };
    StatsApp.prototype.watchInputValues = function () {
        var _this = this;
        var _a;
        var number = +this.numberOfInputs.value;
        this.numberOfInputs.addEventListener('input', function () { return _this.createInput(); });
        if (this.inputsContainer.hasChildNodes()) {
            for (var i = 0; i < number; i++) {
                (_a = this.dataArray[i]) === null || _a === void 0 ? void 0 : _a.addEventListener('input', function () { return _this.computeData(); });
            }
        }
    };
    return StatsApp;
}());
var statsApp = new StatsApp();
