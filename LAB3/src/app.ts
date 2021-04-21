export class App {
    opwApiKey = 'd4f238eb17f043fca2a79be91d062376';
    boxNumber: number = 0;
    constructor() {
        this.onClickButton();
        // this.getCityInfo('zakopane');
    }

    onClickButton(){
        const cityInput = <HTMLInputElement>document.getElementById('cityButton');
        cityInput.addEventListener('click', (ev:Event) => this.getCityName())
    }

    //info z api dot CityName
    getCityName(){
        const cityInput = <HTMLInputElement>document.getElementById('cityName');
        const city = cityInput.value;
        console.log(city);
        //wpisanie parametru do innej funkcji
        this.getCityWeather(city);
    }

    //tu info z api dot weather
    async getCityWeather(city: string) {
        const weather = await this.getWeather(city);

        //pobieranie danych z jsona
        const name = weather.name;
        const temp = Math.round(weather.main.temp - 273.15).toString();
        const sky = weather.weather[0].main;
        const pressure = weather.main.pressure;
        const humidity = weather.main.humidity;

        //tworzenie szkieletu
        const weatherBox = document.createElement('div');
        weatherBox.className = 'weatherBoxClass'
        weatherBox.setAttribute("id","weatherBoxId");
        const weatherCityName = document.createElement('h1');
        const weatherCityTemp = document.createElement('p');
        const weatherCitySky = document.createElement('p');
        const weatherCityPressure = document.createElement('p');
        const weatherCityHumidity = document.createElement('p');

        //dodanie styli do szkieletu
        weatherBox.classList.add('weatherBox');

        //uzupelnienie szkieletu danymi
        weatherCityName.innerHTML = name;
        weatherCityTemp.innerHTML = "Temp: " + temp +"&deg;C";
        weatherCitySky.innerHTML = sky;
        weatherCityPressure.innerHTML = "Pressure: " + pressure + " hPA";
        weatherCityHumidity.innerHTML = "Humidity: " + humidity + "%";

        //wrzucenie szkieletu z danymi na strone
        const space = document.getElementById('weathers');
        space.appendChild(weatherBox);
        weatherBox.appendChild(weatherCityName);
        weatherBox.appendChild(weatherCityTemp);
        weatherBox.appendChild(weatherCitySky);
        weatherBox.appendChild(weatherCityPressure);
        weatherBox.appendChild(weatherCityHumidity);

        //zapisanie do pamieci
        this.saveData(weather);

    }

    async getWeather(city: string): Promise<any> {
        const openWeatherUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${this.opwApiKey}`;
        const weatherResponse = await fetch(openWeatherUrl);
        const weatherData = await weatherResponse.json();
        console.log(weatherData);
        return weatherData;
    }

    //zapis do pamieci
    saveData(data: any) {
        //jakas petla do weatherData/ zmienna globalna do ilosci uzyc
        localStorage.setItem('weatherData', JSON.stringify(data));
    }

    //wyciaganie z pamieci
    getData() {
        const data = localStorage.getItem('weatherData');
        if (data) {
            return JSON.parse(data);
        } else {
            return {};
        }
    }
}