import React from "react";
import {connect} from "react-redux";
import "./cartTable.css";
import {Container} from "@material-ui/core";


const CartTable = ({basket, onDelete}) => {

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
                                    <div className={"cart-item-title"}>{name}</div>
                                    <div className={"cart-item-amount"}>{amount}</div>
                                    <div onClick={() => onDelete(id)} className={"cart-close"}>&times;</div>
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
const mapDispatchToProps = () => {
    return {
        onDelete: (id) => {
            console.log(`Удалили ${id}`);
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartTable);
