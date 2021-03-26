import "../../app/App.css";
import React from "react";
import WithExchangeService from "../../hoc/with-exchange-service";
import {connect} from "react-redux";
import Spinner from "../../spinner/spinner";
import {trueCharted} from "../../../actions/actions";
import {Bars, Chart as Charts} from 'rumble-charts';

class Chart extends React.Component {

    componentDidMount() {
        // this.props.sharesRequested();
        // Получение объекта из API
        const {ExchangeService} = this.props;
        ExchangeService.getHistoryGAZP()
            .then(obj => {
                // console.log(obj.history.columns)
                // console.log(obj.history.data)
                return [{
                    data: [1, 2, 3]
                }, {
                    data: [5, 7, 11]
                }, {
                    data: [13, 17, 19]
                }];
            })
            // Запись в store
            .then(result => this.props.trueCharted(result));


    }

    render() {
        const {trueChart, loading} = this.props;

        if (loading) {
            return <Spinner/>;
        }
        return (
            <header className="App-header">
                <Charts width={600} height={250} minY={0} series={trueChart}>
                    <Bars/>
                </Charts>
            </header>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        trueChart: state.trueChart,
        loading: state.loading,
    };
};

const mapDispatchToProps = {
    trueCharted,
};

export default WithExchangeService()(connect(mapStateToProps, mapDispatchToProps)(Chart));