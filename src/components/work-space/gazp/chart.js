import "../../app/App.css";
import React from "react";
import WithExchangeService from "../../hoc/with-exchange-service";
import {connect} from "react-redux";
import Spinner from "../../spinner/spinner";
import {chartLoaded, requested} from "../../../actions/actions";
import Chart from "react-google-charts";

class MyChart extends React.Component {

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
        } else {
            const title = chart[0];
            const array = chart[1];

            const data = [
                ["Дата", "Цена закрытия"],
                ...array
            ];
            const options = {
                title: title,
                legend: {position: "top"},
            };
            return (
                <header className="App-header">
                    <Chart
                        width={'1000px'}
                        height={'400px'}
                        chartType="LineChart"
                        data={data}
                        options={options}
                    />
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

export default WithExchangeService()(connect(mapStateToProps, mapDispatchToProps)(MyChart));