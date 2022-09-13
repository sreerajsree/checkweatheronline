import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <ul>
        <li className="mt-2">
          <FormattedDate date={props.data.date}  />
        </li>
        <li className="text-capitalize mt-2">{props.data.description}</li>
      </ul>
      <div className="row mt-3">
        <div className="col-8">
          <div className="d-flex">
            <div className="float-left">
              <WeatherIcon code={props.data.icon} size={60} />
            </div>
            <div className="float-left">
              <WeatherTemperature celsius={props.data.temperature} />
            </div>
          </div>
        </div>
        <div className="col-4">
          <ul>
            <li>Humidity: {props.data.humidity}%</li>
            <li className="mt-2 mb-4">Wind: {Math.round(props.data.wind)} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
