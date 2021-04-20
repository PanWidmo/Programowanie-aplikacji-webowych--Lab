export class App {
    opwApiKey = '50d53005c0fd5f556bb4ef15224c4209';
    constructor() {
        this.getCityInfo('zakopane')
    }
<<<<<<< HEAD

    onClickButton(){
        const cityInput = <HTMLInputElement>document.getElementById('cityButton');
        cityInput.addEventListener('click', (ev:Event) => this.getCityName())
    }

<<<<<<< HEAD
=======

>>>>>>> 12d13f29920f13ee534b574d0b5b29cf545c75ed
    //info z api dot CityName
    getCityName(){
        const cityInput = <HTMLInputElement>document.getElementById('cityName');
        const city = cityInput.value;
        console.log(city);
<<<<<<< HEAD
        // wpisanie parametru do innej funkcji
=======
        //tu wpisanie parametru do innej funkcji
>>>>>>> 12d13f29920f13ee534b574d0b5b29cf545c75ed
        this.getCityInfo(city);
    }

    //info z api dot weather
=======
>>>>>>> parent of 7791e3b... Test03
    async getCityInfo(city: string) {
        const weather = await this.getWeather('zakopane');
        this.saveData(weather);
    }
    async getWeather(city: string): Promise<any> {
        const openWeatherUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${this.opwApiKey}`;
        const weatherResponse = await fetch(openWeatherUrl);
        const weatherData = await weatherResponse.json();
        console.log(weatherData);
        return weatherData;
    }
    saveData(data: any) {
        localStorage.setItem('weatherData', JSON.stringify(data));
    }
    getData() {
        const data = localStorage.getItem('weatherData');
        if (data) {
            return JSON.parse(data);
        } else {
            return {};
        }
    }
}