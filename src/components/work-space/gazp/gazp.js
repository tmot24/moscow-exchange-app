import "../../app/App.css";
import React from "react";
import WithExchangeService from "../../hoc/with-exchange-service";
import {connect} from "react-redux";
import Spinner from "../../spinner/spinner";
import {sharesLoaded, sharesRequested} from "../../../actions/actions";
import {CurrentOfShare, ShareSecurities} from "../classes/currentOfShare";
import HistoryOfShare from "../classes/historyOfShare";

class Gazp extends React.Component {

    componentDidMount() {
        this.props.sharesRequested();
        // Получение объекта из API
        const {ExchangeService} = this.props;
        /*        ExchangeService.getCurrentGAZP()
                    .then(obj => {
                        console.log(obj)
                        const shareMarketData = new CurrentOfShare(...obj.marketdata.data[0]);
                        const shareSecurities = new ShareSecurities(...obj.securities.data[0]);
                        return {
                            shareMarketData: shareMarketData,
                            shareSecurities: shareSecurities,
                        };
                    })
                    // Запись в store
                    .then(result => this.props.sharesLoaded(result));*/

        ExchangeService.getHistoryGAZP()
            .then(obj => {
                console.log(obj.history);
                const historyOfShare = new HistoryOfShare(...obj.history.data[0]);
                console.log(historyOfShare);
                return {
                    historyOfShare: historyOfShare,
                };
            })
            // Запись в store
            .then(result => this.props.sharesLoaded(result));
    }

    render() {
        const {share, loading} = this.props;

        if (loading) {
            return <Spinner/>;
        }
        return (
            <header className="App-header">
{/*                {share.shareSecurities.secid} {share.shareSecurities.shortname}
                <br/>
                {share.shareMarketData.longTitle("last")} {share.shareMarketData.last}*/}
                {share.historyOfShare.secid} {share.historyOfShare.shortname}
                <br/>
                {share.historyOfShare.tradedate} {share.historyOfShare.close}
            </header>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        share: state.shares,
        loading: state.loading,
    };
};

const mapDispatchToProps = {
    sharesLoaded,
    sharesRequested,
};

export default WithExchangeService()(connect(mapStateToProps, mapDispatchToProps)(Gazp));