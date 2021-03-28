import React from "react";
import {
    XYPlot,
    LineSeries,
    VerticalGridLines,
    HorizontalGridLines,
    XAxis,
    YAxis,
    MarkSeries,
    VerticalBarSeries,
    GradientDefs,
    Crosshair,
    Highlight,
    DecorativeAxis,
    AreaSeries,
    FlexibleXYPlot,
    Borders,
} from 'react-vis';
import "react-vis/dist/style.css";


export default class MyChart extends React.Component {


    render() {
        const {coordinates, labels} = this.props;
        console.log(new Date(labels[0]))

        return (
            <XYPlot width={1000} height={500}>
                <XAxis tickFormat={function tickFormat(labels){return new Date(labels).toLocaleDateString()}}/>
                <YAxis/>
                <LineSeries
                    data={coordinates}
                />
            </XYPlot>


        );
    }
}