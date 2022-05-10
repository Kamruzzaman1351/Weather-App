class Weather {
    // constructor
    constructor(city) {
        this.api_key = "8abbfed7abcd6260276c773284fd874c";
        this.city = city;
    }

    // Weather Update
    async getWeather() {
        const wResquest = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.api_key}`);
        const wData = await wResquest.json();
        return wData;
    }
}