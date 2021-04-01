import "../app/App.css";
import "./shareDetails.css";
import Grid from '@material-ui/core/Grid';
import React from "react";
import WithExchangeService from "../hoc/with-exchange-service";
import {connect} from "react-redux";
import {shareLoaded, requested, chartLoaded} from "../../actions/actions";
import {ShareMarketData, ShareSecurities} from "../classes/currentOfShare";
import ShareTitle from "./shareTitle/shareTitle";
import ShareTable from "./shareTable/shareTable";
import Spinner from "../spinner/spinner";
import {Container} from "@material-ui/core";
import MyChart from "./shareChart/myChart";
import Button from '@material-ui/core/Button';

class ShareDetails extends React.Component {
    state = {
        period: "fourMonth",
    };

    currentShare () {
        this.props.requested();
        // Получение объекта из API
        const {ExchangeService, itemId} = this.props;
        ExchangeService.getCurrentShare(itemId)
            .then(obj => {
                const shareMarketData = new ShareMarketData(...obj.marketdata.data[0]);
                const shareSecurities = new ShareSecurities(...obj.securities.data[0]);
                return [shareMarketData, shareSecurities];
            })
            // Запись в store
            .then(result => {
                this.props.shareLoaded(result);
            });
    }
    currentOfHistory () {
        this.props.requested();
        const {ExchangeService, itemId} = this.props;
        // Получение объекта из API
        ExchangeService.getHistoryShare(itemId, this.state.period)
            .then(obj => obj.history)
            .then(data => {
                const dataTitle = data.columns[9];
                const closePrice = data.data.map(arr => [arr[1], arr[9]]);
                return [dataTitle, closePrice];
            })
            // Запись в store
            .then(result => this.props.chartLoaded(result));
    }

    componentDidMount() {
        this.currentShare();
        this.currentOfHistory();

    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.state.period !== prevState.period) {
            this.currentOfHistory();
        }
    }

    updatePeriod(period) {
        this.setState({period});
    }

    render() {
        window.scrollTo(0, 0);
        const {shareArr, chart} = this.props;

        if (!shareArr || !chart) {
            return <Spinner/>;
        }

        const shareSecurities = shareArr[1];
        const coordinates = chart[1].map(value => {
            return {x: (new Date(value[0])).getTime(), y: value[1]};
        });

        return (
            <Container>
                <Grid container style={{padding: 10}}>
                    <Grid item xs={12}>
                        <ShareTitle shareArr={shareArr}/>
                    </Grid>
                    <Grid item xs={12}>
                        <MyChart coordinates={coordinates}/>
                        <div className={"buttons"}>
                            <Button style={{flexBasis: 120}} variant="contained"
                                    onClick={() => this.updatePeriod("oneWeek")}>1 неделя</Button>
                            <Button style={{flexBasis: 120}} variant="contained"
                                    onClick={() => this.updatePeriod("twoWeek")}>2 недели</Button>
                            <Button style={{flexBasis: 120}} variant="contained"
                                    onClick={() => this.updatePeriod("oneMonth")}>1 месяц</Button>
                            <Button style={{flexBasis: 120}} variant="contained"
                                    onClick={() => this.updatePeriod("twoMonth")}>2 месяца</Button>
                            <Button style={{flexBasis: 120}} variant="contained"
                                    onClick={() => this.updatePeriod("fourMonth")}>4 месяца</Button>
                        </div>
                    </Grid>
                    <Grid item xs={12}>
                        <ShareTable shareArr={shareSecurities} title={"Дополнительная информация"}/>
                    </Grid>
                </Grid>
            </Container>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        shareArr: state.shareArr,
        chart: state.chart,
        loading: state.loading,
    };
};

const mapDispatchToProps = {
    chartLoaded,
    shareLoaded,
    requested,
};

export default WithExchangeService()(connect(mapStateToProps, mapDispatchToProps)(ShareDetails));