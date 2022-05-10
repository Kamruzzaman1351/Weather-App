// Init Stroage
const storage = new Storage;
const city = storage.getCity();
// Init Weather
const weather = new Weather(city);
// Init UI
const ui = new UI;
// UI Variables
const submitBtnUI = document.getElementById("w-change-btn");
const cityUI = document.getElementById("city");
// Event Listner
document.addEventListener("DOMContentLoaded", weatherReport);
submitBtnUI.addEventListener("click", changeWeatherLocation);

// Get Weather Data and Show it in the UI
function weatherReport() {
    weather.getWeather()
        .then((res) => {
            ui.showUI(res);
        })
        .catch((err) => {
            console.log(err);
        })
}

// Change Weather Location
function changeWeatherLocation(e) {
    e.preventDefault();
    const city = cityUI.value;
    weather.changeCity(city);
    weatherReport();
    storage.setCity(city)
    // Close Modal
    $('#locModal').modal('hide');
    cityUI.value = '';
}