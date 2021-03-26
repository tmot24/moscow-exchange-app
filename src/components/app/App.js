import './App.css';
import React from "react";
import Gazp from "../work-space/gazp/gazp";
import Chart from "../work-space/gazp/chart";


const App = () => {
    return (
        <div className="App">
            <header className="App-header">
                Hello world!
                <Gazp/>
                <Chart/>
            </header>
        </div>
    );
};


export default App;
