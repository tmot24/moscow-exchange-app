import './App.css';
import React from "react";
import ShareDetails from "../shareDetails/shareDetails";
import Home from "../home/home";


const App = () => {
    return (
        <div className="App">
            <header className="App-header">
                <Home/>
                {/*<ShareDetails/>*/}
            </header>
        </div>
    );
};


export default App;
