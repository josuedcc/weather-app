import React, {Component} from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import Location from './Location';
import WeatherData from './WeatherData';
import transformWeather from './../../services/transformWeather';
import {api_weather} from './../../constants/api_url';
import './styles.css';
import {
    SUN,
} from './../../constants/weathers';

class WeatherLocation extends Component{

    constructor(){
        super();
        this.state = {
            city: 'Lima',
            data: null,
        };
    }

    componentDidMount() {
        this.handleUpdateClick();
    }

    componentDidUpdate(prevProps, prevState) {
        
    }

    handleUpdateClick = () => {
        console.log("Actualizado");
        fetch(api_weather).then(resolve => {
            return resolve.json();
        }).then(data=> {
            const newWeather = transformWeather(data);
            console.log(newWeather);
            this.setState({
                data: newWeather,
            });
        });  
    }

    render(){
        const {city, data} = this.state;
        return (
            <div className="weatherLocationCont">
                <Location city = {city}></Location>
                {data ? 
                        <WeatherData data={data}></WeatherData> : 
                        <CircularProgress size={50}/>}
            </div>
        );
    }
} 

export default WeatherLocation;