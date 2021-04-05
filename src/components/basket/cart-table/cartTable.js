import React, {useEffect} from "react";
import {useDispatch} from "react-redux";
import "./cartTable.css";
import {Container} from "@material-ui/core";
import {Link} from "react-router-dom";
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import {useSelector} from "react-redux";
import {deleteFromBasket, addItemInBasket, removeItemInBasket} from "../../../actions/actions";
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

export function CartTable() {
    const basket = useSelector(state => state.basket);
    const dispatch = useDispatch();

    useEffect(() => {
        localStorage.setItem("basket", JSON.stringify(basket));
    }, [basket]);

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
                                    <div className={"cart-item-amount"}>
                                        <IconButton onClick={() => dispatch(addItemInBasket(id))}>
                                            <ArrowDropUpIcon/>
                                        </IconButton>
                                        <div>{amount}</div>
                                        <IconButton onClick={() => dispatch(removeItemInBasket(id))}>
                                            <ArrowDropDownIcon/>
                                        </IconButton>
                                    </div>
                                    <IconButton onClick={() => dispatch(deleteFromBasket(id))} aria-label="delete">
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
}
