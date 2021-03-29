import './App.css';
import React from "react";
import ShareDetails from "../shareDetails/shareDetails";
import Home from "../home/home";


const App = () => {
    return (
        <div className="App">
            <header className="App-header">
                <Home/>
                <ShareDetails/>
            </header>
            <img style={{position: "fixed", bottom: 10, right: 10, height: 100,}}
                 src="https://img.pngio.com/work-in-progress-png-96-images-in-collection-page-2-work-in-progress-png-527_300.png"
                 alt={"img"}/>
        </div>
    );
};


export default App;
