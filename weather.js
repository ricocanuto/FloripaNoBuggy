

// Substitua 'sua_chave_de_api' pela sua chave de API do OpenWeatherMap
const apiKey = '26f72c439aa6533fbe35b3ebaff2bd3c';
const city = 'Florianopolis'; // Substitua por sua cidade
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

// Função para buscar os dados da previsão do tempo
function fetchWeatherData() {
    fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
            const weatherIcon = data.weather[0].icon;
            const temperature = `${data.main.temp}°C`;
            const description = data.weather[0].description;

            // Atualiza a previsão do tempo com os dados da API
            document.querySelector('.weather-icon img').src = `http://openweathermap.org/img/w/${weatherIcon}.png`;
            document.querySelector('.temperature').textContent = temperature;
            document.querySelector('.description').textContent = description;
        })
        .catch((error) => {
            console.error('Erro ao buscar dados de previsão do tempo: ', error);
        });
}

// Chame a função para buscar os dados da previsão do tempo
fetchWeatherData();


