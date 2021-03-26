import "../../app/App.css";
import React from "react";
import WithExchangeService from "../../hoc/with-exchange-service";
import {connect} from "react-redux";
import Spinner from "../../spinner/spinner";
import {sharesLoaded, sharesRequested} from "../../../actions/actions";
import {ShareMarketData, ShareSecurities} from "../classes/currentOfShare";

class Gazp extends React.Component {

    componentDidMount() {
        this.props.sharesRequested();
        // Получение объекта из API
        const {ExchangeService} = this.props;
                ExchangeService.getCurrentGAZP()
                    .then(obj => {
                        const shareMarketData = new ShareMarketData(...obj.marketdata.data[0]);
                        const shareSecurities = new ShareSecurities(...obj.securities.data[0]);
                        // console.log(shareSecurities)
                        return {
                            shareMarketData: shareMarketData,
                            shareSecurities: shareSecurities,
                        };
                    })
                    // Запись в store
                    .then(result => this.props.sharesLoaded(result));
    }

    render() {
        const {shares, loading} = this.props;

        if (loading) {
            return <Spinner/>;
        }
        return (
            <header className="App-header">
                {shares.shareSecurities.secid} {shares.shareSecurities.shortname}
                <br/>
                {shares.shareMarketData.longTitle("last")} {shares.shareMarketData.last}
            </header>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        shares: state.shares,
        loading: state.loading,
    };
};

const mapDispatchToProps = {
    sharesLoaded,
    sharesRequested,
};

export default WithExchangeService()(connect(mapStateToProps, mapDispatchToProps)(Gazp));