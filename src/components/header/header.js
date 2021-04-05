import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Badge from '@material-ui/core/Badge';
import {withStyles} from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import {useSelector} from "react-redux";
import HomeIcon from '@material-ui/icons/Home';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import {Link} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    bar: {
        justifyContent: "space-between",
    },
    bgIcon: {
        color: theme.palette.common.white,
    },
    icon: {
        color: theme.palette.common.white,
        fontSize: 35,
    }
}));
const StyledBadge = withStyles((theme) => ({
    badge: {
        top: 7,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 4px',
    },
}))(Badge);

export function AppHeader() {
    const classes = useStyles();
    const basket = useSelector(state => state.basket);
    return (
        <div className={classes.root}>
            <AppBar position="fixed">
                <Toolbar className={classes.bar}>
                    <IconButton className={classes.bgIcon} aria-label="cart">
                        <Link to={"/"}>
                            <HomeIcon className={classes.icon}/>
                        </Link>
                    </IconButton>
                    <IconButton className={classes.bgIcon} aria-label="cart">
                        <Link to={"/basket"}>
                            <StyledBadge badgeContent={basket.length} color="secondary">
                                <ShoppingBasketIcon className={classes.icon}/>
                            </StyledBadge>
                        </Link>
                    </IconButton>
                </Toolbar>
            </AppBar>
        </div>
    );
}
