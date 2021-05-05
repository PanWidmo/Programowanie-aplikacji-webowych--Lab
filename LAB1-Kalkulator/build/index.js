var StatsApp = /** @class */ (function () {
    function StatsApp() {
        this.dataArray = [];
        this.number = 0;
        this.startApp();
    }
    StatsApp.prototype.startApp = function () {
        this.numberOfInputs = document.querySelector("#numberOfInputs");
        this.number = +this.numberOfInputs.value;
        this.getInput();
        this.watchInputValues();
    };
    StatsApp.prototype.createInput = function () {
        var _this = this;
        var _a, _b, _c, _d, _e, _f;
        this.inputsContainer = document.getElementById("inputsContainer");
        var number = +this.numberOfInputs.value;
        while ((_a = this.inputsContainer) === null || _a === void 0 ? void 0 : _a.hasChildNodes()) {
            (_b = this.inputsContainer) === null || _b === void 0 ? void 0 : _b.removeChild((_c = this.inputsContainer) === null || _c === void 0 ? void 0 : _c.lastChild);
            this.dataArray = [];
        }
        var _loop_1 = function (i) {
            var newInputLabel = document.createElement("label");
            newInputLabel.innerHTML = "Value: ";
            newInputLabel.setAttribute("class", "data" + (i + 1));
            (_d = this_1.inputsContainer) === null || _d === void 0 ? void 0 : _d.appendChild(newInputLabel);
            var newInput = document.createElement("input");
            newInput.setAttribute("type", "text");
            newInput.setAttribute("class", "data" + (i + 1));
            newInput.setAttribute("id", "input" + (i + 1));
            (_e = this_1.inputsContainer) === null || _e === void 0 ? void 0 : _e.appendChild(newInput);
            var removeInputButton = document.createElement("button");
            removeInputButton.textContent = "Remove";
            removeInputButton.className = "data" + (i + 1);
            (_f = this_1.inputsContainer) === null || _f === void 0 ? void 0 : _f.appendChild(removeInputButton);
            removeInputButton.addEventListener('click', function (ev) {
                _this.number = _this.number - 1;
                var tmp = ev.target.className;
                var x = _this.dataArray.findIndex(function (x) { return x.className === tmp; });
                _this.dataArray.splice(x, 1);
                document.querySelectorAll('.data' + (i + 1)).forEach(function (e) { return e.remove(); });
                _this.computeData();
            });
            var breake = document.createElement("br");
            breake.className = "data" + (i + 1);
            this_1.inputsContainer.appendChild(breake);
        };
        var this_1 = this;
        for (var i = 0; i < number; i++) {
            _loop_1(i);
        }
        this.startApp();
    };
    StatsApp.prototype.getInput = function () {
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
        if (this.dataArray.length > 0) {
            for (var i = 0; i < this.number; i++) {
                if (!(isNaN(+this.dataArray[i].value))) {
                    dataArray2[i] = +this.dataArray[i].value;
                }
                else {
                    alert("Wrong data format!");
                    var tmp = "";
                    var a = this.dataArray[i];
                    a.value = tmp;
                }
            }
            for (var i = 0; i < dataArray2.length; i++) {
                sum += dataArray2[i];
            }
            var avg = sum / this.number;
            var max = Math.max.apply(Math, dataArray2);
            var min = Math.min.apply(Math, dataArray2);
            this.showStats(sum, avg, min, max);
        }
        else {
            var tmp = "";
            this.dataSumInput.value = tmp;
            this.dataAvgInput.value = tmp;
            this.dataMaxInput.value = tmp;
            this.dataMinInput.value = tmp;
            this.numberOfInputs.value = tmp;
            alert("All data removed!");
        }
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
        this.numberOfInputs.addEventListener('input', function () { return _this.createInput(); });
        if (this.inputsContainer.hasChildNodes()) {
            for (var i = 0; i < this.number; i++) {
                (_a = this.dataArray[i]) === null || _a === void 0 ? void 0 : _a.addEventListener('input', function () { return _this.computeData(); });
            }
        }
    };
    return StatsApp;
}());
var statsApp = new StatsApp();
