import React from "react";
import {
    XYPlot,
    LineSeries,
    XAxis,
    YAxis,
} from 'react-vis';
import "react-vis/dist/style.css";


export default class MyChart extends React.Component {
    render() {
        const {coordinates} = this.props;

        return (
            <XYPlot width={1200} height={500}>
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
            </XYPlot>
        );
    }
}