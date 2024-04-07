const city_name=document.getElementById("city-value");
const but=document.getElementById("but");


async function data(city){
 
    const id="55817f51020c78008faff02db5ac9b69";
    const url="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
    const response = await fetch(url+city+`&appid=${id}`);
    if(response.status!=404)
    {
    const values= await response.json();
    document.querySelector(".error").style.display="none";
    document.getElementById("temp").innerHTML=values.main.temp+"°C";
    document.getElementById("city").innerHTML=values.name;
    document.getElementById("humidity").innerHTML=values.main.humidity+"%";
    document.getElementById("wind").innerHTML=values.wind.speed+"Km/h";
    console.log(values);
    document.querySelector(".info").style.display="block";
    if(values.weather[0].main=='Clouds')
    {
        document.getElementById("wicon").innerHTML='🌥️';
    }
    else if(values.weather[0].main=='Clear'){
        document.getElementById("wicon").innerHTML='☀️';
    }
    else if(values.weather[0].main=='Rain'){
        document.getElementById("wicon").innerHTML='🌧️';
    }
    else if(values.weather[0].main=='Drizzle'){
        document.getElementById("wicon").innerHTML='🌦️';
    }
    else if(values.weather[0].main=='Mist'){
        document.getElementById("wicon").innerHTML='🌨️';

    }
    else if(values.weather[0].main=='Snow'){
        document.getElementById("wicon").innerHTML='🌨️';
    }
    else if(values.weather[0].main=='Wind'){
        document.getElementById("wicon").innerHTML='🌪️';
    }

}
else
{
    document.querySelector(".info").style.display="none";

    document.querySelector(".error").style.display="block";
}

}

but.addEventListener("click",()=>
{
data(city_name.value);
city_name.value="";
})
