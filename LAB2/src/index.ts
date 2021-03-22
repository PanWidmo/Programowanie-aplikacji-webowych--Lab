document.body.addEventListener('keypress',onKeyDown);
const sound1:HTMLAudioElement = document.querySelector('[data-sound="boom"]');
const sound2:HTMLAudioElement = document.querySelector('[data-sound="clap"]');
const sound3:HTMLAudioElement = document.querySelector('[data-sound="hithat"]');
const sound4:HTMLAudioElement = document.querySelector('[data-sound="kick"]');
const sound5:HTMLAudioElement = document.querySelector('[data-sound="openhat"]');
const sound6:HTMLAudioElement = document.querySelector('[data-sound="ride"]');
const sound7:HTMLAudioElement = document.querySelector('[data-sound="snare"]');
const sound8:HTMLAudioElement = document.querySelector('[data-sound="tink"]');
const sound9:HTMLAudioElement = document.querySelector('[data-sound="tom"]');
const chanel1:any[]=[];

//dodac walidacje dla capslocka (alert, ze jest wlaczony i poprosic o wylaczenie?)

function onKeyDown(ev:KeyboardEvent): void {
    //console.log(ev);

    const key=ev.key;
    const time=ev.timeStamp;

    if(key=="q" || key=="w" || key=="e" || key=="a" || key=="s" || key=="d" || key=="z" || key=="x" || key=="c"){
    chanel1.push({
        key,
        time
    });

    playSound(key);
    console.log(chanel1);

}
    else window.alert("Wrong key!");

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
}
