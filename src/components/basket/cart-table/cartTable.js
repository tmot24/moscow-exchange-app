import React from "react";
import {connect} from "react-redux";
import "./cartTable.css";
import {Container} from "@material-ui/core";
import {deleteFromBasket} from "../../../actions/actions";
import {Link} from "react-router-dom";
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';

const CartTable = ({basket, deleteFromBasket}) => {

    return (
        <Container>
            <div className={"cart"}>
                <div className={"cart-title"}>Ваш портфель</div>
                <div className={"cart-list"}>
                    {
                        basket.map(item => {
                            const {name, id, amount, url} = item;
                            return (
                                <div key={id} className={"cart-item"}>
                                    <img src={url} className={"cart-item-img"} alt={id}/>
                                    <Link to={`details/${id}`} className={"cart-item-title"}>{name}</Link>
                                    <div className={"cart-item-amount"}>{amount}</div>
                                    <IconButton onClick={() => deleteFromBasket(id)} aria-label="delete">
                                        <DeleteIcon/>
                                    </IconButton>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        </Container>
    );
};

const mapStateToProps = ({basket}) => {
    return {
        basket
    };
};
const mapDispatchToProps = {
    deleteFromBasket,
};

export default connect(mapStateToProps, mapDispatchToProps)(CartTable);
