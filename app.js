// Init Weather
const weather = new Weather("Dhaka");
// Init UI
const ui = new UI;

// Event Listner
document.addEventListener("DOMContentLoaded", weatherReport);


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