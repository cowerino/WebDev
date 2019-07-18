var weatherData;
var request = new XMLHttpRequest();
var date = new Date();

loadData();

function loadData() {
    
    request.open('GET', 'http://api.openweathermap.org/data/2.5/forecast/daily?q=Salt+Lake+City,us&cnt=6&units=imperial&cnt=5&appid=846d3b48355b6e95813bed8fb29f0fb3');
    request.onload = loadComplete;
    request.send();
}

function loadComplete(evt) {
    weatherData = JSON.parse(request.responseText);
    console.log(weatherData);
    document.getElementById("place").innerHTML = weatherData.city.name;
    document.getElementById("day").innerHTML = (date.getMonth()+1) + "/" + date.getDate();
    document.getElementById("currentTemp").innerHTML = weatherData.list[0].temp.day+"°F";
    document.getElementById("conditions").innerHTML = weatherData.list[0].weather[0].main;
    document.getElementById("conditionsDesc").innerHTML = weatherData.list[0].weather[0].description;  
}

