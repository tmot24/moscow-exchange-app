import "../app/App.css";
import React from "react";
import WithExchangeService from "../hoc/with-exchange-service";
import {connect} from "react-redux";
import {shareLoaded, requested} from "../../actions/actions";
import {ShareMarketData, ShareSecurities} from "../classes/currentOfShare";
import ShareTitle from "./shareTitle/shareTitle";
import Chart from "./shareChart/chart";
import ShareTable from "./shareTable/shareTable";
import Spinner from "../spinner/spinner";

class ShareDetails extends React.Component {

    componentDidMount() {
        this.props.requested();
        // Получение объекта из API
        const {ExchangeService} = this.props;
        ExchangeService.getCurrentGAZP()
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
        const {shareArr} = this.props;

        if (!shareArr) {
            return <Spinner/>
        }

        const shareMarketData = shareArr[0];

        const shareSecurities = shareArr[1];

        return (
            <>
                <ShareTitle shareArr={shareArr}/>
                <Chart/>
                <ShareTable shareArr={shareSecurities} title={"Securities"}/>
                <ShareTable shareArr={shareMarketData} title={"MarketData"}/>
            </>
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