import "../../app/App.css";
import React from "react";
import WithExchangeService from "../../hoc/with-exchange-service";
import {connect} from "react-redux";
import Spinner from "../../spinner/spinner";
import {sharesLoaded, sharesRequested} from "../../../actions/actions";
import Share from "../classes/share";

class Gazp extends React.Component {

    componentDidMount() {
        this.props.sharesRequested();
        // Получение объекта из API
        const {ExchangeService} = this.props;
        ExchangeService.getCurrentGAZP()
            .then(obj => {
                console.log(`Объект из reducer`);
                console.log(obj);
                const share = new Share(...obj.marketdata.data[0]);
                console.log(`Класс share`);
                console.log(share);
                return {
                    prise: share.last,
                    title: share.longTitle("last"),
                };
            })
            // Запись в store
            .then(result => this.props.sharesLoaded(result));

        fetch("https://iss.moex.com/iss/engines/stock/markets/shares/boards/TQBR/securities/columns.json")
            .then(prom => prom.json())
            .then(json => {
                for (let i = 0; i <= 55; i++) {
                    console.log(json.marketdata.data[i][3])
                }
            });
    }

    render() {
        const {sharePrice, loading} = this.props;

        if (loading) {
            return <Spinner/>;
        }
        return (
            <header className="App-header">
                {sharePrice.title} {sharePrice.prise}
            </header>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        sharePrice: state.shares,
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