var channel1 = [];
var channel2 = [];
var channel3 = [];
var channel4 = [];
var sound1 = document.querySelector('[data-sound="boom"]');
var sound2 = document.querySelector('[data-sound="clap"]');
var sound3 = document.querySelector('[data-sound="hithat"]');
var sound4 = document.querySelector('[data-sound="kick"]');
var sound5 = document.querySelector('[data-sound="openhat"]');
var sound6 = document.querySelector('[data-sound="ride"]');
var sound7 = document.querySelector('[data-sound="snare"]');
var sound8 = document.querySelector('[data-sound="tink"]');
var sound9 = document.querySelector('[data-sound="tom"]');
var sound1Btn = document.querySelector('#soundBtn1');
var sound2Btn = document.querySelector('#soundBtn2');
var sound3Btn = document.querySelector('#soundBtn3');
var sound4Btn = document.querySelector('#soundBtn4');
var sound5Btn = document.querySelector('#soundBtn5');
var sound6Btn = document.querySelector('#soundBtn6');
var sound7Btn = document.querySelector('#soundBtn7');
var sound8Btn = document.querySelector('#soundBtn8');
var sound9Btn = document.querySelector('#soundBtn9');
var startChannel1Btn = document.querySelector('#startChannel1');
var startChannel2Btn = document.querySelector('#startChannel2');
var startChannel3Btn = document.querySelector('#startChannel3');
var startChannel4Btn = document.querySelector('#startChannel4');
var stopChannel1Btn = document.querySelector('#stopChannel1');
var stopChannel2Btn = document.querySelector('#stopChannel2');
var stopChannel3Btn = document.querySelector('#stopChannel3');
var stopChannel4Btn = document.querySelector('#stopChannel4');
var playChannel1Btn = document.querySelector('#playChannel1');
var playChannel2Btn = document.querySelector('#playChannel2');
var playChannel3Btn = document.querySelector('#playChannel3');
var playChannel4Btn = document.querySelector('#playChannel4');
document.body.addEventListener('keypress', onKeyDown);
document.body.addEventListener('transitionend', removeTransition);
startChannel1Btn.addEventListener('click', startRecording);
startChannel2Btn.addEventListener('click', startRecording);
startChannel3Btn.addEventListener('click', startRecording);
startChannel4Btn.addEventListener('click', startRecording);
stopChannel1Btn.addEventListener('click', stopRecording);
stopChannel2Btn.addEventListener('click', stopRecording);
stopChannel3Btn.addEventListener('click', stopRecording);
stopChannel4Btn.addEventListener('click', stopRecording);
playChannel1Btn.addEventListener('click', onPlayChanel);
playChannel2Btn.addEventListener('click', onPlayChanel);
playChannel3Btn.addEventListener('click', onPlayChanel);
playChannel4Btn.addEventListener('click', onPlayChanel);
//dodac walidacje dla capslocka (alert, ze jest wlaczony i poprosic o wylaczenie?)
function onKeyDown(ev) {
    var key = ev.key;
    var time = ev.timeStamp;
    if (key == "q" || key == "w" || key == "e" || key == "a" || key == "s" || key == "d"
        || key == "z" || key == "x" || key == "c") {
        //wsadzic switcha w zaleznosci od kanalu
        channel1.push({
            key: key,
            time: time
        });
        playSound(key);
    }
    else
        window.alert("Wrong key!");
}
function removeTransition(e) {
    if (e.propertyName !== 'transform') {
        return;
    }
    e.target.classList.remove('playing');
}
function playSound(key) {
    switch (key) {
        case "q":
            sound1.currentTime = 0;
            sound1Btn.classList.add('playing');
            sound1.play();
            break;
        case "w":
            sound2.currentTime = 0;
            sound2Btn.classList.add('playing');
            sound2.play();
            break;
        case "e":
            sound3.currentTime = 0;
            sound3Btn.classList.add('playing');
            sound3.play();
            break;
        case "a":
            sound4.currentTime = 0;
            sound4Btn.classList.add('playing');
            sound4.play();
            break;
        case "s":
            sound5.currentTime = 0;
            sound5Btn.classList.add('playing');
            sound5.play();
            break;
        case "d":
            sound6.currentTime = 0;
            sound6Btn.classList.add('playing');
            sound6.play();
            break;
        case "z":
            sound7.currentTime = 0;
            sound7Btn.classList.add('playing');
            sound7.play();
            break;
        case "x":
            sound8.currentTime = 0;
            sound8Btn.classList.add('playing');
            sound8.play();
            break;
        case "c":
            sound9.currentTime = 0;
            sound9Btn.classList.add('playing');
            sound9.play();
            break;
    }
}
function startRecording(event) {
    switch (event.target.id) {
        case "startChannel1":
            startChannel1Btn.disabled = true;
            stopChannel1Btn.disabled = false;
            playChannel1Btn.disabled = true;
            while (channel1.length > 0) {
                channel1.pop();
            }
            break;
        case "startChannel2":
            startChannel2Btn.disabled = true;
            stopChannel2Btn.disabled = false;
            playChannel2Btn.disabled = true;
            while (channel2.length > 0) {
                channel2.pop();
            }
            break;
        case "startChannel3":
            startChannel3Btn.disabled = true;
            stopChannel3Btn.disabled = false;
            playChannel3Btn.disabled = true;
            while (channel3.length > 0) {
                channel3.pop();
            }
            break;
        case "startChannel4":
            startChannel4Btn.disabled = true;
            stopChannel4Btn.disabled = false;
            playChannel4Btn.disabled = true;
            while (channel4.length > 0) {
                channel4.pop();
            }
            break;
    }
}
function stopRecording(event) {
    switch (event.target.id) {
        case "stopChannel1":
            startChannel1Btn.disabled = false;
            stopChannel1Btn.disabled = true;
            playChannel1Btn.disabled = false;
            break;
        case "stopChannel2":
            startChannel2Btn.disabled = false;
            stopChannel2Btn.disabled = true;
            playChannel2Btn.disabled = false;
            break;
        case "stopChannel3":
            startChannel3Btn.disabled = false;
            stopChannel3Btn.disabled = true;
            playChannel3Btn.disabled = false;
            break;
        case "stopChannel4":
            startChannel4Btn.disabled = false;
            stopChannel4Btn.disabled = true;
            playChannel4Btn.disabled = false;
            break;
    }
}
function onPlayChanel() {
    playChannel();
}
// jak jest play to reszta buttonow disabled
function playChannel() {
    var prevTime = 0;
    channel1.forEach(function (sound) {
        var timeout = sound.time - prevTime;
        setTimeout(function () { return playSound(sound.key); }, timeout);
    });
}
