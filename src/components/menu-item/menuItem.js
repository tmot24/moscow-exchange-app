import React from 'react';
import './menuItem.css';
// import {Link} from "react-router-dom";

const MenuItem = ({menuItem, onAddToCart}) => {
    const {name, id, amount, url} = menuItem;
    console.log(name);

    return (
        <li className="menu__item">
            {/*<Link to={`/${menuItem.id}`}>*/}
            <div className="menu__title">{name}</div>
            <img className="menu__img"
                 src={url}
                 alt={name}/>
            <button
                onClick={() => onAddToCart(id)}
                className="menu__btn"
            >Подробнее
            </button>
            {/*</Link>*/}
        </li>
    );
};

export default MenuItem;