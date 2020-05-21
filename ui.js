class UI{
    constructor(){
        this.location = document.getElementById('w-location');
        this.desc = document.getElementById('w-desc');
        this.temp = document.getElementById('w-temp');
        this.icon = document.getElementById('w-icon');
        this.humidity = document.getElementById('w-humidity');
        this.pressure = document.getElementById('w-pressure');
        this.feelsLike = document.getElementById('w-feels-like');
        this.wind = document.getElementById('w-wind');
        this.tempMin = document.getElementById('w-tempMin');
        this.tempMax = document.getElementById('w-tempMax');
        
    }

    showWeather(data,state,city){
        this.location.innerHTML = `${state},${city}`;
        this.desc.innerHTML = `${data.weather[0].main}`;
        this.temp.innerHTML = `${data.main.temp}&#8451;`;
        this.icon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
        this.humidity.innerHTML = `Humidity : ${data.main.humidity}%`;
        this.pressure.innerHTML = `Pressure : ${data.main.pressure} hPa`;
        this.feelsLike.innerHTML = `Feels Like : ${data.main.feels_like}&#8451;`;
        this.wind.innerHTML = `Wind Speed : ${data.wind.speed} m/s`;
        this.tempMin.innerHTML = `Minimum Temp : ${data.main.temp_min}&#8451`;
        this.tempMax.innerHTML = `Maximum Temp : ${data.main.temp_max}&#8451`;

    }

    showAlert(message){
        const alertDiv = document.createElement('div');
        alertDiv.className = "row";
        const alertDivChild = document.createElement('div');
        alertDivChild.className = "col-md-6 mx-auto p-2 mt-2 alert alert-dismissible alert-danger rounded";
        alertDivChild.innerHTML = `<h6>${message}</h6>`;
        alertDiv.appendChild(alertDivChild);
        const container = document.querySelector('.container');
        container.insertBefore(alertDiv,document.querySelector('.row'));
        setTimeout(() =>{
            alertDiv.remove();
        },2000);
    }
}