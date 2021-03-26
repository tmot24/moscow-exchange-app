const initialState = {
    shares: {},
    chart: [],
    loading: true,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "SHARES_LOADED":
            return {
                ...state,
                shares: action.payload,
                loading: false,
            };
        case "CHART_LOADED":
            return {
                ...state,
                chart: action.payload,
                loading: false,
            };


        case "SHARES_REQUESTED":
            return {
                ...state,
                loading: true,
            };

        default:
            return state;
    }
};

export default reducer;