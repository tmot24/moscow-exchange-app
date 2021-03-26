import "../../app/App.css";
import React from "react";
import WithExchangeService from "../../hoc/with-exchange-service";
import {connect} from "react-redux";
import Spinner from "../../spinner/spinner";
import {trueShared} from "../../../actions/actions";
import {ShareMarketData, ShareSecurities} from "../classes/currentOfShare";

class Gazp extends React.Component {

    componentDidMount() {
        // this.props.sharesRequested();
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
                this.props.trueShared(result);
            });
    }

    render() {
        const {trueShare, loading} = this.props;
        console.log(trueShare)
        const shareMarketData = trueShare[0];
        const shareSecurities = trueShare[1];

        if (loading) {
            return <Spinner/>;
        }
        return (
            <header className="App-header">
                {shareSecurities.secid} {shareSecurities.shortname}
                <br/>
                {shareMarketData.longTitle("last")} {shareMarketData.last}
            </header>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        trueShare: state.trueShare,
        loading: state.loading,
    };
};

const mapDispatchToProps = {
    trueShared,
};

export default WithExchangeService()(connect(mapStateToProps, mapDispatchToProps)(Gazp));