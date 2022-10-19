import React from "react";
import {
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
          className="w-20"
          src="http://openweathermap.org/img/wn/01d@2x.png"
          alt=""
        />
        <p className="text-5xl text-white">34°</p>
        <div className="flex flex-col space-y-2">
          <div className="flex font-light text-sm items-center justify-center"></div>
        </div>
      </div>
    </div>
  );
};

export default TemperatureAndDetails;
