import React from "react";
import {
  UilArrowUp,
  UilArrowDown,
  UilTemperature,
  UilTear,
  UilWind,
  UilSun,
  UilSunset,
} from "@iconscout/react-unicons";

const TemperatureAndDetails = () => {
  return (
    <div>
      <div className="flex justify-center items-center py-6 text-xl text-cyan-300">
        <p>Sunny</p>
      </div>
      <div className="flex flex-row items-center justify-center justify-between py-3">
        <img
          className="w-20 mr-3"
          src="http://openweathermap.org/img/wn/01d@2x.png"
          alt=""
        />
        <p className="text-5xl text-white ml-14">34°</p>
        <div className="flex flex-col space-y-2">
          <div className="flex font-light text-sm items-center justify-center ml-5">
            <UilTemperature size={18} className="mr-1 text-white" />
            <p className="text-white">Realfeel: </p>{" "}
            <span className="text-white ml-1 font-medium"> 32°</span>
          </div>
          <div className="flex font-light text-sm items-center justify-center ml-5">
            <UilTear size={18} className="mr-1 text-white" />
            <p className="text-white">Humidity: </p>{" "}
            <span className="text-white ml-1 font-medium"> 65%</span>
          </div>
          <div className="flex font-light text-sm items-center justify-center ml-5">
            <UilWind size={18} className="mr-1 text-white" />
            <p className="text-white">Wind: </p>{" "}
            <span className="text-white ml-1 font-medium"> 11 km/h</span>
          </div>
        </div>
      </div>

      <div className="flex flex-row items-center justify-center space-x-2 text-white text-sm py-3">
        <UilSun />
        <p className="font-light">
          Rise: <span>06:45am</span>
        </p>
      </div>
    </div>
  );
};

export default TemperatureAndDetails;
