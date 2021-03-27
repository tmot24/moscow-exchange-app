import "../../app/App.css";
import React from "react";
import WithExchangeService from "../../hoc/with-exchange-service";
import {connect} from "react-redux";
import Spinner from "../../spinner/spinner";
import {chartLoaded, requested} from "../../../actions/actions";
import {Lines, Layer, Ticks, Title, Labels, Chart as Charts} from 'rumble-charts';

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
            const dataTitle = chart[0];
            const array = chart[1].map(elem => [elem[0], elem[1]]);
            const data = array.map(([label , y]) => ({ label, y }))
            const series = [{
                name: `${dataTitle}`, // optional
                data: data
            }]
            return (
                <header className="App-header">
                    <Charts width={1000} height={500} minY={210} series={series}>
                        <Layer width='80%' height='90%' position='top center'>
                            <Ticks
                                axis='y'
                                lineLength='100%'
                                lineVisible={true}
                                lineStyle={{stroke:'lightgray'}}
                                labelStyle={{textAnchor:'end',alignmentBaseline:'middle',fontSize:'0.5em',fill:'lightgray'}}
                                labelAttributes={{x: -5}}
                            />
                            <Ticks
                                axis='x'
                                label={({ index, props }) => props.series[0].data[index].label}
                                labelStyle={{textAnchor:'middle',alignmentBaseline:'before-edge',fontSize:'0.5em',fill:'lightgray'}}
                                labelAttributes={{y: 1}}
                            />
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