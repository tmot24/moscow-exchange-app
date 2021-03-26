const initialState = {
    shares: {},
    chart: [],
    loading: true,
    trueChart: [],
    trueShare: 123,
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

        case "TRUE_CHART":
            return  {
                ...state,
                trueChart: action.payload,
                loading: false,
            }

        case "TRUE_SHARE":
            return  {
                ...state,
                trueShare: action.payload,
                loading: false,
            }

        default:
            return state;
    }
};

export default reducer;