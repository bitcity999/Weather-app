let weather = {
    apiKey : "25181cf3e233fa69cf67e5b5ead4fdb1",
    fetchWeather : function (city) {
        fetch(
           `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.apiKey}`
        )
        .then((response) => response.json())
        .then((data) => this.displayWeather(data))
    },
    displayWeather : function (data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity, pressure } = data.main;
        const { speed } = data.wind;

        // convert temperature from Kelvin to Celcius

        let conTemp = Math.round(temp - 273.15) 

        document.getElementById("loc-city").innerText = name
        document.querySelector(".wth-ico").src = "https://openweathermap.org/img/wn/" + icon + ".png"
        document.querySelector(".discrp").innerText = description
        document.getElementById("temp").innerText = conTemp
        document.getElementById("humid").innerText = `${humidity}%`
        document.getElementById("win-spd").innerText = `${speed}Km/h`
        document.getElementById("pressure").innerText = `${pressure}hPa`
    },
    search : function () {
        this.fetchWeather(document.querySelector(".srch-bar").value)
    }
}

document
    .querySelector(".srch-btn")
    .addEventListener("click", function () {
        weather.search();
})

document
    .querySelector(".srch-bar")
    .addEventListener("keyup", function (event) {
        if (event.key == "Enter") {
            weather.search();
        }
})

window.onload(weather.fetchWeather("Los Angeles"))


