class LocalStorage{
    constructor(){
        this.weather = new Weather;
        this.ui = new UI;
    }

    addItem(state,city){
        localStorage.setItem("state" , state);
        localStorage.setItem("city",city);
    }

    getItem(){
        const state = localStorage.getItem("state");
        const city = localStorage.getItem("city");
        this.weather.getWeather(state,city)
        .then(data => {
            //Show Weather
            this.ui.showWeather(data,state,city);
        });
    }
}