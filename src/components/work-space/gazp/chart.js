import "../../app/App.css";
import React from "react";
import WithExchangeService from "../../hoc/with-exchange-service";
import {connect} from "react-redux";
import Spinner from "../../spinner/spinner";
import {chartLoaded, requested} from "../../../actions/actions";
import {Lines, Layer, Ticks, Title, Chart as Charts} from 'rumble-charts';

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
                return [dataTitle, closePrice]
            })
            // Запись в store
            .then(result => this.props.chartLoaded(result));


    }

    render() {
        const {chart, loading} = this.props;

        if (loading || !chart) {
            return <Spinner/>;
        } else {
            console.log(chart)
            const dataTitle = chart[0];
            const array = chart[1].map(elem => elem[1]);
            const series = [{
                name: `${dataTitle}`, // optional
                // ... other attributes
                data: array
            }]

            return (
                <header className="App-header">
                    <Charts width={1000} height={1000} minY={0} series={series}>
                        <Layer width='80%' height='90%' position='top center'>
                            <Lines/>
                        </Layer>
                    </Charts>
                </header>
            );
        }
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