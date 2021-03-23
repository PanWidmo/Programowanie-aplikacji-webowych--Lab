document.body.addEventListener('keypress', onKeyDown);
var sound1 = document.querySelector('[data-sound="boom"]');
var sound2 = document.querySelector('[data-sound="clap"]');
var sound3 = document.querySelector('[data-sound="hithat"]');
var sound4 = document.querySelector('[data-sound="kick"]');
var sound5 = document.querySelector('[data-sound="openhat"]');
var sound6 = document.querySelector('[data-sound="ride"]');
var sound7 = document.querySelector('[data-sound="snare"]');
var sound8 = document.querySelector('[data-sound="tink"]');
var sound9 = document.querySelector('[data-sound="tom"]');
var chanel1 = [];
//dodac walidacje dla capslocka (alert, ze jest wlaczony i poprosic o wylaczenie?)
function onKeyDown(ev) {
    //console.log(ev);
    var key = ev.key;
    var time = ev.timeStamp;
    if (key == "q" || key == "w" || key == "e" || key == "a" || key == "s" || key == "d" || key == "z" || key == "x" || key == "c") {
        chanel1.push({
            key: key,
            time: time
        });
        playSound(key);
        console.log(chanel1);
    }
    else
        window.alert("Wrong key!");
    function playSound(key) {
        switch (key) {
            case "q":
                sound1.currentTime = 0;
                sound1.play();
                break;
            case "w":
                sound2.currentTime = 0;
                sound2.play();
                break;
            case "e":
                sound3.currentTime = 0;
                sound3.play();
                break;
            case "a":
                sound4.currentTime = 0;
                sound4.play();
                break;
            case "s":
                sound5.currentTime = 0;
                sound5.play();
                break;
            case "d":
                sound6.currentTime = 0;
                sound6.play();
                break;
            case "z":
                sound7.currentTime = 0;
                sound7.play();
                break;
            case "x":
                sound8.currentTime = 0;
                sound8.play();
                break;
            case "c":
                sound9.currentTime = 0;
                sound9.play();
                break;
        }
    }
}
