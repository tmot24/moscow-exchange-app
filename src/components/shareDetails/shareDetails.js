import "../app/App.css";
import "./shareDetails.css";
import Grid from '@material-ui/core/Grid';
import React, {useState, useEffect, useContext} from "react";
import {ExchangeServiceContext} from "../exchange-service-context/exchange-service-context";
import {useDispatch, useSelector} from "react-redux";
import {shareLoaded, requested, chartLoaded} from "../../actions/actions";
import {ShareMarketData, ShareSecurities} from "../classes/currentOfShare";
import {ShareTitle} from "./shareTitle/shareTitle";
import ShareTable from "./shareTable/shareTable";
import Spinner from "../spinner/spinner";
import {Container} from "@material-ui/core";
import MyChart from "./shareChart/myChart";
import Button from '@material-ui/core/Button';

export function ShareDetails({itemId}) {
    const [period, setPeriod] = useState("fourMonth");
    const shareArr = useSelector(state => state.shareArr);
    const chart = useSelector(state => state.chart);
    const dispatch = useDispatch();
    const exchangeService = useContext(ExchangeServiceContext);

    useEffect(() => {
        dispatch(requested());
        // Получение объекта из API
        exchangeService.getCurrentShare(itemId)
            .then(obj => {
                const shareMarketData = new ShareMarketData(...obj.marketdata.data[0]);
                const shareSecurities = new ShareSecurities(...obj.securities.data[0]);
                return [shareMarketData, shareSecurities];
            })
            // Запись в store
            .then(result => {
                dispatch(shareLoaded(result));
            });
    }, [exchangeService, dispatch, itemId]);

    useEffect(() => {
        dispatch(requested());
        // Получение объекта из API
        exchangeService.getHistoryShare(itemId, period)
            .then(obj => obj.history)
            .then(data => {
                const dataTitle = data.columns[9];
                const closePrice = data.data.map(arr => [arr[1], arr[9]]);
                return [dataTitle, closePrice];
            })
            // Запись в store
            .then(result => dispatch(chartLoaded(result)));
    }, [exchangeService, dispatch, itemId, period]);

    window.scrollTo(0, 0);

    if (!shareArr || !chart) {
        return <Spinner/>;
    }

    const shareSecurities = shareArr[1];
    const coordinates = chart[1].map(value => {
        return {x: (new Date(value[0])).getTime(), y: value[1]};
    });

    return (
        <Container>
            <Grid container style={{padding: 10}}>
                <Grid item xs={12}>
                    <ShareTitle shareArr={shareArr}/>
                </Grid>
                <Grid item xs={12}>
                    <MyChart coordinates={coordinates}/>
                    <div className={"buttons"}>
                        <Button style={{flexBasis: 120}} variant="contained"
                                onClick={() => setPeriod("fourMonth")}>4 месяца</Button>
                        <Button style={{flexBasis: 120}} variant="contained"
                                onClick={() => setPeriod("twoMonth")}>2 месяца</Button>
                        <Button style={{flexBasis: 120}} variant="contained"
                                onClick={() => setPeriod("oneMonth")}>1 месяц</Button>
                        <Button style={{flexBasis: 120}} variant="contained"
                                onClick={() => setPeriod("twoWeek")}>2 недели</Button>
                        <Button style={{flexBasis: 120}} variant="contained"
                                onClick={() => setPeriod("oneWeek")}>1 неделя</Button>
                    </div>
                </Grid>
                <Grid item xs={12}>
                    <ShareTable shareArr={shareSecurities} title={"Дополнительная информация"}/>
                </Grid>
            </Grid>
        </Container>
    );
}