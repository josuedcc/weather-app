import React, { Component } from 'react';
import LocationList from  './components/WeatherLocation/LocationList'
import './App.css';
import { MuiThemeProvider } from '@material-ui/core';

const cities = [
  'Lima, pe',
  'Huancayo, pe',
  'Huanuco, pe'
];

class App extends Component {

  componentDidMount(){
    document.title = "Weather App"
  }

  handleSelectedLocation = city => {
    console.log(`handleSelectedLocation ${city}`);
  }

  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <header className="App-header">
              <LocationList cities={cities} 
              onSelectedLocation={this.handleSelectedLocation} ></LocationList>
          </header>
        </div>
      </MuiThemeProvider>
      
    );
  }
}

export default App;
