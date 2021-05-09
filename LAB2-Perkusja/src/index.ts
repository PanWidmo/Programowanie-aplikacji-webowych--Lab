const channel1:any[]=[];
const channel2:any[]=[];
const channel3:any[]=[];
const channel4:any[]=[];

let timeChannel1:number;
let timeChannel2:number;
let timeChannel3:number;
let timeChannel4:number;

let currChanell:string;

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

const startChannel1Btn:HTMLButtonElement = document.querySelector('#startChannel1');
const startChannel2Btn:HTMLButtonElement = document.querySelector('#startChannel2');
const startChannel3Btn:HTMLButtonElement = document.querySelector('#startChannel3')
const startChannel4Btn:HTMLButtonElement = document.querySelector('#startChannel4');

const stopChannel1Btn:HTMLButtonElement = document.querySelector('#stopChannel1');
const stopChannel2Btn:HTMLButtonElement = document.querySelector('#stopChannel2');
const stopChannel3Btn:HTMLButtonElement = document.querySelector('#stopChannel3');
const stopChannel4Btn:HTMLButtonElement = document.querySelector('#stopChannel4');

const playChannel1Btn:HTMLButtonElement = document.querySelector('#playChannel1');
const playChannel2Btn:HTMLButtonElement = document.querySelector('#playChannel2');
const playChannel3Btn:HTMLButtonElement = document.querySelector('#playChannel3');
const playChannel4Btn:HTMLButtonElement = document.querySelector('#playChannel4');

document.body.addEventListener('keypress',onKeyDown);
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

function onKeyDown(ev:KeyboardEvent): void {
    const key=ev.key;
    const time=ev.timeStamp;

    switch(currChanell){
        case "startChannel1":
            if(startChannel1Btn.disabled = false){
                channel1.push({
                    key,
                    time
                });
            }
        break;
        case "startChannel2":
            if(startChannel2Btn.disabled = false){
                channel2.push({
                    key,
                    time
                });
            }
        break;
        case "startChannel3":
            if(startChannel3Btn.disabled = false){
                channel3.push({
                    key,
                    time
                });
            }
        break;
        case "startChannel4":
            if(startChannel4Btn.disabled = false){
                channel4.push({
                    key,
                    time
                });
            }
        break;
    }

    playSound(key);

    // if(key=="q" || key=="w" || key=="e" || key=="a" || key=="s" || key=="d"
    // || key=="z" || key=="x" || key=="c"){

    //     playSound(key);
    // }
    // else window.alert("Wrong key!");
}

function removeTransition(e) {
    if (e.propertyName !== 'transform') {
        return;
    }

    e.target.classList.remove('playing');
}

function playSound(key:string) {
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

function startRecording(event){

    switch(event.target.id){
        case "startChannel1":
            startChannel1Btn.disabled = true;
            stopChannel1Btn.disabled = false;
            playChannel1Btn.disabled = true;

            while(channel1.length>0){
                channel1.pop();
            }
        break;
        case "startChannel2":
            startChannel2Btn.disabled = true;
            stopChannel2Btn.disabled = false;
            playChannel2Btn.disabled = true;

            while(channel2.length>0){
                channel2.pop();
            }
        break;
        case "startChannel3":
            startChannel3Btn.disabled = true;
            stopChannel3Btn.disabled = false;
            playChannel3Btn.disabled = true;

            while(channel3.length>0){
                channel3.pop();
            }
        break;
        case "startChannel4":
            startChannel4Btn.disabled = true;
            stopChannel4Btn.disabled = false;
            playChannel4Btn.disabled = true;

            while(channel4.length>0){
                channel4.pop();
            }
        break;

    }
}

function stopRecording(event){

    switch(event.target.id){
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


function onPlayChanel():void{
    playChannel();
}

// jak jest play to reszta buttonow disabled until nie przestanie grac
function playChannel():void {
    let prevTime = 0;

    channel1.forEach(sound => {
        const timeout = sound.time - prevTime;
        setTimeout(() => playSound(sound.key), timeout);
    });
}
