import Grid from '@material-ui/core/Grid';
import React from "react";
import WithExchangeService from "../hoc/with-exchange-service";
import {connect} from "react-redux";
import {shareLoaded, requested} from "../../actions/actions";
import {ShareMarketData, ShareSecurities} from "../classes/currentOfShare";
import ShareTitle from "../shareDetails/shareTitle/shareTitle";
import Chart from "../shareDetails/shareChart/chart";
import ShareTable from "../shareDetails/shareTable/shareTable";
import Spinner from "../spinner/spinner";
import {Container} from "@material-ui/core";

class Basket extends React.Component {


    render() {
        return (
            <div>
                Basket
            </div>
        );
    }

};

const mapStateToProps = {};

const mapDispatchToProps = {};

export default Basket;

// export default WithExchangeService()(connect(mapStateToProps, mapDispatchToProps)(Basket));