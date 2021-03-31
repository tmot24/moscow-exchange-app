import "../app/App.css";
import Grid from '@material-ui/core/Grid';
import React from "react";
import WithExchangeService from "../hoc/with-exchange-service";
import {connect} from "react-redux";
import {shareLoaded, requested} from "../../actions/actions";
import {ShareMarketData, ShareSecurities} from "../classes/currentOfShare";
import ShareTitle from "./shareTitle/shareTitle";
import Chart from "./shareChart/chart";
import ShareTable from "./shareTable/shareTable";
import Spinner from "../spinner/spinner";
import {Container} from "@material-ui/core";

class ShareDetails extends React.Component {

    componentDidMount() {
        this.props.requested();
        // Получение объекта из API
        const {ExchangeService, itemId} = this.props;
        ExchangeService.getCurrentGAZP(itemId)
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

    render() {
        window.scrollTo(0, 0)
        const {shareArr} = this.props;

        if (!shareArr) {
            return <Spinner/>;
        }

        const shareSecurities = shareArr[1];

        return (
            <Container>
                <Grid container style={{padding: 10}}>
                    <Grid item xs={12}>
                        <ShareTitle shareArr={shareArr}/>
                    </Grid>
                    <Grid item xs={12}>
                        <Chart itemId={shareSecurities.secid}/>
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
        loading: state.loading,
    };
};

const mapDispatchToProps = {
    shareLoaded,
    requested,
};

export default WithExchangeService()(connect(mapStateToProps, mapDispatchToProps)(ShareDetails));