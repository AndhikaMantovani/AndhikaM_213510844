// Widget Cuaca
function getWeatherData() {
    // Simulasikan pengambilan data cuaca dari API
    const weatherData = {
        temperature: '25°C',
        condition: 'Cerah',
        humidity: '70%',
    };

    return weatherData;
}

function displayWeatherData() {
    const weatherData = getWeatherData();
    const weatherDataElement = document.getElementById('weather-data');

    weatherDataElement.innerHTML = `
        <p>Suhu: ${weatherData.temperature}</p>
        <p>Kondisi: ${weatherData.condition}</p>
        <p>Kelembaban: ${weatherData.humidity}</p>
    `;
}

// Widget Lokasi
function getLocationData() {
    // Simulasikan pengambilan data lokasi dari API
    const locationData = {
        latitude: '0.0000',
        longitude: '0.0000',
        city: 'Jakarta',
        country: 'Indonesia',
    };

    return locationData;
}

function displayLocationData() {
    const locationData = getLocationData();
    const locationDataElement = document.getElementById('location-data');

    locationDataElement.innerHTML = `
        <p>Kota: ${locationData.city}</p>
        <p>Negara: ${locationData.country}</p>
        <p>Koordinat: ${locationData.latitude}, ${locationData.longitude}</p>
    `;
}

// Widget Stopwatch
let stopwatchInterval;
let stopwatchTime = 0;

function startStopwatch() {
    stopwatchInterval = setInterval(updateStopwatch, 10);
}

function stopStopwatch() {
    clearInterval(stopwatchInterval);
}

function resetStopwatch() {
    stopwatchTime = 0;
    updateStopwatch();
}

function updateStopwatch() {
    const stopwatchDataElement = document.getElementById('stopwatch-data');
    const milliseconds = String(stopwatchTime % 100).padStart(2, '0');
    const seconds = String(Math.floor((stopwatchTime / 100) % 60)).padStart(2, '0');
    const minutes = String(Math.floor((stopwatchTime / 6000) % 60)).padStart(2, '0');
    const hours = String(Math.floor((stopwatchTime / 360000) % 24)).padStart(2, '0');

    stopwatchDataElement.textContent = `${hours}:${minutes}:${seconds}.${milliseconds}`;

    stopwatchTime += 10;
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    displayWeatherData();
    displayLocationData();

    document.getElementById('start-btn').addEventListener('click', startStopwatch);
    document.getElementById('stop-btn').addEventListener('click', stopStopwatch);
    document.getElementById('reset-btn').addEventListener('click', resetStopwatch);
});
