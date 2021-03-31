import "../app/App.css";
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

class ShareDetails extends React.Component {

    componentDidMount() {
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
        // Получение объекта из API
        ExchangeService.getHistoryShare(itemId)
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
        window.scrollTo(0, 0)
        const {shareArr, chart} = this.props;

        if (!shareArr || !chart) {
            return <Spinner/>;
        }

        const shareSecurities = shareArr[1];
        const coordinates = chart[1].map(value => {
            return  {x: (new Date(value[0])).getTime(), y: value[1]}
        });

        return (
            <Container>
                <Grid container style={{padding: 10}}>
                    <Grid item xs={12}>
                        <ShareTitle shareArr={shareArr}/>
                    </Grid>
                    <Grid item xs={12}>
                        <MyChart coordinates={coordinates}/>
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