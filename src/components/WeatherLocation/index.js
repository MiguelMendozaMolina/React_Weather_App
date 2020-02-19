import React, { Component } from 'react';
import transformWeather from './../../services/transformWeather';
import {api_weather} from './../../constans/api_url';
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css';

import {
    SUN,
} from './../../constans/weathers';

const data = {
    temperature: 20,
    wheatherState: SUN,
    humidity: 10,
    wind: '10 m/s',

}


class WeatherLocation extends Component {

    constructor(){
        super();
        this.state = {
                city: 'Buenos Aires',
                data: data,
        };
    }
    
    

    handleUpdateClick = () => {
        /* consulta a la api
        fetch es una consulta sin librerias 
        funciona solo en navegadores modernos */
        
        fetch(api_weather) 
        .then(resolve => {
      
            return resolve.json();
        }).then(data => {
            const newWeather = transformWeather(data);
            console.log(newWeather);
           // debugger;
            this.setState({
               data: newWeather
            });
        });
    }
    render() {
        const {city , data} = this.state // destructuración de datos 
        return (
            <div className="weatherLocationCont">
                <Location city={city} />
                <WeatherData data={data} />
                <button onClick={this.handleUpdateClick}>Actualizar</button>
            </div>
        );
    }
}


export default WeatherLocation;