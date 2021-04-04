import './App.css';
import React from "react";
import ShareDetails from "../shareDetails/shareDetails";
import {Home} from "../home/home";
import {AppHeader} from "../header/header";
import {Route, Switch} from "react-router-dom";
import {Basket} from "../basket/basket";


const App = () => {
    return (
        <Route>
            <AppHeader/>
            <div className="App">
                <Switch>
                    <Route path={"/"} exact component={Home}/>
                    <Route path={"/basket"} exact component={Basket}/>
                    <Route path={"/details/:id"} render={
                        ({match}) => {
                            const {id} = match.params;
                            return <ShareDetails itemId={id}/>;
                        }}/>
                </Switch>
                <img style={{position: "fixed", bottom: 10, right: 10, height: 100,}}
                     src="https://img.pngio.com/work-in-progress-png-96-images-in-collection-page-2-work-in-progress-png-527_300.png"
                     alt={"img"}/>
            </div>
        </Route>
    );
};


export default App;
