const apiKey = "aee48b65098ebe742144c48250c1805d";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox  = document.querySelector(".search input");
const searchBtn  = document.querySelector(".search button");
const icon = document.querySelector(".weather-icon")


async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    // var data = await response.json();

    if(!response.ok){
         
        document.querySelector(".weather").style.display="none"
    } else {
  
        var data = await response.json();
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp)+ "°c";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

        if(data.weather[0].main == 'Clouds'){
             icon.src = "images/clouds.png"
        } else if (data.weather[0].main == 'Clear'){
            icon.src= "images/clear.png"

        } else if (data.weather[0].main == 'Rain'){
            icon.src  = "images/rain.png"

        }else if (data.weather[0].main == 'Drizzle'){
            icon.src  = "images/drizzle.png"

        }else if (data.weather[0].main == 'Mist'){
            icon.src  = "images/mist.png"

        }

        document.querySelector(".weather").style.display = "block"
        document.querySelector(".error").style.display="none";

    }




}

searchBox.addEventListener('keypress', (e)=>{

     if(e.key == "Enter"){ 
        const city = searchBox.value.trim();  
        if (city) {
            checkWeather(city);  
        } else {
            alert("Please enter a city name.");
        }
    }
})

searchBtn.addEventListener('click', ()=>{

     
       const city = searchBox.value.trim();  
       if (city) {
           checkWeather(city);  
       } else {
           alert("Please enter a city name.");
       }
   
})
checkWeather();