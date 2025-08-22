import WeatherCard from "../components/Weathercard"
import { useState,useEffect } from "react";
import "../css/custom.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer1 from "../components/Footer";
import LogoutButton from "../components/LogoutButton";
import logo1 from "../images/logo1.png";
import citiesdata from "../files/cities.json"

function Home()
{

    const [cities,setCities] = useState([]);
    const [weather,setWeather] = useState([]);

//file reading
  //  useEffect(() => {
  //  fetch("../cities.json")   
  //    .then(res => res.json())
  //    .then(json => setCities(json.List))
  //    .catch(err => console.error("Loading Error:", err));
  //}, []);

  useEffect(()=>{

  setCities(citiesdata.List)

  },[])



// Checking city data is loaded
    useEffect(()=>{
    if (cities) {
      console.log(cities);
     }
    },[cities]);

   

// Loading weather data     
   useEffect(() => {
  if (cities.length === 0) return;

  const API_KEY = "263dac9b4504884ba9de0fa66682c8fc";

  const cachedData = localStorage.getItem("CachedD");
  const cachedTime = localStorage.getItem("CachedT");
  const now = Date.now();

  if (cachedData && cachedTime && now - cachedTime < 5 * 60 * 1000) {
    setWeather(JSON.parse(cachedData));
    console.log("Weather data (from cache):", JSON.parse(cachedData));
    return;
  }


  Promise.all(
    cities.map(city =>
      fetch(`https://api.openweathermap.org/data/2.5/weather?id=${city.CityCode}&units=metric&appid=${API_KEY}`)
        .then(res => res.json())
    )
  )
    .then(results => {
      setWeather(results); // array of weather objects

      localStorage.setItem("CachedD", JSON.stringify(results));
      localStorage.setItem("CachedT", now.toString());

      console.log("Weather data (new):", results);
    })
    .catch(err => console.error("Loading Error:", err));
}, [cities]);


//retriving needed data
useEffect(()=>{

console.log(weather)  
console.log(weather[1]?.name);
console.log(weather[1]?.main.temp);
console.log(weather[1]?.weather[0].description);

},[weather])

  



return(
<div className="body">
<div style={{ display: "flex", justifyContent: "flex-end", marginRight:"30px", marginTop:"20px"}}>
  <LogoutButton />
</div>
 

<div style={{ display: "flex", alignItems: "center", gap: "10px",  justifyContent: "center"}}>
  <img src={logo1} width="60px" alt="logo" className="logo" />
  <h1>Weather Freak</h1>
</div>


<br></br>

    
        
 <div className="container" style={{marginBottom:"100px"}}>
  <div className="row g-3 justify-content-center">
    {weather.map((city, idx) => (
      <div className="col-12 col-md-5" key={city.id || idx}>
        <WeatherCard city={city} />
      </div>
    ))}
  </div>
</div>

           

 
       
      

<Footer1/>
</div>
)
}

export default Home