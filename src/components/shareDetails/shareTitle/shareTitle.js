import React from "react";
import Spinner from "../../spinner/spinner";

export default class ShareTitle extends React.Component {

    render() {
        const {shareArr} = this.props;

        if (!shareArr) {
            return <Spinner/>
        }

        const shareMarketData = shareArr[0];
        const shareSecurities = shareArr[1];

        return (
            <header className="App-header">
                {shareSecurities.secid} {shareSecurities.shortname}
                <br/>
                {shareMarketData.longTitle("last")} {shareMarketData.last}
            </header>
        );
    }

}