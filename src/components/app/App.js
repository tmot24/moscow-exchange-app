import './App.css';
import React from "react";
import WithExchangeService from "../hoc/with-exchange-service";
import {connect} from "react-redux";
import Spinner from "../spinner/spinner";
import {sharesLoaded, sharesRequested} from "../../actions/actions";

class App extends React.Component {

    componentDidMount() {
        this.props.sharesRequested();
        // Получение объекта из API
        const {ExchangeService} = this.props;
        ExchangeService.getCurrentGAZP()
            .then(obj => obj.marketdata.data[0][12])
            // Запись в store
            .then(result => this.props.sharesLoaded(result));
    }

    render() {
        const {sharePrice, loading} = this.props;

        if (loading) {
            return <Spinner/>
        }
        return (
            <div className="App">
                <header className="App-header">
                    Hello world!
                    <br/>
                    {sharePrice}
                </header>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        sharePrice: state.shares,
        loading: state.loading,
    };
};

const mapDispatchToProps = {
    sharesLoaded,
    sharesRequested,
};

export default WithExchangeService()(connect(mapStateToProps, mapDispatchToProps)(App));
