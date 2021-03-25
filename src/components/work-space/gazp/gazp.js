import "../../app/App.css";
import React from "react";
import WithExchangeService from "../../hoc/with-exchange-service";
import {connect} from "react-redux";
import Spinner from "../../spinner/spinner";
import {sharesLoaded, sharesRequested} from "../../../actions/actions";
import {ShareMarketData, ShareSecurities} from "../classes/shareMarketData";

class Gazp extends React.Component {

    componentDidMount() {
        this.props.sharesRequested();
        // Получение объекта из API
        const {ExchangeService} = this.props;
        ExchangeService.getCurrentGAZP()
            .then(obj => {
                console.log(`Объект из reducer`);
                console.log(obj);
                const shareMarketData = new ShareMarketData(...obj.marketdata.data[0]);
                console.log(`Класс shareMarketData`);
                console.log(shareMarketData);
                const shareSecurities = new ShareSecurities(...obj.securities.data[0]);
                console.log(`Класс shareSecurities`);
                console.log(shareMarketData);
                return {
                    shareMarketData: shareMarketData,
                    shareSecurities: shareSecurities,
                };
            })
            // Запись в store
            .then(result => this.props.sharesLoaded(result));

//         fetch("https://iss.moex.com/iss/engines/stock/markets/shares/boards/TQBR/securities/columns.json")
//             .then(prom => prom.json())
//             .then(json => console.log(json))
// /*            .then(json => {
//                     for (let i = 0; i <= 27; i++) {
//                         console.log(json.securities.data[i][3]);
//                     }
//
//                 }
//             );*/
    }

    render() {
        const {share, loading} = this.props;

        if (loading) {
            return <Spinner/>;
        }
        return (
            <header className="App-header">
                {share.shareSecurities.secid} {share.shareSecurities.shortname}
                <br/>
                {share.shareMarketData.longTitle("last")} {share.shareMarketData.last}
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

/*fetch("http://iss.moex.com/iss/history/engines/stock/markets/shares/boards/TQBR/securities/GAZP.json?from=2021-01-01")
.then(prom => prom.json())
.then(json => console.log(json));*/