export const shareLoaded = (newShare) => {
    return {
        type: "SHARE_LOADED",
        payload: newShare,
    };
};

export const chartLoaded = (newChart) => {
    return {
        type: "CHART_LOADED",
        payload: newChart,
    };
};

export const requested = () => {
    return {
        type: "REQUESTED",
    };
};