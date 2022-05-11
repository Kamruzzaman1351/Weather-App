class Weather extends WeatherM {
    // constructor
    constructor(city) {
        super(city)
    }

    // Weather Update
    async getWeather() {
        const wResquest = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.returnAppKey()}`);
        const wData = await wResquest.json();
        return wData;
    }
    // Change City
    changeCity(city) {
        this.city =city;
    }
}