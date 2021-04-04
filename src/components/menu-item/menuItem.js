/*

export function MenuItem({menuItem}) {
    const {name, id, url} = menuItem;
    return (
        <li className="menu-item">
            <div className="menu-title">{name}</div>
            <img className="menu-img"
                 src={url}
                 alt={name}/>
            <Link to={`details/${id}`}
                className="menu-btn"
            >Подробнее
            </Link>
        </li>
    );
}
*/
import React from 'react';
import {Link} from "react-router-dom";
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        margin: 20,
        width: 300,
        height: 350,
        display: "flex",
        flexFlow: "column",
        verticalAlign: "middle",
    },
    link: {
        textDecoration: "none",
        color: "inherit",
    },
    text: {

    }
});

export function MenuItem({menuItem}) {
    const {name, id, url} = menuItem;
    const classes = useStyles();

    return (
        <Card elevation={9} className={classes.root}>
            <Link to={`details/${id}`} className={classes.link}>
                <CardActionArea style={{height: 350}}>
                    <CardMedia
                        component="img"
                        image={url}
                        title={id}
                    />
                    <CardContent className={classes.text}>
                        <Typography  gutterBottom variant="h5" component="h2">
                            {name}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Link>
        </Card>
    );
}

