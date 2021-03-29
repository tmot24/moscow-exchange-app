import React from "react";
import Spinner from "../../spinner/spinner";
import Grid from '@material-ui/core/Grid';

export default class ShareTitle extends React.Component {

    render() {
        const {shareArr} = this.props;

        if (!shareArr) {
            return <Spinner/>;
        }

        const shareMarketData = shareArr[0];
        const shareSecurities = shareArr[1];

        return (
            <header className="App-header">
                <Grid container spacing={3}>
                    <Grid item xs={6} container direction="row" justify="flex-start" alignItems="center" style={{textAlign: "left"}}>
                        {shareSecurities.secname} {shareSecurities.secid}
                        <br/>
                        {shareMarketData.longTitle("last")} {shareMarketData.last}
                    </Grid>
                    <Grid item xs={6} container direction="row" justify="flex-end" alignItems="center" style={{textAlign: "right"}}>
                        {shareMarketData.shortTitle("numtrades")}: {shareMarketData.numtrades}
                        <br/>
                        {shareMarketData.shortTitle("voltoday")}: {shareMarketData.voltoday}
                        <br/>
                    </Grid>
                </Grid>
            </header>
        );
    }

}