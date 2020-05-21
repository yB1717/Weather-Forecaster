class Weather{
    constructor(){
        this.api_key = '39fbf702866d1bd7b9e8bc3b81a5ffdb';
    }

    async getWeather(state , city){
        const weatherResponse = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${state}&units=metric&appid=${this.api_key}`);
        const weatherData = await weatherResponse.json();
        return weatherData;
    }
}