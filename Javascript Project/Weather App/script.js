

const search = document.querySelector(".search input");
const btn = document.querySelector(".search button");


const apiUrl ="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const apiKey = "41151816b71880d54ede817918a91253";

async function checkWeather(city){


   

    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    let data = await response.json();



    if (response.status == 404) {
        document.getElementById("err").style.display= "block";
        document.querySelector(".weather").style.display ="none";
    }else{
        document.querySelector("#temp").innerHTML= data.main.temp + `°C`;
        document.querySelector("#humidity").innerHTML= data.main.humidity + `%`;
        document.querySelector("#wind").innerHTML= data.wind.speed + ` km/h`;
        document.querySelector("#city").innerHTML= data.name;

        if (data.weather[0].main == "Clear") {
            document.querySelector(".temp img").src = "images/clear.png"
        }else if(data.weather[0].main == "Clouds"){
            document.querySelector(".temp img").src = "images/clouds.png"
        }else if(data.weather[0].main == "Drizzle"){
            document.querySelector(".temp img").src = "images/drizzle.png"
        }else if(data.weather[0].main == "Mist"){
            document.querySelector(".temp img").src = "images/mist.png"
        }else if(data.weather[0].main == "Rain"){
            document.querySelector(".temp img").src = "images/rain.png"
        }else if(data.weather[0].main == "Snow"){
            document.querySelector(".temp img").src = "images/snow.png"
        }else if(data.weather[0].main == "Haze"){
            document.querySelector(".temp img").src = "images/mist.png"
        }
    
        document.querySelector(".weather").style.display ="block";
        document.getElementById("err").style.display= "none";
    }

//     if (search.value === "Dimla") {
//         document.querySelector(".weather").style.display ="block";
//         document.querySelector(".temp img").style.display ="none";
//         document.querySelector(".otherInfo").style.display ="none";
//         document.getElementById("err").style.display= "none";
//         document.getElementById("dimla").style.display= "block";
//         document.querySelector("#temp").style.display= "none";
//         document.querySelector("#city").style.display= "none";
// }


    console.log(data);

}



btn.addEventListener("click", () => {
    checkWeather(search.value);
})


search.addEventListener("keypress", (event)=>{
    if (event.key === "Enter") {
        event.preventDefault();
        btn.click();
      }
})

