//Init Weather
const weather = new Weather;
//Init UI
const ui = new UI;
//Init Local Storage
const ls = new LocalStorage;

//Button selector
const changeLocation = document.querySelector('#change-location');
//State input
const state = document.getElementById('state');
//City input
const city = document.getElementById('city');


//DOM content loaded
document.addEventListener('DOMContentLoaded',() => {
    ls.getItem();
});

//change Location event listener
changeLocation.addEventListener('click' , () =>{
    if(state.value !== '' && city.value !== ''){
        // Make Http request to api
        weather.getWeather(state.value,city.value)
        .then(data =>  {
            if(data.message !== 'city not found'){
                //Add data to local storage
                ls.addItem(state.value,city.value);
                //Show Weather
                ui.showWeather(data,state.value,city.value);
            }else{
                //Show alert city not found
                ui.showAlert('City not found');
            }
        });
    }else{
        //Show alert fields missing
        ui.showAlert('Fields missing');
    }
});