import React from "react";
import Spinner from "../../spinner/spinner";
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import {addedToBasket} from "../../../actions/actions";
import {useDispatch} from "react-redux";

export function ShareTitle({shareArr}) {
    const dispatch = useDispatch();

    if (!shareArr) {
        return <Spinner/>;
    }

    const shareMarketData = shareArr[0];
    const shareSecurities = shareArr[1];

    return (
        <header className="App-header" style={{marginTop: 20}}>
            <Grid container spacing={3}>
                <Grid item xs={4} container direction="row" justify="flex-start" alignItems="center"
                      style={{textAlign: "left", fontSize: 24}}>
                    {shareSecurities.secname} {shareSecurities.secid}
                    <br/>
                    {shareMarketData.longTitle("last")} {shareMarketData.last}
                </Grid>
                <Grid item xs={4} container direction="row" justify="center" alignItems="center"
                      style={{textAlign: "center", fontSize: 24}}>
                    <Button size={"large"} variant="contained" style={{backgroundColor: "#8bc34a"}}
                            onClick={() => dispatch(addedToBasket(shareSecurities.secid.toLowerCase()))}
                    >
                        Купить
                    </Button>
                </Grid>
                <Grid item xs={4} container direction="row" justify="flex-end" alignItems="center"
                      style={{textAlign: "right", fontSize: 24}}>
                    {shareMarketData.shortTitle("numtrades")}: {shareMarketData.numtrades}
                    <br/>
                    {shareMarketData.shortTitle("voltoday")}: {shareMarketData.voltoday}
                    <br/>
                </Grid>
            </Grid>
        </header>
    );
}