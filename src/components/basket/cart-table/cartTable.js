import Grid from '@material-ui/core/Grid';
import React from "react";
import WithExchangeService from "../../hoc/with-exchange-service";
import {connect} from "react-redux";
import {shareLoaded, requested} from "../../../actions/actions";
import {ShareMarketData, ShareSecurities} from "../../classes/currentOfShare";
import ShareTitle from "../../shareDetails/shareTitle/shareTitle";
import Chart from "../../shareDetails/shareChart/chart";
import ShareTable from "../../shareDetails/shareTable/shareTable";
import Spinner from "../../spinner/spinner";
import {Container} from "@material-ui/core";


const CartTable = ({basket, onDelete}) => {

    return (
        <div>
            <div className={"cart-title"}>Ваш заказ</div>
            <div className={"cart-list"}>
                {
                    basket.map(item => {
                        const {name, id, amount, url} = item;
                        return (
                            <div key={id} className={"cart-item"}>
                                <img src={url} className={"cart-item-img"} alt={id}/>
                                <div className={"cart-item-title"}>{name}</div>
                                <div className={"cart-item-amount"}>{amount}</div>
                                <div onClick={() => onDelete(id)} className={"cart-close"}>&times;</div>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    );
};

const mapStateToProps = ({basket}) => {
    return{
        basket
    }
};
const mapDispatchToProps = () => {
    return {
        onDelete: (id) => {
            console.log(`Удалили ${id}`)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartTable);
