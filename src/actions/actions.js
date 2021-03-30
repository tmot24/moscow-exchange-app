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

export const addedToBasket = (id) => {
    return {
        type: "ITEM_ADD_TO_BASKET",
        payload: id
    };
};

export const deleteFromBasket = (id) => {
    return {
        type: "ITEM_REMOVE_FROM_BASKET",
        payload: id
    };
};