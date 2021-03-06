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
                    <FlexibleWidthXYPlot height={300} margin={{left: 75, right: 50}}>
                        <XAxis
                            tickFormat={function tickFormat(labels) {
                                return new Date(labels).toLocaleDateString();
                            }}
                            style={{text: {fontSize: 14}}}
                            tickTotal={10}
                        />
                        <YAxis style={{text: {fontSize: 14}}}/>
                        <LineSeries
                            data={coordinates}
                        />
                    </FlexibleWidthXYPlot>
                </div>
        );
    }
}