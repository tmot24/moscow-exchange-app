export const sharesLoaded = (newShares) => {
    return {
        type: "SHARES_LOADED",
        payload: newShares,
    };
};

export const sharesRequested = () => {
    return {
        type: "SHARES_REQUESTED",
    };
};