const channel1:any[]=[];
const channel2:any[]=[];
const channel3:any[]=[];
const channel4:any[]=[];

let currentChannel:string;

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

function onKeyDown(ev:KeyboardEvent): void {
    const key=ev.key;
    const time=ev.timeStamp;

    if(key=="q" || key=="Q" || key=="w" || key=="W" || key=="e" || key=="E" || key=="a" || key=="A" ||
    key=="s" || key=="S" || key=="d" || key=="D" || key=="z" || key=="Z" || key=="x" || key=="X" ||
    key=="c" || key=="C"){

        switch(currentChannel){
            case "startChannel1":
                if(startChannel1Btn.disabled == true && stopChannel1Btn.disabled == false){
                    channel1.push({
                        key,
                        time
                    });
                }
            break;
            case "startChannel2":
                if(startChannel2Btn.disabled == true){
                    channel2.push({
                        key,
                        time
                    });
                }
            break;
            case "startChannel3":
                if(startChannel3Btn.disabled == true){
                    channel3.push({
                        key,
                        time
                    });
                }
            break;
            case "startChannel4":
                if(startChannel4Btn.disabled == true){
                    channel4.push({
                        key,
                        time
                    });
                }
            break;
        }

        playSound(key);
    }
    else window.alert("Wrong key!");
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

function startRecording(event){
    currentChannel = event.target.id;

    switch(currentChannel){
        case "startChannel1":
            startChannel1Btn.disabled = true;
            stopChannel1Btn.disabled = false;
            playChannel1Btn.disabled = true;
            startChannel2Btn.disabled = true;
            startChannel3Btn.disabled = true;
            startChannel4Btn.disabled = true;

            while(channel1.length>0){
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

            while(channel2.length>0){
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

            while(channel3.length>0){
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
            startChannel2Btn.disabled = false;
            startChannel3Btn.disabled = false;
            startChannel4Btn.disabled = false;
            if(channel1.length>0){
                playChannel1Btn.disabled = false;
            }
        break;
        case "stopChannel2":
            startChannel2Btn.disabled = false;
            stopChannel2Btn.disabled = true;
            startChannel1Btn.disabled = false;
            startChannel3Btn.disabled = false;
            startChannel4Btn.disabled = false;
            if(channel2.length>0){
                playChannel2Btn.disabled = false;
            }
        break;
        case "stopChannel3":
            startChannel3Btn.disabled = false;
            stopChannel3Btn.disabled = true;
            startChannel1Btn.disabled = false;
            startChannel2Btn.disabled = false;
            startChannel4Btn.disabled = false;
            if(channel3.length>0){
                playChannel3Btn.disabled = false;
            }
        break;
        case "stopChannel4":
            startChannel4Btn.disabled = false;
            stopChannel4Btn.disabled = true;
            startChannel1Btn.disabled = false;
            startChannel2Btn.disabled = false;
            startChannel3Btn.disabled = false;
            if(channel4.length>0){
                playChannel4Btn.disabled = false;
            }
        break;
    }
}

function PlayChannel(event):void{
    switch(event.target.id){
        case "playChannel1":
            channel1.forEach(sound => {
                const timeout = sound.time - channel1[0].time;
                setTimeout(() => playSound(sound.key), timeout);
                playChannel1Btn.disabled = true;
            });

            const x1 = channel1[0].time;
            const y1 = channel1.length;
            const z1 = channel1[y1-1].time;
            //200 sec forced delay
            const a1 = z1 - x1 + 200;

            setTimeout(()=> playChannel1Btn.disabled = false, a1);
        break;
        case "playChannel2":
            channel2.forEach(sound => {
            const timeout = sound.time - channel2[0].time;
            setTimeout(() => playSound(sound.key), timeout);
            playChannel2Btn.disabled = true;
            });

            const x2 = channel2[0].time;
            const y2 = channel2.length;
            const z2 = channel2[y2-1].time;
            //200 sec forced delay
            const a2 = z2 - x2 + 200;

            setTimeout(()=> playChannel2Btn.disabled = false, a2);
        break;
        case "playChannel3":
            channel3.forEach(sound => {
            const timeout = sound.time - channel3[0].time;;
            setTimeout(() => playSound(sound.key), timeout);
            playChannel3Btn.disabled = true;
            });

            const x3 = channel3[0].time;
            const y3 = channel3.length;
            const z3 = channel3[y3-1].time;
            //200 sec forced delay
            const a3 = z3 - x3 + 200;

            setTimeout(()=> playChannel3Btn.disabled = false, a3);
        break;
        case "playChannel4":
            channel4.forEach(sound => {
            const timeout = sound.time - channel4[0].time;;
            setTimeout(() => playSound(sound.key), timeout);
            playChannel4Btn.disabled = true;
            });

            const x4 = channel4[0].time;
            const y4 = channel4.length;
            const z4 = channel4[y4-1].time;
            //200 sec forced delay
            const a4 = z4 - x4 + 200;

            setTimeout(()=> playChannel4Btn.disabled = false, a4);
        break;
    }
}