import React, { Component } from "react";
import WeatherInfo from "./components/weatherInfo";
import WeatherForm from "./components/weatherForm";

class App extends Component {
    render() {
        return (
            <div className="container p-4">
                <div className="row">
                    <div className="col-md-6">
                        <WeatherInfo/>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;