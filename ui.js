class UI {
    // constructor
    constructor() {
        this.cityUI = document.getElementById("w-location");
        this.descriptionUI = document.getElementById("w-desc");
        this.descriptionsUI = document.getElementById("w-descs");
        this.tempUI = document.getElementById("w-string");
        this.iconUI = document.getElementById("w-icon");
        this.humidityUI = document.getElementById("w-humidity");
        this.feelsLikeUI = document.getElementById("w-feels-like");
        this.cloudUI = document.getElementById("w-cloud");
        this.airPressureUI = document.getElementById("w-air-pressure");
        this.submitBtnUI = document.getElementById("w-change-btn");
    }

    // Show Weathe Report
    showUI(res) {
        this.cityUI.textContent = `${res.name},${res.sys.country}`;
        this.descriptionUI.textContent = `${res.weather[0].main}`;
        this.descriptionsUI.textContent = `${res.weather[0].description}`;
        this.tempUI.textContent = `${this.toFahrenheit(res.main.temp)} F (${this.toCelsius(res.main.temp)} C)`;
        this.iconUI.setAttribute("src",`http://openweathermap.org/img/wn/${res.weather[0].icon}@2x.png`);
        this.humidityUI.textContent = `Relative Humidity: ${res.main.humidity} %`;
        this.feelsLikeUI.textContent = `Feels Like: ${this.toFahrenheit(res.main.feels_like)} F (${this.toCelsius(res.main.feels_like)} C)`;
        this.cloudUI.textContent = `${res.clouds.all} % of Sky is cover with clouds`;
        this.airPressureUI.textContent = `Air Pressure: ${res.main.pressure} Pa`;
    }


    toCelsius(value) {
        return (value - 273.15).toFixed(1);
    }
    toFahrenheit(value) {
        return (this.toCelsius(value) * (9/5) + 32).toFixed(1);
    }
}