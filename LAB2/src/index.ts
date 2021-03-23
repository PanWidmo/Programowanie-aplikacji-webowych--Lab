const channel1:any[]=[];
const sound1:HTMLAudioElement = document.querySelector('[data-sound="boom"]');
const sound2:HTMLAudioElement = document.querySelector('[data-sound="clap"]');
const sound3:HTMLAudioElement = document.querySelector('[data-sound="hithat"]');
const sound4:HTMLAudioElement = document.querySelector('[data-sound="kick"]');
const sound5:HTMLAudioElement = document.querySelector('[data-sound="openhat"]');
const sound6:HTMLAudioElement = document.querySelector('[data-sound="ride"]');
const sound7:HTMLAudioElement = document.querySelector('[data-sound="snare"]');
const sound8:HTMLAudioElement = document.querySelector('[data-sound="tink"]');
const sound9:HTMLAudioElement = document.querySelector('[data-sound="tom"]');
const sound1Btn:HTMLButtonElement = document.querySelector('#soundBtn1');
const sound2Btn:HTMLButtonElement = document.querySelector('#soundBtn2');
const sound3Btn:HTMLButtonElement = document.querySelector('#soundBtn3');
const sound4Btn:HTMLButtonElement = document.querySelector('#soundBtn4');
const sound5Btn:HTMLButtonElement = document.querySelector('#soundBtn5');
const sound6Btn:HTMLButtonElement = document.querySelector('#soundBtn6');
const sound7Btn:HTMLButtonElement = document.querySelector('#soundBtn7');
const sound8Btn:HTMLButtonElement = document.querySelector('#soundBtn8');
const sound9Btn:HTMLButtonElement = document.querySelector('#soundBtn9');

const playChanel1Btn:HTMLButtonElement = document.querySelector('#playChannel1');

document.body.addEventListener('keypress',onKeyDown);
playChanel1Btn.addEventListener('click',onPlayChanel1);


//dodac walidacje dla capslocka (alert, ze jest wlaczony i poprosic o wylaczenie?)

function onKeyDown(ev:KeyboardEvent): void {
    //console.log(ev);

    const key=ev.key;
    const time=ev.timeStamp;

    if(key=="q" || key=="w" || key=="e" || key=="a" || key=="s" || key=="d"
    || key=="z" || key=="x" || key=="c"){

    channel1.push({
        key,
        time
    });

    playSound(key);
    console.log(channel1);
    }

    else window.alert("Wrong key!");
}

function playSound(key:string) {
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

function onPlayChanel1():void{
    playChannel1();
}

function playChannel1():void {
    let prevTime = 0;
    channel1.forEach(sound => {
        const timeout = sound.time - prevTime;
        setTimeout(() => playSound(sound.key), timeout);
        playSound(sound.key);
    });
}