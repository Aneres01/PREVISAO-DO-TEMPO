document.addEventListener('DOMContentLoaded', function() {
    const submitBtn = document.getElementById('submit-btn');
    const cityInput = document.getElementById('city-input');
    const weatherInfo = document.getElementById('weather-info');

    submitBtn.addEventListener('click', function() {
        const city = cityInput.value.trim();
        if (city === '') {
            alert('Por favor, digite o nome da cidade.');
            return;
        }

        const apiKey = '5b1ba4f3a373ac2bca6526b86726bf0f';
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&long=pt_br`;

        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                const cityName = data.name;
                const temperature = data.main.temp;
                const conditions = data.weather[0].description;
                const weather = `Em ${cityName}: ${temperature}°C, ${conditions}.`;
                weatherInfo.textContent = weather;
            })
            .catch(error => {
                console.error('Error fetching weather data:', error);
                weatherInfo.textContent = 'Erro ao buscar previsão do tempo.';
            });
    });
});


