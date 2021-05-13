var channel1 = [];
var channel2 = [];
var channel3 = [];
var channel4 = [];
var currentChannel;
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
stopChannel1Btn.disabled = true;
stopChannel2Btn.disabled = true;
stopChannel3Btn.disabled = true;
stopChannel4Btn.disabled = true;
stopChannel1Btn.addEventListener('click', stopRecording);
stopChannel2Btn.addEventListener('click', stopRecording);
stopChannel3Btn.addEventListener('click', stopRecording);
stopChannel4Btn.addEventListener('click', stopRecording);
playChannel1Btn.disabled = true;
playChannel2Btn.disabled = true;
playChannel3Btn.disabled = true;
playChannel4Btn.disabled = true;
playChannel1Btn.addEventListener('click', PlayChannel);
playChannel2Btn.addEventListener('click', PlayChannel);
playChannel3Btn.addEventListener('click', PlayChannel);
playChannel4Btn.addEventListener('click', PlayChannel);
function onKeyDown(ev) {
    var key = ev.key;
    var time = ev.timeStamp;
    if (key == "q" || key == "Q" || key == "w" || key == "W" || key == "e" || key == "E" || key == "a" || key == "A" ||
        key == "s" || key == "S" || key == "d" || key == "D" || key == "z" || key == "Z" || key == "x" || key == "X" ||
        key == "c" || key == "C") {
        switch (currentChannel) {
            case "startChannel1":
                if (startChannel1Btn.disabled == true && stopChannel1Btn.disabled == false) {
                    channel1.push({
                        key: key,
                        time: time
                    });
                }
                break;
            case "startChannel2":
                if (startChannel2Btn.disabled == true) {
                    channel2.push({
                        key: key,
                        time: time
                    });
                }
                break;
            case "startChannel3":
                if (startChannel3Btn.disabled == true) {
                    channel3.push({
                        key: key,
                        time: time
                    });
                }
                break;
            case "startChannel4":
                if (startChannel4Btn.disabled == true) {
                    channel4.push({
                        key: key,
                        time: time
                    });
                }
                break;
        }
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
        case "Q":
            sound1.currentTime = 0;
            sound1Btn.classList.add('playing');
            sound1.play();
            break;
        case "w":
        case "W":
            sound2.currentTime = 0;
            sound2Btn.classList.add('playing');
            sound2.play();
            break;
        case "e":
        case "E":
            sound3.currentTime = 0;
            sound3Btn.classList.add('playing');
            sound3.play();
            break;
        case "a":
        case "A":
            sound4.currentTime = 0;
            sound4Btn.classList.add('playing');
            sound4.play();
            break;
        case "s":
        case "S":
            sound5.currentTime = 0;
            sound5Btn.classList.add('playing');
            sound5.play();
            break;
        case "d":
        case "D":
            sound6.currentTime = 0;
            sound6Btn.classList.add('playing');
            sound6.play();
            break;
        case "z":
        case "Z":
            sound7.currentTime = 0;
            sound7Btn.classList.add('playing');
            sound7.play();
            break;
        case "x":
        case "X":
            sound8.currentTime = 0;
            sound8Btn.classList.add('playing');
            sound8.play();
            break;
        case "c":
        case "C":
            sound9.currentTime = 0;
            sound9Btn.classList.add('playing');
            sound9.play();
            break;
    }
}
function startRecording(event) {
    currentChannel = event.target.id;
    switch (currentChannel) {
        case "startChannel1":
            startChannel1Btn.disabled = true;
            stopChannel1Btn.disabled = false;
            playChannel1Btn.disabled = true;
            startChannel2Btn.disabled = true;
            startChannel3Btn.disabled = true;
            startChannel4Btn.disabled = true;
            while (channel1.length > 0) {
                channel1.pop();
            }
            break;
        case "startChannel2":
            startChannel2Btn.disabled = true;
            stopChannel2Btn.disabled = false;
            playChannel2Btn.disabled = true;
            startChannel1Btn.disabled = true;
            startChannel3Btn.disabled = true;
            startChannel4Btn.disabled = true;
            while (channel2.length > 0) {
                channel2.pop();
            }
            break;
        case "startChannel3":
            startChannel3Btn.disabled = true;
            stopChannel3Btn.disabled = false;
            playChannel3Btn.disabled = true;
            startChannel1Btn.disabled = true;
            startChannel2Btn.disabled = true;
            startChannel4Btn.disabled = true;
            while (channel3.length > 0) {
                channel3.pop();
            }
            break;
        case "startChannel4":
            startChannel4Btn.disabled = true;
            stopChannel4Btn.disabled = false;
            playChannel4Btn.disabled = true;
            startChannel1Btn.disabled = true;
            startChannel2Btn.disabled = true;
            startChannel3Btn.disabled = true;
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
            startChannel2Btn.disabled = false;
            startChannel3Btn.disabled = false;
            startChannel4Btn.disabled = false;
            if (channel1.length > 0) {
                playChannel1Btn.disabled = false;
            }
            break;
        case "stopChannel2":
            startChannel2Btn.disabled = false;
            stopChannel2Btn.disabled = true;
            startChannel1Btn.disabled = false;
            startChannel3Btn.disabled = false;
            startChannel4Btn.disabled = false;
            if (channel2.length > 0) {
                playChannel2Btn.disabled = false;
            }
            break;
        case "stopChannel3":
            startChannel3Btn.disabled = false;
            stopChannel3Btn.disabled = true;
            startChannel1Btn.disabled = false;
            startChannel2Btn.disabled = false;
            startChannel4Btn.disabled = false;
            if (channel3.length > 0) {
                playChannel3Btn.disabled = false;
            }
            break;
        case "stopChannel4":
            startChannel4Btn.disabled = false;
            stopChannel4Btn.disabled = true;
            startChannel1Btn.disabled = false;
            startChannel2Btn.disabled = false;
            startChannel3Btn.disabled = false;
            if (channel4.length > 0) {
                playChannel4Btn.disabled = false;
            }
            break;
    }
}
function PlayChannel(event) {
    switch (event.target.id) {
        case "playChannel1":
            channel1.forEach(function (sound) {
                var timeout = sound.time - channel1[0].time;
                setTimeout(function () { return playSound(sound.key); }, timeout);
                setTimeout(function () { return playChannel1Btn.disabled = true; }, timeout);
                if (timeout == 0) {
                    playChannel1Btn.disabled = false;
                }
                //playChannel1Btn.disabled = true;
                //startChannel1Btn.disabled = true;
            });
            //setTimeout(()=> playChannel1Btn.disabled = false, channel1[0].time);
            //setTimeout(()=> startChannel1Btn.disabled = false, channel1[0].time);
            break;
        case "playChannel2":
            channel2.forEach(function (sound) {
                var timeout = sound.time - channel2[0].time;
                setTimeout(function () { return playSound(sound.key); }, timeout);
            });
            break;
        case "playChannel3":
            channel3.forEach(function (sound) {
                var timeout = sound.time - channel3[0].time;
                ;
                setTimeout(function () { return playSound(sound.key); }, timeout);
            });
            break;
        case "playChannel4":
            channel4.forEach(function (sound) {
                var timeout = sound.time - channel4[0].time;
                ;
                setTimeout(function () { return playSound(sound.key); }, timeout);
            });
            break;
    }
}
