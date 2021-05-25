export class App {
    boxNumber: number = 0;


    constructor() {
        this.onClickButton();
        // this.fetchFromStorage("T");
        // //odswiezanie co 1 min
        // setInterval(()=> this.fetchFromStorage("N"),60000);
    }

//     //dodanie miasta przez button lub enter
    onClickButton(){
        const addByBtn = <HTMLInputElement>document.getElementById('addBtn');
        addByBtn.addEventListener('click', (ev:Event) => this.getNote());

        const addByEnter = document.body;
        addByEnter.addEventListener('keydown', (ev:KeyboardEvent) => {
            if(ev.key === 'Enter'){
                this.getNote();
            }
        });
    }

    //pobieranie danych z inputa i wywolywanie createNote
    getNote(){
        const noteTitle = <HTMLInputElement>document.getElementById('title');
        const title = noteTitle.value;

        const noteDescription = <HTMLInputElement>document.getElementById('description');
        const description = noteDescription.value;

        this.createNote(title,description);
    }

    createNote(title:string,description:string){

        //tworzenie szkieletu
        const noteBox = document.createElement('div');
        noteBox.className = 'noteBoxClass'
        noteBox.setAttribute("id","noteBoxId" + this.boxNumber);
        const noteBoxTitle = document.createElement('h1');
        const noteBoxDescription = document.createElement('p');

        //dodanie styli do szkieletu
        noteBox.classList.add('noteBox');

        //uzupelnienie szkieletu danymi
        noteBoxTitle.innerHTML = title;
        noteBoxDescription.innerHTML = description;

        //wrzucenie szkieletu z danymi na strone
        const space = document.getElementById('notes');
        space.appendChild(noteBox);
        noteBox.appendChild(noteBoxTitle);
        noteBox.appendChild(noteBoxDescription);

        //czyszczenie inputa i zapisanie do pamieci
        const noteTitle = <HTMLInputElement>document.getElementById("title");
        const noteDescription = <HTMLInputElement>document.getElementById("description");
        noteTitle.value = "";
        noteDescription.value="";
        this.saveData(title,description);
    }

    //tworzenie nowego okna pogodowego i zapis do local storage
//     async getCityWeather(city: string) {
//         const weather = await this.getWeather(city);

//         //pobieranie danych z jsona
//         const name = weather.name;
//         const img =  `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`;
//         const temp = Math.round(weather.main.temp - 273.15).toString();
//         const sky = weather.weather[0].main;
//         const pressure = weather.main.pressure;
//         const humidity = weather.main.humidity;

//         //tworzenie szkieletu
//         const weatherBox = document.createElement('div');
//         weatherBox.className = 'weatherBoxClass';
//         weatherBox.setAttribute("id","weatherBoxId" + this.boxNumber);
//         const weatherCityName = document.createElement('h1');
//         const weatherCityImg = document.createElement('img');
//         const weatherCityTemp = document.createElement('p');
//         const weatherCitySky = document.createElement('p');
//         const weatherCityPressure = document.createElement('p');
//         const weatherCityHumidity = document.createElement('p');

//         //dodanie styli do szkieletu
//         weatherBox.classList.add('weatherBox');

//         //uzupelnienie szkieletu danymi
//         weatherCityName.innerHTML = name;
//         weatherCityImg.src = img;
//         weatherCityTemp.innerHTML = "Temp: " + temp +"&deg;C";
//         weatherCitySky.innerHTML = "Sky: " + sky;
//         weatherCityPressure.innerHTML = "Pressure: " + pressure + " hPA";
//         weatherCityHumidity.innerHTML = "Humidity: " + humidity + "%";

//         //wrzucenie szkieletu z danymi na strone
//         const space = document.getElementById('weathers');
//         space.appendChild(weatherBox);
//         weatherBox.appendChild(weatherCityName);
//         weatherBox.appendChild(weatherCityImg);
//         weatherBox.appendChild(weatherCityTemp);
//         weatherBox.appendChild(weatherCitySky);
//         weatherBox.appendChild(weatherCityPressure);
//         weatherBox.appendChild(weatherCityHumidity);

//         //czyszczenie inputa i zapisanie do pamieci
//         const cityInput = <HTMLInputElement>document.getElementById("cityName");
//         cityInput.value = "";
//         this.saveData(weather);

//     }

//     fetchFromStorage(yesOrNo:string){
//         this.deleteWindows();
//         const tab = localStorage.length;

//         for (let i = 1; i < tab; i++) {
//             let nazwa;
//             nazwa = localStorage.getItem("weatherData" +i);
//             const nazwa2= JSON.parse(nazwa);
//             if(yesOrNo ==="T"){
//             this.getCityWeatherFromStorage(nazwa2,"T");
//             }
//             else{
//                 this.getCityWeatherFromStorage(nazwa2,"N");
//             }
//         }
//     }

//     //pobieranie z localStorage
//     async getCityWeatherFromStorage(nazwa:any,yesOrNo:string) {

//         const weather = await this.getWeather(nazwa.name);

//         //pobieranie danych z jsona
//         const name = weather.name;
//         const img =  `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`;
//         const temp = Math.round(weather.main.temp - 273.15).toString();
//         const sky = weather.weather[0].main;
//         const pressure = weather.main.pressure;
//         const humidity = weather.main.humidity;

//         //tworzenie szkieletu
//         const weatherBox = document.createElement('div');
//         weatherBox.className = 'weatherBoxClass'
//         weatherBox.setAttribute("id","weatherBoxId" + this.boxNumber);
//         const weatherCityName = document.createElement('h1');
//         const weatherCityImg = document.createElement('img');
//         const weatherCityTemp = document.createElement('p');
//         const weatherCitySky = document.createElement('p');
//         const weatherCityPressure = document.createElement('p');
//         const weatherCityHumidity = document.createElement('p');

//         //dodanie styli do szkieletu
//         weatherBox.classList.add('weatherBox');

//         //uzupelnienie szkieletu danymi
//         weatherCityName.innerHTML = name;
//         weatherCityImg.src = img;
//         weatherCityTemp.innerHTML = "Temp: " + temp +"&deg;C";
//         weatherCitySky.innerHTML = "Sky: " + sky;
//         weatherCityPressure.innerHTML = "Pressure: " + pressure + " hPA";
//         weatherCityHumidity.innerHTML = "Humidity: " + humidity + "%";

//         //wrzucenie szkieletu z danymi na strone
//         const space = document.getElementById('weathers');
//         space.appendChild(weatherBox);
//         weatherBox.appendChild(weatherCityName);
//         weatherBox.appendChild(weatherCityImg);
//         weatherBox.appendChild(weatherCityTemp);
//         weatherBox.appendChild(weatherCitySky);
//         weatherBox.appendChild(weatherCityPressure);
//         weatherBox.appendChild(weatherCityHumidity);

//         //czyszczenie inputa
//         const cityInput = <HTMLInputElement>document.getElementById("cityName");
//         cityInput.value = "";
//         //jesli T to zapisuje do pamieci- N nie zapisuje
//         if(yesOrNo === "T")
//         this.saveData(weather);

//     }

    //zapis do local storage
    saveData(title: any,description: any) {
        this.boxNumber++;
        localStorage.setItem('noteData' + this.boxNumber, JSON.stringify({title,description}));
    }

//     //wyciaganie z pamieci
//     getData() {
//         const data = localStorage.getItem('weatherData');
//         if (data) {
//             return JSON.parse(data);
//         } else {
//             return {};
//         }
//     }

//     //usuawnie okienek
//     deleteWindows(){
//         const div= document.getElementById('weathers');
//         div.textContent = "";
//     }
}