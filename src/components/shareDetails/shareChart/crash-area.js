import React from "react";
import {
    LineSeries,
    XAxis,
    YAxis,
    FlexibleWidthXYPlot,
} from 'react-vis';
import "react-vis/dist/style.css";


export default class MyChart extends React.Component {
    render() {
        const {coordinates} = this.props;

        return (
            <div style={{marginTop: 30}}>
                <FlexibleWidthXYPlot height={300}>
                    <XAxis
                        tickFormat={function tickFormat(labels) {
                            return new Date(labels).toLocaleDateString();
                        }}
                        style={{text: {fontSize: 14, fill: "white"}}}
                    />
                    <YAxis style={{text: {fontSize: 14, fill: "white"}}}/>
                    <LineSeries
                        data={coordinates}
                    />
                </FlexibleWidthXYPlot>
            </div>
        );
    }
}