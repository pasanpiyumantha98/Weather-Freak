import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import cloud from "../images/cloud.png"
import clear from "../images/clear.png"
import rain from "../images/rain.png"

function WeatherCard({city})
{

  // Setting color for cards based on tempreture
  let color;

  if(city?.main.temp>30)
  {
   color="#cf5555ff";
  } else if(city?.main.temp>20)
  {
   color="#c6ce6eff";
  }
  else if(city?.main.temp>10)
  {
   color="#64aadcff";
  }
   else if(city?.main.temp>0)
  {
   color="#619d25ff";
  } else
  {
     color="#9cee49ff";
  }

// Setting icons for cards based on weather
let imgtype

if(city?.weather[0].main==="Clear")
{
  imgtype=clear;
}else if(city?.weather[0].main==="Rain")
{
  imgtype=rain;
}
else
{
  imgtype=cloud;
}


    return(

     <div className="card shadow border-0 text-white" style={{ backgroundColor: color}}>
      <div className="row text-center align-items-center">
    <h4 className="card-title" style={{marginTop:"20px"}}>{city.name}, {city.sys.country}</h4>
   
    <div className="col">
      <img src={imgtype} width="40px"></img>
      <p className="mb-1">{city?.weather[0].main}</p>
      <small>{city?.weather[0].description}</small>
    </div>
    
    
    <div className="col">
      <h1 className="display-4">{city?.main.temp}°C</h1>
    </div>
    
   

    </div>
     
    
    </div>


    )



}
export default WeatherCard