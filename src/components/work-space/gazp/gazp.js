import "../../app/App.css";
import React from "react";
import WithExchangeService from "../../hoc/with-exchange-service";
import {connect} from "react-redux";
import Spinner from "../../spinner/spinner";
import {shareLoaded, requested} from "../../../actions/actions";
import {ShareMarketData, ShareSecurities} from "../classes/currentOfShare";

class Gazp extends React.Component {

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
        const {shareArr, loading} = this.props;

        if (loading || !shareArr) {
            return <Spinner/>;
        } else {
            const shareMarketData = shareArr[0];
            const shareSecurities = shareArr[1];

            return (
                <header className="App-header">
                    {shareSecurities.secid} {shareSecurities.shortname}
                    <br/>
                    {shareMarketData.longTitle("last")} сегодня {shareMarketData.last}
                </header>
            );
        }
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

export default WithExchangeService()(connect(mapStateToProps, mapDispatchToProps)(Gazp));