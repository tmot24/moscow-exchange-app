import React from 'react';
import './menuItem.css';
import {Link} from "react-router-dom";

const MenuItem = ({menuItem}) => {
    const {name, id, url} = menuItem;
    return (
        <li className="menu-item">
            {/*<Link to={`/${menu.id}`}>*/}
            <div className="menu-title">{name}</div>
            <img className="menu-img"
                 src={url}
                 alt={name}/>
            <Link to={`details/${id}`}
                className="menu-btn"
            >Подробнее
            </Link>
            {/*</Link>*/}
        </li>
    );
};

export default MenuItem;