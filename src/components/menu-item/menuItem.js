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
    },
    link: {
        textDecoration: "none",
        color: "inherit",
    },
    action: {
        padding: 10,
        height: 350,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
    },
});

export function MenuItem({menuItem}) {
    const {name, id, url} = menuItem;
    const styles = useStyles();

    return (
        <Card elevation={9} className={styles.root}>
            <Link to={`details/${id}`} className={styles.link}>
                <CardActionArea  className={styles.action}>
                    <CardContent/>
                    <CardMedia
                        className={styles.img}
                        component="img"
                        image={url}
                        title={id}
                    />
                    <CardContent className={styles.text}>
                        <Typography gutterBottom variant="h5" component="h2">
                            {name}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Link>
        </Card>
    );
}

