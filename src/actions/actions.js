export const sharesLoaded = (newShares) => {
    return {
        type: "SHARES_LOADED",
        payload: newShares,
    };
};

export const chartLoaded = (newChart) => {
    return {
        type: "CHART_LOADED",
        payload: newChart,
    };
};

export const sharesRequested = () => {
    return {
        type: "SHARES_REQUESTED",
    };
};