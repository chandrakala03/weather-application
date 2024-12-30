var inputdata = document.querySelector(".input");
var weatherCondition = document.querySelector(".condition")
var temp = document.querySelector(".temp");
var desc = document.querySelector(".desc");
var wind = document.querySelector(".windspeed");
var img = document.querySelector(".images");
var msg = document.querySelector(".display")
var apikey ="f757a902089222dc7fd810c5ff14a310";

function input(e){
        e.preventDefault();
        var  inputvalue = document.querySelector(".inputvalue") ;
        var word = inputvalue.value.toLowerCase() ;
       fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${word}&appid=${apikey}`
        ).then((res)=>{
            data = res.json()
            data.then((data)=>{
                console.log(data)
                console.log(data.main.temp)
                weathericon=data.weather[0].main;
                temperature=parseInt(data.main.temp-273.15);
                windspeed = data.wind.speed ;
                description=data.weather[0].description;
                temp.innerHTML=`<h3>${temperature}<sup>oc</sup></h3>`
                wind.innerHTML=`<h4><small>windspeed:<br>${windspeed}k/m</small></h4>`
                wind.style.fontSize="18px"
                desc.innerHTML=description;
                displayIcon(weathericon)
                
            
            })
            })
        }
inputdata.addEventListener("click",input)
function displayIcon(icon){

    switch (icon){
        case "Clear":
            img.src="./images/Clear.png";
            img.style.display ="block";
            break ;
        case "Clouds":
            img.src="./images/Clouds.png";
            img.style.display ="block";
            break ;
        case "Drizzle":
            img.src="./images/Drizzle.png";
            img.style.display ="block";
            break ;
        case "Dust":
            img.src="./images/Dust.png";
            img.style.display ="block";
            break ;
        case "Fog":
            img.src="./images/Fog.png";
            img.style.display ="block";
            break ;
        case "Freezing rain":
            img.src="./images/Freezing rain.png";
            img.style.display ="block"
            break ;
        case "Haze":
            img.src="./images/Haze.png";
             img.style.display ="block"
            break ;
        case "Mist":
            img.src="./images/Mist.png";
            img.style.display ="block"
            break ;
        case "Rain":
            img.src="./images/Rain.png";
            img.style.display ="block";
            break ;
        case "Sand":
            img.src="./images/Sand.png";
            img.style.display ="block";
            break ;
        case "Sleet":
            img.src="./images/Sleet.png";
            img.style.display ="block";
            break ;
        case "Smoke":
            img.src="./images/Smoke.png";
            img.style.display ="block";
            break ;
        case "Snow":
            img.src="./images/Snow.png";
            img.style.display ="block";
            break ;
        case "Thunderstorm":
            img.src="./images/Thunderstorm.png";
            img.style.display ="block";
            break ;
        case "Tornado":
            img.src="./images/Tornado.png";
            img.style.display ="block";
            break ;
        
                   
    }
}