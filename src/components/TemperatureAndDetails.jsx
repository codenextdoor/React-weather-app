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
import { formatToLocalTime, iconUrlFromCode } from "../services/weatherService";

function TemperatureAndDetails({
  weather: {
    details,
    icon,
    temp,
    temp_min,
    temp_max,
    sunrise,
    sunset,
    speed,
    humidity,
    feels_like,
    timezone,
  },
}) {
  return (
    <div>
      <div className="flex justify-center items-center py-6 text-xl text-cyan-300">
        <p>{details}</p>
      </div>
      <div className="flex flex-row items-center justify-center justify-between py-3">
        <img className="w-20 mr-3" src={iconUrlFromCode(icon)} alt="" />
        <p className="text-5xl text-white ml-14">{`${temp.toFixed()}°`}</p>
        <div className="flex flex-col space-y-2">
          <div className="flex font-light text-sm items-center justify-center ml-5">
            <UilTemperature size={18} className="mr-1 text-white" />
            <p className="text-white">Realfeel: </p>{" "}
            <span className="text-white ml-1 font-medium">
              {" "}
              {feels_like.toFixed()}°
            </span>
          </div>

          <div className="flex font-light text-sm items-center justify-center ml-5">
            <UilTear size={18} className="mr-1 text-white" />
            <p className="text-white">Humidity: </p>{" "}
            <span className="text-white ml-1 font-medium">
              {humidity.toFixed()}%
            </span>
          </div>
          <div className="flex font-light text-sm items-center justify-center ml-5">
            <UilWind size={18} className="mr-1 text-white" />
            <p className="text-white">Wind: </p>{" "}
            <span className="text-white ml-1 font-medium">
              {" "}
              {speed.toFixed()} km/h
            </span>
          </div>
        </div>
      </div>

      <div className="flex flex-row items-center justify-center space-x-2 text-white text-sm py-3">
        <UilSun />
        <p className="font-light">
          Rise: <span>{formatToLocalTime(sunrise, timezone, "hh:mm a")}</span>
        </p>
        <p className="font-light">|</p>
        <UilSunset />
        <p className="font-light">
          Set: <span>{formatToLocalTime(sunset, timezone, "hh:mm a")}</span>
        </p>
        <p className="font-light">|</p>
        <UilArrowUp />
        <p className="font-light">
          High: <span> {temp_max.toFixed()}°</span>
        </p>
        <p className="font-light">|</p>
        <UilArrowDown />
        <p className="font-light">
          Low: <span> {temp_min.toFixed()}°</span>
        </p>
      </div>
    </div>
  );
}

export default TemperatureAndDetails;
