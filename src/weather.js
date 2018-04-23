import React, { Component } from 'react';
import './App.css';
import './weather.css';
import axios from 'axios';

export default class Weather extends Component {
    constructor() {
        super();
        this.state = {
            data: {
                weather: [{
                    // icon:""
                }],
                main: {
                    temp: "loading...",
                    humidity: "loading...",
                }
            }
        }
    }
    componentDidMount() {
        axios.get("http://api.openweathermap.org/data/2.5/weather?lat=45.68&lon=-111.0447&APPID=35fb1f93aa13c887ea893c14484f18e2").then((response) => {
            response.data.main.temp = Math.floor(response.data.main.temp * (9 / 5) - 459.67)
            var icon = response.data.weather[0].icon
            this.setState({
                data: response.data,
            })
        })
    }
    // render() {
    //     if (typeof this.state.data.main.temp === 'string') {
    //         var shelter = 'loading...'
    //     } else {
    //         var shelter = ""
    //     }
    // }
    // render() {
    //     if (typeof this.state.data.main.humidity === 'string') {
    //         var humidity = 'fetching humidity...'
    //     } else {
    //         var humidity = ""
    //     }
    // }
    render() {
        if (typeof this.state.data.weather.icon === 'string') {
            var icon = 'retrieving icon...'
        } else {
            var icon = (this.state.data.weather[0].icon);
        }
        var iconUrl = `http://openweathermap.org/img/w/${this.state.data.weather[0].icon}.png`;
        console.log(iconUrl);
            return (
            <div className='weatherwelcome'>
            
                Welcome! The Temperature in Bozeman is Currently {this.state.data.main.temp} °F. ~ The Humidity is {this.state.data.main.humidity}%. Current Conditions:<img src={ iconUrl } />
            </div>
            
        )
    }
}