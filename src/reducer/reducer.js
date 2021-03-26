const initialState = {
    shareArr: null,
    chart: null,
    loading: true,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "SHARE_LOADED":
            return {
                ...state,
                shareArr: action.payload,
                loading: false,
            };

        case "CHART_LOADED":
            return {
                ...state,
                chart: action.payload,
                loading: false,
            };

        case "REQUESTED":
            return {
                ...state,
                loading: true,
            };

        default:
            return state;
    }
};

export default reducer;