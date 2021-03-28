import "../../../app/App.css";
import React from "react";
import WithExchangeService from "../../../hoc/with-exchange-service";
import {connect} from "react-redux";
import Spinner from "../../../spinner/spinner";
import {chartLoaded, requested} from "../../../../actions/actions";
import MyChart from "./crash-area";


import "react-vis/dist/style.css";

class Chart extends React.Component {

    componentDidMount() {
        this.props.requested();
        // Получение объекта из API
        const {ExchangeService} = this.props;
        ExchangeService.getHistoryGAZP()
            .then(obj => obj.history)
            .then(data => {
                const dataTitle = data.columns[9];
                const closePrice = data.data.map(arr => [arr[1], arr[9]]);
                return [dataTitle, closePrice];
            })
            // Запись в store
            .then(result => this.props.chartLoaded(result));


    }

    render() {
        const {chart, loading} = this.props;

        if (loading || !chart) {
            return <Spinner/>;
        }

        const yData = chart[1];
        const labels = yData.map(value => value[0]);
        const closePrices = yData.map(value => value[1]);
        const coordinates = closePrices.map((value, index) => {
            return  {x: index, y: value}
        });

        return (
            <header className="App-header">
                <MyChart coordinates={coordinates} labels={labels}/>
            </header>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        chart: state.chart,
        loading: state.loading,
    };
};

const mapDispatchToProps = {
    chartLoaded,
    requested,
};

export default WithExchangeService()(connect(mapStateToProps, mapDispatchToProps)(Chart));