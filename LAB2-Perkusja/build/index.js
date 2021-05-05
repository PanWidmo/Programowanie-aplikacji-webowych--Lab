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
playChannel1Btn.addEventListener('click', onPlayChanel1);
document.body.addEventListener('transitionend', removeTransition);
//dodac walidacje dla capslocka (alert, ze jest wlaczony i poprosic o wylaczenie?)
function onKeyDown(ev) {
    var key = ev.key;
    var time = ev.timeStamp;
    if (key == "q" || key == "w" || key == "e" || key == "a" || key == "s" || key == "d"
        || key == "z" || key == "x" || key == "c") {
        channel1.push({
            key: key,
            time: time
        });
        playSound(key);
        console.log(channel1);
    }
    else
        window.alert("Wrong key!");
}
function removeTransition(e) {
    if (e.propertyName !== 'transform')
        return;
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
function onPlayChanel1() {
    playChannel1();
}
function playChannel1() {
    var prevTime = 0;
    channel1.forEach(function (sound) {
        var timeout = sound.time - prevTime;
        setTimeout(function () { return playSound(sound.key); }, timeout);
        playSound(sound.key);
    });
}
