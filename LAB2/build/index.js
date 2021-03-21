var chanel1 = [];
var clapAudio = document.querySelector('[data-sound="clap"]');
var playChannel1Btn = document.querySelector('#playChanel1');
document.body.addEventListener('keypress', onKeyDown);
playChannel1Btn.addEventListener('click', onPlayChanell);
function onKeyDown(ev) {
    var key = ev.key;
    var time = ev.timeStamp;
    chanel1.push({
        key: key,
        time: time
    });
    playSound(key);
    console.log(chanel1);
}
function playSound(key) {
    clapAudio.currentTime = 0;
    clapAudio.play();
}
function onPlayChanell() {
    playChannel1();
}
function playChannel1() {
    var prevTime = 0;
    chanel1.forEach(function (sound) {
        var timeout = sound.time - prevTime;
        setTimeout(function () { return playSound(sound.key); }, timeout);
    });
}
/*class DrumApp{

}

const drumApp= new DrumApp();
*/ 
