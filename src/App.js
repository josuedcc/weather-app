import React, { Component } from 'react';
import WeatherLocation from './components/WeatherLocation'
import './App.css';

class App extends Component {

  componentDidMount(){
    document.title = "Weather App"
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
            <WeatherLocation city="Huanuco, pe"></WeatherLocation>
        </header>
      </div>
    );
  }
}

export default App;
